const express = require('express');
const cors = require('cors');
const pool = require('./db');




const app = express();
//midleware
app.use(express.json()); //give acess the body data
app.use(cors());




//ROUTES
//create
app.post("/todos", async (req , res) => {
    try {
        const { description } = req.body;
        
        /* ($1) placholder para o primeiro argumento */
        /* returning * para dar as response */
        const newTodo = await pool.query (
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description] 
        );

        /* Returning * resultara nessa linha(rows) 0 da tabela  */
        res.json(newTodo.rows[0]);

    } catch (err) {
        console.error(err.message);
               
    }
});


//get all
app.get("/todos", async(req, res) => {
    try {
        const allTodos = await pool.query(
            "SELECT * FROM todo ORDER BY todo_id"
        )
        res.json(allTodos.rows)
    } catch (err) {
        console.error(err.message);
        
    }
})



//get one of then
app.get("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const getTodo = await pool.query(
            "SELECT * FROM todo WHERE todo_id = $1",
            [id]
        )
        res.json(getTodo.rows[0])
    } catch (err) {
        console.error(err.message);
        
    }
})


//update
app.put("/todos/:id", async (req , res) => {
    try {
        const { description } = req.body;
        const { id } = req.params;
        
        const putTodo = await pool.query (
            "UPDATE todo SET description = $1 WHERE todo_id = $2",
        
            [description, id] 
        );
        res.json("Todo Updated!")

    } catch (err) {
        console.error(err.message);
               
    }
});




//delete
app.delete("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query(
            "DELETE FROM todo WHERE todo_id = $1",
            [id]
        )
        res.json(`Todo ${id} deleted`)
    } catch (err) {
        console.error(err.message);
        
    }
})




app.listen(5000, () => {
    console.log("Server run on port 5000");
});