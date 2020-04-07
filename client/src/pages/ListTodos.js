import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
// import EditTodo from "../components/EditTodo"; need to implement

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      // method get is the default
      const response = await fetch("http://localhost:3333/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      // method get is the default
      await fetch(`http://localhost:3333/todos/${id}`, {
        method: "delete",
      });

      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, [todos]);

  return (
    <Styles>
      {todos.map((todo) => (
        <Card style={{ width: "15rem", height: "16rem" }} key={todo.todo_id}>
          <Card.Body>
            <Card.Title>{todo.description}</Card.Title>
            <Card.Text>{todo.resume}</Card.Text>
            
            {/* <EditTodo todo={todo}/>  need corrections */}
            <Button variant="danger" onClick={() => deleteTodo(todo.todo_id)}>
              X
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Styles>
  );
};

export default ListTodos;

const Styles = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  .card{
    min-width:100px;
  }

  .card,
  .card-body {
    margin: 10px 5px;
  }
  .btn{
    width: 50px;
    heigth: 10px;
    margin: 5px;
  }
  .btn2 {
    width: 100px;
  }
`;
