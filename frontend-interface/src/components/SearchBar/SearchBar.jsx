import { useState } from 'react';
import styles from './SearchBar.module.css';
import DisplayUsers from '../DisplayUsers/DisplayUsers'

export default function SearchBar({ placeholder = "",  }) {
    const [search, setSearch] = useState('');


    function SearchHandler(e) {
        e.preventDefault();
        setSearch(e.target.value)
    };

    return (
        <>
            <section className={styles.SearchBar} >
                    <input
                        type="text"
                        placeholder={placeholder}
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        />
            <button>Find a Friend</button>
            </section>
            <DisplayUsers search={search}/>
        </>
    );
}
