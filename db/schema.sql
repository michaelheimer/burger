CREATE DATABASE 'burgers_db';
USE 'burgers_db';
CREATE TABLE 'burgers'
            ('id' INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
             'burger_name' VARCHAR(255) NOT NULL, 
             'devoured' BOOL,
             `date` timestamp(12));


