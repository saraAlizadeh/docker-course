const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = process.env.PORT || 3000;

(async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    console.log('✅ Connected to MariaDB');

    // Create sample table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        text VARCHAR(255) NOT NULL
      )
    `);

    // Insert example data
    await connection.execute(`INSERT INTO messages (text) VALUES ('Hello from Node.js in Kubernetes!')`);

    app.get('/', async (req, res) => {
      const [rows] = await connection.execute('SELECT * FROM messages');
      res.send(rows);
    });

    app.listen(port, () => console.log(`🚀 App running on port ${port}`));
  } catch (err) {
    console.error('❌ Error connecting to DB:', err);
    process.exit(1);
  }
})();
