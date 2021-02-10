// Dependencies
const path = require('path');

// Exporting the routes!
module.exports = (app) => {
    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get('/', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/index.html'))
    );

    // Exercises route loads Exercise.html
    app.get('/exercise', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/exercise.html'))
    );

    // Stats route leads to the stats page to display workout data
    app.get('/stats', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/stats.html'))
    );
}
