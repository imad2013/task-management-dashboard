import { addTaskRealtime, updateTaskRealtime, deleteTaskRealtime } from './slices/taskSlice';
import { store } from './store';
import { Task } from './slices/taskSlice';

class WebSocketService {
  private socket: WebSocket | null = null;
  private isConnected = false;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;

  connect() {
    if (this.socket && this.isConnected) return;

    try {
      // In production, this would be your WebSocket server URL
      const wsUrl = process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:3001';
      this.socket = new WebSocket(wsUrl);

      this.socket.onopen = () => {
        console.log('WebSocket connected');
        this.isConnected = true;
        this.reconnectAttempts = 0;
      };

      this.socket.onclose = () => {
        console.log('WebSocket disconnected');
        this.isConnected = false;
        this.attemptReconnect();
      };

      this.socket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          this.handleMessage(data);
        } catch (error) {
          console.error('Error parsing WebSocket message:', error);
        }
      };

      this.socket.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
    } catch (error) {
      console.error('Failed to create WebSocket connection:', error);
    }
  }

  private handleMessage(data: any) {
    switch (data.type) {
      case 'task:created':
        store.dispatch(addTaskRealtime(data.task));
        break;
      case 'task:updated':
        store.dispatch(updateTaskRealtime(data.task));
        break;
      case 'task:deleted':
        store.dispatch(deleteTaskRealtime(data.taskId));
        break;
      default:
        console.log('Unknown message type:', data.type);
    }
  }

  private attemptReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      console.log(`Attempting to reconnect... (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
      setTimeout(() => {
        this.connect();
      }, 1000 * this.reconnectAttempts);
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
      this.isConnected = false;
    }
  }

  emit(event: string, data: any) {
    if (this.socket && this.isConnected) {
      this.socket.send(JSON.stringify({ type: event, data }));
    }
  }

  isConnectedStatus() {
    return this.isConnected;
  }
}

export const wsService = new WebSocketService(); 