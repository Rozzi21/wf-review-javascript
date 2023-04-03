import React from "react";

const ToDoList = ({toDoSaya}) => {



    return(
        <div  className="todo-list"> 
            <ul>
                {
                    toDoSaya.map((data)=> {
                        return <li key={data}>{data}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default ToDoList;