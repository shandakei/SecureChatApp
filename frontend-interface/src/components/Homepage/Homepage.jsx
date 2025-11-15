import Footer from '../Footer/Footer'
import styles from './Homepage.module.css'
import { useState } from 'react';
import { getUserFromLocalStorage } from '../../utils/auth_service';
import Nav from '../Nav/Nav';
import SearchBar from '../SearchBar/SearchBar';

export default function Homepage() {
    const [user, setUser] = useState(getUserFromLocalStorage());    

    return (
    <div className={styles.root} >
        <Nav />
        <SearchBar placeholder="Search for someone" id="nav-search" user={user} />
        <Footer />
    </div>
    )
}