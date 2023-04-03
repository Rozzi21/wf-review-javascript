import React, { useState } from "react";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import "./ToDo.css"


const ToDo = () => {

    const  [todos,setTodos] = useState(["turu","ngegame"])

    const handlerSubmit =(todo)=> {
        setTodos([...todos,todo]);
    }

    return (
        <div className="todo">
            <h2  className="title">
                To-Do List
            </h2>
            <ToDoForm handlerSubmit={handlerSubmit}/>
            <ToDoList toDoSaya={todos}/>
        </div>
    );
};

export default ToDo;