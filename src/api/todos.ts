import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const getTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

export const deleteTodo = (todoId: number) => {
  return client.delete<number>(`/todos/${todoId}`);
};

export const addTodo = ({ title, completed, userId }: Omit<Todo, 'id'>) => {
  return client.post<Todo>('/todos', { title, completed, userId });
};

export const updateTodo = ({ id, title, completed }: Omit<Todo, 'userId'>) => {
  return client.patch<Todo>(`/todos/${id}`, { title, completed });
};

// Add more methods here
