import { NextRequest, NextResponse } from 'next/server';
import { Task } from '@/lib/slices/taskSlice';

// Mock data - in a real app, this would be in a database
let mockTasks: Task[] = [
  {
    id: '1',
    title: 'Complete project documentation',
    description: 'Write comprehensive documentation for the new feature',
    status: 'in-progress',
    priority: 'high',
    assignee: 'John Doe',
    dueDate: '2024-02-15T00:00:00.000Z',
    createdAt: '2024-01-15T00:00:00.000Z',
    updatedAt: '2024-01-20T00:00:00.000Z',
    tags: ['documentation', 'project'],
  },
  {
    id: '2',
    title: 'Review code changes',
    description: 'Review pull requests and provide feedback',
    status: 'todo',
    priority: 'medium',
    assignee: 'Jane Smith',
    dueDate: '2024-02-10T00:00:00.000Z',
    createdAt: '2024-01-18T00:00:00.000Z',
    updatedAt: '2024-01-18T00:00:00.000Z',
    tags: ['code-review', 'development'],
  },
  {
    id: '3',
    title: 'Setup CI/CD pipeline',
    description: 'Configure automated testing and deployment',
    status: 'completed',
    priority: 'high',
    assignee: 'Mike Johnson',
    dueDate: '2024-01-25T00:00:00.000Z',
    createdAt: '2024-01-10T00:00:00.000Z',
    updatedAt: '2024-01-25T00:00:00.000Z',
    tags: ['devops', 'automation'],
  },
];

export async function GET() {
  return NextResponse.json(mockTasks);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newTask: Task = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    mockTasks.push(newTask);
    
    return NextResponse.json(newTask, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create task' },
      { status: 500 }
    );
  }
} 