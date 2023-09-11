import React from 'react'
interface IPROPS {
    name: String;
    title: String;
    age?: Number;
}
let Customer: React.FC<IPROPS> = ({ name, title, age }) => {
    return (
        <>
            <h1>Customer Components</h1>
            <h4>Name : {name}</h4>
            <h4>Title : {title}</h4>
            {age}
        </>
    )
}

export default Customer