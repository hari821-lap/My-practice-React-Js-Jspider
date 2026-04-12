import React from 'react'

 export const StudentsBCA = (props) => {

    let { std } = props

    console.log(std)
    return (
        <>
            <div className="students">
                <h1>BCA Students details</h1>

                <div className="container">
                    <table>
                        <thead>
                            <tr>
                                <th>Slno</th>
                                <th>StudentName</th>
                                <th>Degree</th>
                                <th>Stream</th>
                                <th>Yop</th>
                                <th>DoB</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                std.map((obj, index) => {
                                    let { studentname, degree, stream, yop, dob } = obj
                                    let dateObj = new Date()
                                    let year = dateObj.getFullYear()
                                    let yyyy = dob.slice(0, 4)
                                    let age = year - yyyy
                                    return (
                                        <tr>
                                            <th>{index + 1}</th>
                                            <td>{studentname}</td>
                                            <td>{degree}</td>
                                            <td>{stream}</td>
                                            <td>{yop}</td>
                                            <td>{dob}</td>
                                            {/* <td>{age}</td> */}
                                            <td>{new Date().getFullYear() - dob.slice(0, 4)}</td>

                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

