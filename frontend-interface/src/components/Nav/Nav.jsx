import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserFromLocalStorage } from '../../utils/auth_service.js';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import styles from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar.jsx';

export default function Nav() {
    const navigate = useNavigate()
    const currentLocation = useLocation();
    const [user, setUser] = useState(getUserFromLocalStorage());

    function handleLogout() {
        setUser(null);
        localStorage.removeItem('token');
        currentLocation.pathname === '/' ? location.reload() : navigate('/')
    }

    return (
        <div className={styles.navWrapper}>      
            <header>
                <div className={styles.logo}>
                    <h1>
                        <Link to="/">
                            <span style= {{ fontSize: '125%'}}>S</span>ecure
                            <span style= {{ fontSize: '125%'}}>C</span>hat
                            <span style= {{ fontSize: '125%'}}>App</span>
                        </Link>
                    </h1>
                </div>
                <nav className={styles.navbar}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        {user && user.is_verified? <li><Link to="/CreateEvent">Create Event</Link></li> : null }
                        {user ? 
                        <li onClick={handleLogout}>Logout</li>
                        : <li><Link to="/Login">Login</Link></li> }
                    </ul>
                </nav>
            </header> 
        </div>
    );
}
