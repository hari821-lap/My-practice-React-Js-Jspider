import React, { useState } from 'react'
import './TodoList.css'

const TodoList = () => {
    let [value, setValue] = useState("")
    let [newValue, setNewValue] = useState([])
    let handleInput = (e) => {
        setValue(e.target.value)

    }

    let handleAdd = (e) => {
        setNewValue([...newValue, value])
        setValue("")
    }
    let handleDelete = (deleteIndex) => {
        const filtered = newValue.filter((item, index) => {
            return index !== deleteIndex;
        });
        setNewValue(filtered);

    }

    return (
        <>
            <div className="todolist">
                <input
                    type='text'
                    value={value}
                    placeholder='Enter Something..'
                    onChange={handleInput} />
                <button onClick={handleAdd} >Add</button>
                <ul>
                    {newValue.map((elem, index) => (
                        <li key={index}>{elem}
                            <button className='delete' onClick={() => handleDelete(index)}>Delete</button> <button>Edit</button> </li>

                    ))}
                </ul>

            </div>
        </>
    )
}

export default TodoList
