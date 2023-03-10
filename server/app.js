const express = require('express')
require('dotenv').config()

const port = process.env.PORT | 1000

const app = express()

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})