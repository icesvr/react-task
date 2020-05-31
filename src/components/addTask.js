import React, {useState} from 'react';

export const NewTask = props => {

    const [name, setNewName] = useState('');
    const [description, setNewDescription] = useState('');

    const newName = event => {setNewName(event.target.value); console.log(event.target.value)}
    const newDescription = event => {setNewDescription(event.target.value); console.log(event.target.value)}
    
    const createTask = ()=>{
        const task = {
            name : name,
            description
        }
       props.newTask(task);
    }

    return (
        

        <div class="container">
            <div className="card text-center w-50 mx-auto">
            <div class="card-header">
                Agregar tarea
            </div>
            <div class="card-body">
                <div className="my-1">
                    <div class="form-group">
                        <label for="name">Nombre: </label>
                        <input class="form-control" type="text" name="name" id="name" value={name} onChange={newName} />
                    </div>
                    <div class="form-group">
                        <label for="description">Descripcion: </label>
                        <input class="form-control" type="text" name="description" id="description"  value={description} onChange={newDescription}/>
                    </div>
                    
                    <button className="btn btn-primary w-50" onClick={createTask}>Add</button>
                </div>

            </div>
        </div>
        </div>
       
        
    )
}