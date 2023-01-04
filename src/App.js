import React from "react";
import TodoListContainer from "./components/TodoListContainer";
import Form from "./components/Form";
import { Routes, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
};

export default App;
