import React from 'react'

 const Developer = (props) => {
    let {developer}=props
    // console.log(developer)

  return (
    <div className='employee'>
    <div className='container'>
      <h2>Developers Table</h2>
      <table>
        <thead>
          <tr>
            <th>Slno</th>
            <th>Id</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Date of Joining</th>
          </tr>
        </thead>
        <tbody>
          {developer.map((elem,index)=>{
            let {id,name,desg,salary,doj}=elem
            return(
              <tr>
                <th>{index+1}</th>
                <th>{id}</th>
                <th>{name}</th>
                <th>{desg}</th>
                <th>{salary}</th>
                <th>{doj}</th>
              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
    </div>
  )
}

export default  Developer

//

