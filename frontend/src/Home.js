import React from "react";

function Home() {
  return (
    <div className="text-center mt-5">
      <button className="btn btn-primary btn-lg mx-2">
        <a href="/addTodoList" className="text-white text-decoration-none">
          Add Task
        </a>
      </button>
      <button className="btn btn-primary btn-lg">
        <a href="/todoList" className="text-white text-decoration-none">
          View Task
        </a>
      </button>
    </div>
  );
}

export default Home;
