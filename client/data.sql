CREATE DATABASE netflixclone;

CREATE TABLE users ( 
  id INTEGER GENERATED ALWAYS AS IDENTITY,
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  phone VARCHAR(15) NOT NULL UNIQUE, 
  user_password VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE profiles (
  id INTEGER GENERATED ALWAYS AS IDENTITY,
  user_id INTEGER NOT NULL,
  name VARCHAR(20) NOT NULL,
  adult BOOLEAN NOT NULL, 
  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
  PRIMARY KEY (id)
);