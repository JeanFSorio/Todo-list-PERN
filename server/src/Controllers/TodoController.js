const pool = require('../Database/db');

module.exports = {
    async index (req, res) {
        try {
            const allTodos = await pool.query(
                "SELECT * FROM todo ORDER BY todo_id"
            )
            res.json(allTodos.rows)
        } catch (err) {
            console.error(err.message);
            
        }
    },

    async select (req, res) {
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
    },    
    
    
    async create (req , res) {
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
    },

    async update (req , res) {
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
    },

    async delete (req, res) {
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
    }







}