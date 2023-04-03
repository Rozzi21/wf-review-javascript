import React from "react";
import { useState } from "react";

const ToDoForm =({handlerSubmit}) => {
    const [todo, setTodo] = useState("turu");

    const submitHadler  = (todo)=> {
        handlerSubmit(todo);
        setTodo("");
    }
    

    return(
        <div className="todo-form">
            <p>Sekarang saya mau ngapain</p>
            <span>
                <input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                />
                <br/>
                <button onClick={() => submitHadler(todo)}>Gass</button>
            </span>
        </div>
    );
};

export default ToDoForm;