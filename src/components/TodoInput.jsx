function TodoInput({ addTodo, value, updateValue }) {
  return (
    <header>
      <input
        value={value}
        onChange={(e) => updateValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && value.trim() !== "") {
            addTodo(value);
            updateValue("");
          }
        }}
        placeholder="Create a task"
        type="text"
      />
      <button
        onClick={() => {
          if (value.trim() !== "") {
            addTodo(value);
            updateValue(""); // Clear input after adding
          }
        }}
      >
        Add
      </button>
    </header>
  );
}

export default TodoInput;
