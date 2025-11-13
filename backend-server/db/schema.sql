CREATE TABLE SCA_users (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE,
    password_digest TEXT NOT NULL
);