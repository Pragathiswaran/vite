import React, { useState, useRef, useEffect } from 'react';
import { cardIcons } from '../utils';
import TodoForm from './TodoForm';
import Preline from './Preline';

const Card = ({ todoData,updateTodoTask }) => {
  const TodoHeadingRefs = useRef([]);
  const TodoTaskRefs = useRef([]);

  const [TodoData, setTodoData] = useState({
    heading: '',
    task: ''
  });

  const getTodoValueHandler = (index) => {
    setTodoData({
      heading: TodoHeadingRefs.current[index]?.textContent || 'Cannot get the heading',
      task: TodoTaskRefs.current[index]?.textContent || 'Cannot get the task'
    });
  };

  return (
    <>
      <Preline />
      {todoData &&
        todoData.map((todo, index) => {
          const sanitizedId = todo.heading.replace(/\s+/g, '-');

          return (
            <div className="w-[360px] sm:w-[400px] md:w-[360px] lg:w-[400px] h-48 bg-gray-600 rounded-lg p-4 shadow-2xl" key={index}>
              <div className="flex justify-between">
                <h1 className="text-xl font-semibold" ref={(el) => (TodoHeadingRefs.current[index] = el)}>
                  {todo.heading}
                </h1>
                <div className="w-28 flex justify-between">
                  {cardIcons.map((items) => (
                    <div className="hs-tooltip inline-block" key={items.id}>
                      <button
                        type="button"
                        className="hs-tooltip-toggle"
                        {...(items.id === 1 && {
                          "aria-haspopup": "dialog",
                          "aria-expanded": "false",
                          "aria-controls": `hs-scale-animation-modal-update-todo-${sanitizedId}`,
                          "data-hs-overlay": `#hs-scale-animation-modal-update-todo-${sanitizedId}`
                        })}
                        onClick={() => getTodoValueHandler(index)}
                      >
                        {items.icon}
                        <span className="hs-tooltip-content absolute opacity-0 transition-opacity invisible z-10 py-1 px-2 bg-gray-900 text-white">
                          {/* {items.label} */}
                          hello world
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-2 overflow-hidden px-2 line-clamp-5">
                <p ref={(el) => (TodoTaskRefs.current[index] = el)}>{todo.task}</p>
              </div>
              <TodoForm
                todoId={`hs-scale-animation-modal-update-todo-${sanitizedId}`}
                todoTitle="Update"
                todoHeading={TodoData.heading}
                todoTask={TodoData.task}
                todoButton="Update Todo"
                todo={updateTodoTask}
                index={index}
              />
            </div>
          );
        })}
    </>
  );
};

export default Card;
