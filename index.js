const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Home page"
    })
})
app.all(/.*/, (req, res) => {
    res.status(500).json({
        message: "not built yet"
    })
})
app.listen(PORT, () => {
    console.log(`server is up and running on http://localhost:${PORT}`)
})