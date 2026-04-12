import React, { useState } from 'react'
import { booksData } from "./booksData"
import './books.css'

const Books = () => {

    let [book, setBooks] = useState(booksData)

    let dispaly = (id) => { alert(id) }
    let deleteBook = (id) => {
        let data = book.filter((elem, index) => {
            return index !== id

            
        })
     
        setBooks(data)
        
    }

    
    return (
        <>
            <div className="books">
                <h1>Books Management</h1>
                <div className="container">
                    <table>
                        <thead>
                            <tr>
                                <th>Slno</th>
                                <th>title</th>
                                <th>author</th>
                                <th>price</th>
                                <th>published</th>
                                <th>View</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {book.map((elem, index) => {
                                let { id, title, author, price, published } = elem
                                return (
                                    <tr>
                                        <th>{id}</th>
                                        {/* <td>{id}</td> */}
                                        <td>{title}</td>
                                        <td>{author}</td>
                                        <td>{price}.00/-</td>
                                        <td>{published}</td>
                                        <td><button className='view' onClick={() => alert(title)}>View</button></td>
                                        <td><button className='' onClick={() => deleteBook(index)}>Delete</button></td>

                                    </tr>
                                )
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan={3}>
                                    <button>Add Book</button>
                                </th>
                                <th colSpan={3}>
                                    <button onClick={() => {
                                        let bool = window.confirm("Do you want to delete all");
                                        bool ? setBooks([]) : alert('Not Deleted')
                                    }}>Delete All</button>
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

        </>
    )
}

export default Books
