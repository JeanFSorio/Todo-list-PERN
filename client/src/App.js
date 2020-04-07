import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

//pages
import InputTodo from "./pages/InputTodo";
import ListTodos from "./pages/ListTodos";
//components
import  NavigationBar  from "./components/NavigationBar";


function App() {
  return (
    <Fragment>
      <NavigationBar />
      <BrowserRouter>
        <Switch>
          <Container>
          <Route exact path="/" component={InputTodo} />
          <Route path="/todos" component={ListTodos} />
          </Container>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
