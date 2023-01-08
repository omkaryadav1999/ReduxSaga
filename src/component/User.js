import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { GetResponse } from "../Redux/action/userAction"
function Home() {
    const dispatch = useDispatch()
    const userData = useSelector((state) => state.Reducer)
    console.log("userData", userData)
    useEffect(() => {
        dispatch(GetResponse())
    }, [])
    return (
        <>
            <dv>
                <h1>Redux-Saga</h1>
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>username</th>
                            <th>suite</th>
                            <th>city</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.map((value) => {
                                const { id, name, username, suite, city, email, phone, website } = value
                                return <tr key={id}>
                                    <td>{name}</td>
                                    <td>{username}</td>
                                    <td>{suite}</td>
                                    <td>{city}</td>
                                    <td>{email}</td>
                                    <td>{phone}</td>
                                    <td>{website}</td>
                                </tr>
                            })
                        }
                    </tbody>

                </table>
            </dv>
        </>
    )
}

export default Home