import { NavLink } from 'react-router-dom';
import './Sidebar.css';
// react single page aplication и надо обходить обдновение всех страницы нао чтобы только тут main обновлялся надо чтобы автоматически импортировался Link вместо тэга a с react-router-dom вмеесто href - to 
// NavLink так же надо чтобы автоматически импортировалось добавляет класс active и подсвечивается на какой мы странице для легкой стилизации

function Sidebar(){
    return(
        <div className="Sidebar">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/statehooks">Built-in React Hooks</NavLink>
                    </li>
                    <li>
                        <NavLink to="/community">Community</NavLink>
                    </li>
                    <li> 
                        <NavLink to="/resources">Resources</NavLink>
                    </li>   
                    <li>
                        <NavLink to="/rules">Rules of React</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/communities'>React Community</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users">Users</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;