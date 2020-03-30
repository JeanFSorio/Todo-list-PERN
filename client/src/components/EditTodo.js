import React, { Fragment, useState } from "react";

const EditTodo = ({todo}) => {
    const [description, setDescription] = useState(todo.description);
    
    
    
    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
        })
        setDescription(description)

        }
         catch (err) {
            console.error(err.message);            
        }        
    }

    return (
        <Fragment>
            <button type="button" className="btn btn-warning btn-size" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
                Edit
            </button>

            <div className="modal" 
            id={`id${todo.todo_id}`}
            onClick={() => setDescription(todo.description)}
            >
                <div className="modal-dialog">
                    <div className="modal-content">

                        
                         <div className="modal-header">
                            <h4 className="modal-title">Edit</h4>
                            <button type="button" className="close" data-dismiss="modal"
                            onClick={() => setDescription(todo.description)}
                            >&times;</button>
                        </div>

                      
                        <div className="modal-body">
                            <input className='form-control' 
                            value={description} 
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Insert to-do here!"
                            />
                        </div>
                        
                            
                        
                         <div className="modal-footer">
                             <button type="button" 
                             className="btn btn-warning" 
                             data-dismiss="modal"
                             onClick={e => updateDescription(e)}
                             >Edit</button>
                            <button 
                            type="button" 
                            className="btn btn-danger" 
                            data-dismiss="modal"
                            onClick={() => setDescription(todo.description)}                    
                            >
                                Close
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default EditTodo;