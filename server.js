const Http = require('http')
const port = process.env.port || 8080
const handleRequest = (request, response) => {
  response.end(`Hello, EBRD Gurus!! How are you all!!!!!!`)
}
const server = Http.createServer(handleRequest)

server.listen(port, () => {
  console.log(`Http server listening on http://localhost:${port}`)
})