import { useEffect, useState } from 'react';
import { TodoItem as TodoItemType } from 'src/store/types/todoTypes';
import useLongPress from 'src/hooks/useLongPress';
import useTodo from 'src/viewModel/useTodo';

interface TodoItemProps {
  todoItem: TodoItemType;
  todoItemIndex: number;
}

function TodoItem({ todoItem, todoItemIndex }: TodoItemProps) {
  const { title, registerDate } = todoItem;

  const [text, setText] = useState<string>(title);
  useEffect(() => setText(todoItem.title), [todoItem]);

  const [disabled, setDisabled] = useState<boolean>(true);
  const longPressRef = useLongPress(() => setDisabled(false));

  const { removeTodo, updateTodo } = useTodo();

  const handleRemove = () => removeTodo(todoItemIndex);
  const handleUpdate = () => {
    // TODO: index로 처리 시 error. 로직 수정 필요
    updateTodo({ index: todoItemIndex, title: text });
    setDisabled(true);
  };

  return (
    <div className="bg-green-200 flex" ref={longPressRef}>
      <input
        disabled={disabled}
        value={text}
        onChange={({ target: { value } }) => setText(value)}
      />
      {registerDate.toISOString()}
      {disabled ? (
        <ActionButton label="삭제" onClick={handleRemove} />
      ) : (
        <ActionButton label="수정" onClick={handleUpdate} />
      )}
    </div>
  );
}

export default TodoItem;

interface ActionButtonProps {
  label: string;
  onClick: () => void;
}

function ActionButton({ label, onClick }: ActionButtonProps) {
  return (
    <button type="button" className="ml-2 bg-black text-white p-1.5" onClick={onClick}>
      {label}
    </button>
  );
}
