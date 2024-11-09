import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(
        () =>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUsers(data))
        }, 
        [])

    return(
        <div className="Main">
            <h1>Users</h1>
            <ul>
               {users.map((item) => (<li key={item.id}> <Link to={`/users/${item.id}`}> {item.name} </Link> </li>))}
            </ul>
        </div>
    )
}