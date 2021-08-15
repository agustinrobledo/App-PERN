import React, {useState} from 'react';


const EditTodo = ({todo}) => {
    const [description, setDescription] = useState(todo.description);

    const updateDescription = async e => {
        try {
            const body = { description } 
            const response = await fetch(`http://localhost:3001/todos/${todo.todo_id}` , {
                method: 'PUT',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = '/';

            
        } catch (error) {
            
        }
    };


    return (
        <>
         
            <button 
                type="button" 
                className="btn btn-warning" 
                data-bs-toggle="modal" 
                data-bs-target={`#id${todo.todo_id}`}>
                    Edit
            </button>
            <div 
                className="modal fade" 
                id={`id${todo.todo_id}`}
                tabIndex="-1" 
                aria-labelledby="exampleModalLabel" 
                aria-hidden="true"
                onClick={() => { setDescription(todo.description); }}
            >
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 
                        className="modal-title" 
                        id="exampleModalLabel">
                            Edit Todo
                    </h5>
                    <button 
                        type="button" 
                        className="btn-close" 
                        data-bs-dismiss="modal" 
                        aria-label="Close"
                        onClick={() => { setDescription(todo.description); }}
                    >

                    </button>
                </div>
                <div className="modal-body">
                    <input 
                        type="text" 
                        className="form-control" 
                        data-dismiss="modal" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    >  
                    </input>
                </div>
                <div className="modal-footer">
                    <button 
                        type="button" 
                        className="btn btn-secondary" 
                        data-bs-dismiss="modal"
                        onClick={() => { setDescription(todo.description); }}
                    >
                            Close
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-warning"
                        onClick={ e => { updateDescription(e)} }
                        >
                        
                            Save changes
                    </button>
                </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default EditTodo;