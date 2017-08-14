CREATE DATABASE IF NOT EXISTS burger_db;
USE burger_db;

# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS burgers;

# Create the burgers table
CREATE TABLE burgers (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
burger_name varchar(45) NOT NULL,
devoured BOOL DEFAULT false, NOT NULL
);