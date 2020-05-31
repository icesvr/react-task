import React from 'react';

export const HeaderInfo = props =>{
    
    return (
        <div className="container-flex">
            <div className="jumbotron h-10">
                <h3 class="text-center">{props.tasks} Tareas disponibles</h3>
            </div>   
        </div>
    )
}