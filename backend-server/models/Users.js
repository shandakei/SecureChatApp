const db = require('../db')

// function to create a user
function createUser(username, hash) {
    let sql = `
        INSERT INTO SCA_users 
        (username, password_digest)
        VALUES ($1, $2) 
        RETURNING *
    `
    return db.query(sql, [username, hash])
    .then(res=>res.rows)
}

// function to get all users
function getAllUsers() {
    let sql = `
        SELECT username FROM SCA_users;
    `
    return db.query(sql)
    .then(res=>res.rows)
}

// function for deleting a user
function deleteUser(id) {
        let sql = `
        DELETE FROM SCA_users WHERE id = $1;
        `
        return db.query(sql, [id])
        .then(res=>res.rows)
}

// function for finding a user by their username
function findByUsername(username) {
    let sql = `
    SELECT * FROM SCA_users WHERE username = $1;
    `
    return db.query(sql, [username])
            .then(result => {
                if(result.rowCount === 0) {
                    let err = new Error('resource not found')
                    err.status = 400
                    throw err
                }
                return result.rows[0]
            })
}



const User = {
    createUser,
    getAllUsers,
    findByUsername,
    deleteUser
}

module.exports = User