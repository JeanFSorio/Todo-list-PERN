import React, { useEffect, useState } from 'react';
import EditTodo from "./EditTodo";

const ListTodos = () => {
    const [todos, setTodos] = useState([])

    const getTodos = async () => {
        try {
            // method get is the default
            const response = await fetch("http://localhost:3333/todos")
            const jsonData = await response.json();
            setTodos(jsonData);

        } catch (err) {
            console.error(err.message);

        }
    }
    
    const deleteTodo = async (id) => {
        try {
            // method get is the default
            await fetch(`http://localhost:3333/todos/${id}`, {
            method: 'delete'
            })
            
        setTodos(todos.filter(todo => todo.todo_id !== id))
        
        } catch (err) {
            console.error(err.message);

        }
    }

    useEffect(() => {
        getTodos();
    }, [todos]);


    return (
        <>
            <table className="table table-hover mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                
            <tbody>
                {todos.map(todo => (
                    <tr key={todo.todo_id}>
                        <td>
                            {todo.description}
                        </td>
                        <td>
                            <EditTodo todo={todo}/>
                        </td>
                        <td>
                            <button className="btn btn-danger btn-size" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
                        </td>
                    </tr>
                ))}

            </tbody>

            </table>
        </>
    )
}

export default ListTodos