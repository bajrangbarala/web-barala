import React from 'react'

function List() {
        const contect=[
            {name:'bajrang',email:'bajrang@gamil.con'},
            {name:'locky',email:'bajrang@gamil.con'},
            {name:'ranjeet',email:'bajrang@gamil.con'},
            {name:'amit',email:'bajrang@gamil.con'},
        ]
  return (
    <div>
        {
        contect.map((name)=>(
            <h6>{name.name}{name.email}</h6>
        ))
        }
    </div>
  );
}

export default List
