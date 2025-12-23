const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL server:', err);
        return;
    }
    console.log('Connected to MySQL server');

    const dbName = process.env.DB_NAME;

    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`, (err, result) => {
        if (err) {
            console.error('Error creating database:', err);
            connection.end();
            return;
        }
        console.log(`Database ${dbName} created or already exists.`);

        connection.changeUser({ database: dbName }, (err) => {
            if (err) {
                console.error('Error switching database:', err);
                connection.end();
                return;
            }

            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS contacts (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    email VARCHAR(255) NOT NULL,
                    message TEXT NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            `;

            connection.query(createTableQuery, (err, result) => {
                if (err) {
                    console.error('Error creating table:', err);
                } else {
                    console.log('Contacts table created or already exists.');
                }
                connection.end();
            });
        });
    });
});
