const app = require("./app")
const port = process.env.PORT || 3000

// Handling Uncaught Exception

process.on("uncaughtException", (err) => {

    console.log(`Error: ${err.message}`)
    console.log(`Shutting down the server due to Uncaught Exception`)
    process.exit(1)

})

// Connecting to database

const server = app.listen(port, _ => console.log(`server is running on port ${port}`))

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {

    console.log(`Error: ${err.message}`)
    console.log(`Shutting down the server due to Unhandled Promise Rejection`)

    server.close(() => {
        process.exit(1)
    })

})