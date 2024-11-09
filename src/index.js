import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Pages/Header/Header';
import Sidebar from './Pages/Sidebar/Sidebar';
import Welcome from './Pages/Welcome/Welcome';
import './global.css';
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet} from 'react-router-dom'
import StateHook from './Pages/StateHookPage/StateHook';
import Community from './Pages/Community/Community';
import Resources from './Pages/Resources/Resources';
import About from './Pages/About/About';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Users from './Pages/Users/Users';
import { UserPAge } from './Pages/Users/UserPage';
// import usersData from './data/users.json'
import Rules from './Pages/Rules/Rules';
import Communities from './Pages/Communities/Communities';

const Root = () => {
    return(
    <div className='container'>
        <Header />
        <Sidebar />
        <Outlet />
      {/* вместо него будет подставляться текущая страница */}
    </div>
    )
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
         <Route index element={<Welcome/>}/>
         <Route path='/statehooks' element={<StateHook />} />
         <Route path='/community' element={ <Community /> } />
         <Route path='/resources' element={<Resources/>}/>
         <Route path='/rules' element={<Rules/>}/>
         <Route path='/about' element={<About/>} />
         <Route path='/communities' element={<Communities/>} />
         <Route path='/users' element={<Users/>} />
         <Route path='users/:userId' loader={loader} element={<UserPAge/>} errorElement={<ErrorPage />} />
         <Route path='*' element={<ErrorPage />} />
         {/* для того чтобы на несуществующей странице был наша кастомная страница ошибки, сначала создаем эту страницу в компоненте а потом в path ставим*  */}
        </Route>
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
);

//создаем функцию loader будем получать динамичные данные
async function loader({params}) {
    try{
        const user = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(promise => promise.json())
        .then(users => users.filter(user => user.id === params.id))
        console.log(user);
        return user[0]
    } catch (error) {console.error('Error from server')}

//    const users = usersData.filter(el => el.id === params.userId);   
//     return users[0];
// fetch асинхронная операция и мы юзера не можем достать
     
}
 