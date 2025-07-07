# Task Management Dashboard

A comprehensive React + TypeScript Task Management Dashboard with real-time updates, PWA support, and modern UI.

## Features

- ✅ **React 19 + TypeScript** - Modern React with full TypeScript support
- ✅ **Next.js 15** - App Router with Server Components
- ✅ **Redux Toolkit** - State management with async thunks
- ✅ **WebSockets** - Real-time task updates
- ✅ **PWA Support** - Progressive Web App with offline capabilities
- ✅ **Tailwind CSS** - Modern, responsive styling
- ✅ **Authentication** - Mock authentication system
- ✅ **CRUD Operations** - Full task management
- ✅ **Real-time Updates** - Live task synchronization
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Dark/Light Theme** - Theme switching capability

## Tech Stack

- **Frontend**: React 19, TypeScript, Next.js 15
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Real-time**: WebSocket API
- **PWA**: next-pwa
- **Icons**: Heroicons, Lucide React
- **UI Components**: Headless UI

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd task-management-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Demo Credentials

- **Email**: admin@example.com
- **Password**: password

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Dashboard page
├── components/            # React components
│   ├── auth/              # Authentication components
│   ├── layout/            # Layout components
│   └── tasks/             # Task management components
├── lib/                   # Utilities and configurations
│   ├── hooks.ts           # Redux hooks
│   ├── providers.tsx      # Redux provider
│   ├── store.ts           # Redux store
│   ├── websocket.ts       # WebSocket service
│   └── slices/            # Redux slices
└── types/                 # TypeScript type definitions
```

## Key Components

### Redux Store
- **taskSlice**: Task CRUD operations and real-time updates
- **authSlice**: Authentication state management
- **uiSlice**: UI state (modals, sidebar, notifications)

### WebSocket Service
- Real-time task synchronization
- Automatic reconnection
- Event-driven updates

### PWA Features
- Service Worker for offline support
- App manifest for installability
- Responsive design for mobile devices

## API Endpoints

- `GET /api/tasks` - Fetch all tasks
- `POST /api/tasks` - Create new task
- `GET /api/tasks/[id]` - Get specific task
- `PUT /api/tasks/[id]` - Update task
- `DELETE /api/tasks/[id]` - Delete task

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_WS_URL=ws://localhost:3001
```

## PWA Configuration

The app is configured as a Progressive Web App with:

- Service Worker for offline functionality
- App manifest for installability
- Responsive design for mobile devices
- Theme-aware icons

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Tailwind CSS for styling

## Features in Detail

### Task Management
- Create, read, update, delete tasks
- Task filtering by status, priority, assignee
- Real-time updates across all clients
- Task status tracking (Todo, In Progress, Completed)
- Priority levels (Low, Medium, High)
- Due date management
- Tag system for task categorization

### Authentication
- Mock authentication system
- User session management
- Protected routes
- User profile display

### Real-time Features
- WebSocket connection for live updates
- Automatic reconnection on connection loss
- Real-time task synchronization
- Connection status indicator

### UI/UX
- Responsive design for all devices
- Dark/light theme switching
- Modern, clean interface
- Loading states and error handling
- Toast notifications
- Modal dialogs for forms

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue in the GitHub repository.
