import express from 'express';
import os from 'os';

const app = express();

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  const message = `Hello, World! from v2 I am pod ${os.hostname()}`;
  const htmlResponse = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pod Info</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f0f0f0;
                color: #333;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }
            .container {
                background-color: #fff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                text-align: center;
            }
            h1 {
                color: #007bff;
            }
            p {
                font-size: 18px;
                margin-top: 10px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Welcome to My Pod!</h1>
            <p>${message}</p>
        </div>
    </body>
    </html>
  `;
  res.send(htmlResponse);
});

// Start the server and listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
  console.log(`Pod hostname: ${os.hostname()}`);
});

