import TodoCard from "./TodoCard";

function TodoList({ editTodo, deleteTodo, todoList, time }) {
  return (
    <ul className="main">
      {todoList.map((item, index) => {
        return (
          <TodoCard
            edit={editTodo}
            deleteTodo={deleteTodo}
            list={item.text}
            key={index}
            index={index}
            time={item.time}
          >
            <p>{item}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}

export default TodoList;
