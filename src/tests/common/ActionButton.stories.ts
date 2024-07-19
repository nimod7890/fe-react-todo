import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';
import ActionButton from 'src/components/common/ActionButton';

const meta: Meta<typeof ActionButton> = {
  title: 'components/common/ActionButton',
  component: ActionButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ActionButton>;

export const Register: Story = {
  args: {
    label: '삭제',
    onClick: () => console.log('ActionButton-clicked'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId('action-btn');
    await userEvent.click(button);
    expect(button).toHaveTextContent('삭제');
  },
};
