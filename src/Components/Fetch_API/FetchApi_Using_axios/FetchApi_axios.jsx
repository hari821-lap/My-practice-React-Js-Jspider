import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Fetch.css'

const FetchApi_axios = () => {
    //!axios using then catch method

    //     let [users,setUsers]=useState([])
    //     let [err,setErr]=useState('')
    //     let fetchApi =()=>{
    //         let apidata =axios.get('https://api.git.com/users')
    //         apidata.then((resq)=>{
    //             setUsers(resq.data)
    //         })
    //         apidata.catch((err)=>{
    //             console.error(err)
    //             setErr("Error :check url  ")
    //         })
    //         apidata.finally(()=>{
    //             console.log("Completed")
    //         })
    //     }
    //     useEffect(()=>{
    //         fetchApi()

    //     },[])
    //     console.log(users)


    let [users, setUsers] = useState([])
    let [err, setErr] = useState('')
    let fetchApi = async () => {
        try {

            let apidata = await axios.get('https://api.github.com/users')
            setUsers(apidata.data)
        }

        catch (error) {
            console.error("Error : check the URL")
            setErr('Error :check the URL')

        }
        finally {
            console.log("Request is Completed")
        }
    }
    useEffect(() => {
        fetchApi()
    }, [])
    console.log(users)

    return (
        <>
            <h2>Fetching api Using Axios</h2>
            {/* <h3>{err}</h3> */}
            <div className="fetchApi">
                <h1>Github Users</h1>
                <div className='container'>
                    {users.map((elem) => {
                        let { login, avatar_url } = elem
                        {
                            return (
                                <>
                                    <div className="card">
                                        <div className="image">
                                            <img src={avatar_url} alt='' />
                                        </div>
                                        <div className="title">{login}</div>
                                    </div>
                                </>
                            )
                        }
                    })}
                </div>
            </div>

        </>
    )
}

export default FetchApi_axios
