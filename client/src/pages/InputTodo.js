import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";


const InputTodo = () => {
  const [description, setDescription] = useState("");
  const [resume, setResume] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { 
        description,
        resume,
       };
      await fetch(
        "http://localhost:3333/todos",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        },
        alert(`"${description}" was set as new todo`),
        setDescription(""),
        setResume("")
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Styles>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <Form onSubmit={onSubmitForm}>
        <Form.Group>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Large text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Insert to-do here!"
          />
          <Form.Control
            as="textarea"
            rows='2'
            maxlength='100'
            size="lg"
            placeholder="Large text"
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            placeholder="Here go the resume for your task"
          />
        </Form.Group>
        <Button variant="outline-light" type="submit">
          Add This Todo
        </Button>
      </Form>
    </Styles>
  );
};

export default InputTodo;



const Styles = styled.div`
  text-align: center;
  height: 90vh;
  padding: 20vh 9vw;

  .form-control {
    text-align: center;
    min-width:100%;
    margin-top: 10px;

    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(65, 204, 176, 0.25);
      border-color: rgba(65, 204, 176, 0.25);
    }
  }

  .btn-outline-light {
    color: #95ba9e;
    border-color: #95ba9e;

    &:hover {
      color: #212529;
      background-color: #95ba9e;
      border-color: #95ba9e;
  }
  }
`;