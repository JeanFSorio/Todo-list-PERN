import React, { useEffect, useState } from 'react';
import EditTodo from "./EditTodo";

const ListTodos = () => {
    const [todos, setTodos] = useState([])

    const getTodos = async () => {
        try {
            // method get is the default
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json();
            setTodos(jsonData);

        } catch (err) {
            console.error(err.message);

        }
    }
    
    const deleteTodo = async (id) => {
        try {
            // method get is the default
            await fetch(`http://localhost:5000/todos/${id}`, {
            method: 'delete'
            })
            
        setTodos(todos.filter(todo => todo.todo_id !== id))
        // gonna set Todos talking all to do and iterating with a filter in every todo comparing the id and excluding the right one
        
        } catch (err) {
            console.error(err.message);

        }
    }

    useEffect(() => {
        getTodos();
    }, []);


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
                {/*  <tbody>
         <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr> 
     */}
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