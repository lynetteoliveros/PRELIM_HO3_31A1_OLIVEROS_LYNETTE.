import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("propsPage"); // State to switch between pages
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [isFullNameVisible, setIsFullNameVisible] = useState(false);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // Handle input changes for name and todo
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "middleName") {
      setMiddleName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else {
      setTodo(value);
    }
  };

  // Handle click to submit the full name
  const handleClick = () => {
    setFullName(`${firstName} ${middleName} ${lastName}`);
  };

  // Handle toggle visibility of full name
  const toggleVisibility = () => {
    setIsFullNameVisible(!isFullNameVisible);
  };

  // Add todo item
  const addTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  // Delete todo item
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Handle Home button click
  const handleHomeClick = () => {
    setCurrentPage("home"); // Navigate to Home (Friendship paragraph page)
  };

  // Handle Props Page button click
  const handlePropsPageClick = () => {
    setCurrentPage("propsPage"); // Navigate to Props Page
  };

  return (
    <div className="app">
      <nav>
        <ul>
          {/* Home Button */}
          <li
            className={currentPage === "home" ? "active" : ""}
            onClick={handleHomeClick}
          >
            Home
          </li>

          {/* Props Page Button */}
          <li
            className={currentPage === "propsPage" ? "active" : ""}
            onClick={handlePropsPageClick}
          >
            Props Page
          </li>

          {/* To-Do List Button */}
          <li
            className={currentPage === "todoList" ? "active" : ""}
            onClick={() => setCurrentPage("todoList")}
          >
            To-Do List
          </li>
        </ul>
      </nav>
      <div className="content">
        {currentPage === "propsPage" && (
          <div>
            <h3>Full Name Form</h3>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
              placeholder="First Name"
            />
            <input
              type="text"
              name="middleName"
              value={middleName}
              onChange={handleInputChange}
              placeholder="Middle Name"
            />
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
            />
            <button onClick={handleClick}>Submit</button>
            {/* Show or hide the full name */}
            {isFullNameVisible && <p>Full Name: {fullName}</p>}
            <button onClick={toggleVisibility}>
              {isFullNameVisible ? "Hide" : "Show"} Full Name
            </button>
          </div>
        )}
        {currentPage === "todoList" && (
          <div>
            <h3>To-Do List</h3>
            <input
              type="text"
              value={todo}
              onChange={handleInputChange}
              placeholder="Add a new task"
            />
            <button onClick={addTodo}>Add</button>
            <ul>
              {todos.map((task, index) => (
                <li key={index}>
                  {task}
                  {/* Delete button next to each todo */}
                  <button
                    onClick={() => deleteTodo(index)}
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "red",
                      color: "white",
                    }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {currentPage === "home" && (
          <div className="home-content">
            <h2>Friendship</h2>
            <h3>
              Friendship is one of the most beautiful and essential aspects of
              life. It’s a bond that connects people, offering support, joy, and
              unconditional care. True friends are those who stand by you
              through thick and thin, sharing both moments of happiness and
              times of sorrow. A friendship built on trust and understanding
              becomes a foundation for lasting happiness and personal growth.
            </h3>
            <h3>
              In every friendship, there are moments of fun and laughter, but
              there are also challenges and disagreements. What makes a
              friendship strong is the ability to overcome obstacles together,
              learning from each other and growing as individuals. It’s in these
              moments of adversity that the strength of a real friendship is
              truly tested. A good friend will always make you feel understood
              and valued, providing a sense of belonging and comfort in times of
              need.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
