'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { toggleSidebar, toggleTheme } from '@/lib/slices/uiSlice';
import { wsService } from '@/lib/websocket';
import {
  Bars3Icon,
  BellIcon,
  SunIcon,
  MoonIcon,
  WifiIcon,
  WifiIcon as WifiOffIcon,
} from '@heroicons/react/24/outline';

export default function Header() {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state: any) => state.ui);
  const isConnected = wsService.isConnectedStatus();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <button
            onClick={() => dispatch(toggleSidebar())}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
          <h1 className="ml-4 lg:ml-0 text-xl font-semibold text-gray-900">
            Task Management Dashboard
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          {/* WebSocket status */}
          <div className="flex items-center space-x-2">
            {isConnected ? (
              <WifiIcon className="h-5 w-5 text-green-500" />
            ) : (
              <WifiOffIcon className="h-5 w-5 text-red-500" />
            )}
            <span className="text-sm text-gray-500">
              {isConnected ? 'Connected' : 'Disconnected'}
            </span>
          </div>

          {/* Theme toggle */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <MoonIcon className="h-5 w-5" />
            ) : (
              <SunIcon className="h-5 w-5" />
            )}
          </button>

          {/* Notifications */}
          <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 relative">
            <BellIcon className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  );
} 