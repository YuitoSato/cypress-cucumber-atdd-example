import React, { ChangeEvent, useState } from 'react';

type Task = {
  title: string;
  content: string;
};

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Task>({
    title: '',
    content: ''
  });

  const updateNewTaskTitle = (event: ChangeEvent<HTMLInputElement>) => setNewTask({
    ...newTask,
    title: event.target.value,
  });

  const updateNewTaskContent = (event: ChangeEvent<HTMLInputElement>) => setNewTask({
    ...newTask,
    content: event.target.value,
  });

  const submit = () => {
    setTodoList(todoList.concat([newTask]))
    setNewTask({
      title: '',
      content: ''
    });
  };

  return (
    <div className="App">
      <section>
        <ul data-id="タスク一覧">
          {
            todoList.map((todo, index) => (
              <li key={index}>
                <span data-id="タスク一覧/タイトル">タイトル: {todo.title}</span><br />
                <span data-id="タスク一覧/詳細">詳細: {todo.content}</span>
              </li>
            ))
          }
        </ul>
      </section>

      <div>
        <div>
          <label>
            タイトル:
            <input data-id="タスクフォーム/タイトル" type="text" value={newTask.title} onChange={updateNewTaskTitle}/>
          </label>
        </div>
        <div>
          <label>
            詳細:
            <input data-id="タスクフォーム/詳細" type="text" value={newTask.content} onChange={updateNewTaskContent}/>
          </label>
        </div>
        <div>
          <button onClick={submit}>
            タスク追加
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
