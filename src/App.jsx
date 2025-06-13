import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const [time, setTime] = useState("");
  let date = new Date();

  const formattedDate = date
    .toLocaleString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "short",
      hour12: false,
    })
    .replace(",", "");

  // Save to local storage
  function saveToLocalStorage(list) {
    localStorage.setItem("todo", JSON.stringify({ todo: list }));
  }
  // Handle input change, and update the todo value
  function handleAddTodo(newTodo) {
    const newTodoList = [...todo, { text: newTodo, time: formattedDate }];
    saveToLocalStorage(newTodoList);
    setTodo(newTodoList);
  }
  // Handle delete todo, filter the todo list and save to local storage
  function handleDeleteTodo(index) {
    const newTodoList = todo.filter(
      (todoItem, todoIndex) => todoIndex !== index
    );
    saveToLocalStorage(newTodoList);
    setTodo(newTodoList);
  }
  // Handle edit todo, set the value to be edited and delete the todo
  function handleEditTodo(index) {
    const valueToBeEdited = todo[index].text;
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }
  // Load todos from local storage when the component mounts
  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodo = localStorage.getItem("todo");
    if (!localTodo) {
      return;
    }

    localTodo = JSON.parse(localTodo).todo;
    setTodo(localTodo);
  }, []);

  return (
    <div>
      <TodoInput
        addTodo={handleAddTodo}
        value={todoValue}
        updateValue={setTodoValue}
      />
      <TodoList
        editTodo={handleEditTodo}
        deleteTodo={handleDeleteTodo}
        todoList={todo}
        time={time}
      />
    </div>
  );
}

export default App;
