import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import TodoHistory from 'src/components/todo/TodoHistory';

const meta: Meta<typeof TodoHistory> = {
  title: 'components/todo/TodoHistory',
  component: TodoHistory,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TodoHistory>;

export const Register: Story = {
  args: {
    history: {
      todoId: 5,
      title: '안녕',
      status: 'delete',
      registerDate: new Date(),
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const historyItem = canvas.getByTestId('history-item');
    expect(historyItem).toHaveTextContent('삭제');
  },
};
