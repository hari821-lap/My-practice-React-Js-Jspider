import React, { useEffect, useState } from 'react'
import './fetchApi.css'

const FetchApi_using_fetch = () => {
    let [users, setUsers] = useState([]);

    //fetching API using fetch() with then,catch
    // let fetchApi = () => {
    //     let apidata = fetch("https://api.github.com/users");

    //     let promiseArr = apidata.then((data) => {
    //         return data.json();
    //     });

    //     promiseArr.then((arrdata) => {
    //         setUsers(arrdata)
    //     });
    // };
    // useEffect(()=>{
    //     fetchApi()
    // },[])
    // console.log(users)

    // fetching Api using fetch() with async & await
    let fetchApi2 = async () => {
        try {
            let apidata = await fetch("https://api.github.com/users")
            let arrdata = await apidata.json()
            setUsers(arrdata)
        }
        catch (error) {
            console.log("data is nit valid")

        }
    }
    useEffect(() => {
        fetchApi2()
    }, [])

    // console.log(users)
    return (
        <>
        <div className="fetchApi">
            <h1>Github Users</h1>
            <div className='container'>
                {users.map((elem)=>{
                    let {login,avatar_url}= elem
                    {
                        return(
                        <>
                        <div className="card">
                            <div className="image">
                                <img src={avatar_url} alt=''/>
                            </div>
                        </div>
                        </>
                    )}
                })}
            </div>
        </div>

        </>
    )
}

export default FetchApi_using_fetch
