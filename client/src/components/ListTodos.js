import React, {useState, useEffect} from 'react';
import EditTodo from './EditTodo';
//delete function


const ListTodos = () => {
    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch('http://localhost:3001/todos');
            const jsonData = await response.json();
            setTodos(jsonData);
        }
        catch (e) {
            console.log(e.message);
        }

    };
    //deleteTodo
    const deleteTodo = async (id) => {
        try{
            const response = await fetch('http://localhost:3001/todos/' + id, {
                method: 'DELETE'
            });
            setTodos(todos.filter(todo => todo.todo_id !== id));
        }
        catch (e) {
            console.log(e.message);
        }
    };
    
    useEffect(() => {
        getTodos();
    }, []);

    

        return (
        <>
              <table className="table mt-5 text-center">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {todos.map(todo =>  (
                    <tr key={todo.todo_id}>
                        <td>{todo.description}</td>
                        <td>
                               <EditTodo todo={todo}/>
                        </td>
                        <td>
                            <button className="btn btn-danger"
                                    onClick={() => { deleteTodo(todo.todo_id)}}
                                    
                            >
                                Delete
                            </button>
                        </td>
                        
                    </tr>
                ))}
                
              </tbody>
            </table>
        </>
        );
    };


export default ListTodos;