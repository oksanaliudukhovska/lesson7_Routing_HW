import { Link, useLoaderData } from "react-router-dom"

export const UserPAge = () => {
    const user = useLoaderData();
    //через хук useLoaderData() мы дотягиваемся до loader функции и вягиваем все данные
    
    
return(
    <div className="Main user-page">
     <div>
      <Link to='/users'>Back</Link>
     </div>
     <h2>{user.name}</h2>
     <h3>{user.username}</h3>
     <h3>{user.email}</h3>
     <h3>{user.address.street}, {user.address.suite}, {user.address.city},{user.address.zipcode} </h3>
     <h3>{user.phone}</h3>
     <h3>{user.company.name}, {user.company.catchPhrase}</h3>
    </div>
)
}