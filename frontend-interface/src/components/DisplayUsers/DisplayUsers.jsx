import styles from './DisplayUsers.module.css'
import { useEffect, useState } from "react";
import { getUsers } from "../../utils/user_functions";

export default function DisplayUsers({search}) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUsers()
        .then(res => {
            const sortUsers = res;
            setUsers(sortUsers);
        })
        .then(() => setLoading(false))
        .catch(err => console.error('Direct fetch error:', err));
    }, []);

    // Filter the users based on the search query
    const filteredUsers = users.filter(user => 
        user.username.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {
            return (
                <>
                    loading users...
                </>
            );
        }

    return (
       <div className={styles.users}>
            {filteredUsers.length === 0 ? (
                <div>No users found.</div>
            ) : (
                filteredUsers.map(user => (
                    <div key={user.id}>{user.username}</div>
                ))
            )}
        </div>
    )
}