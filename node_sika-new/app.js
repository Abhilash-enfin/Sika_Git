const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to handle URL rewriting
app.use((req, res, next) => {
  const filePath = path.join(__dirname, 'public', req.path + '.html');
  res.sendFile(filePath, (err) => {
    if (err) {
      next();
    }
  });
});

// Fallback route for 404 not found
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Set the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:${PORT}');
});