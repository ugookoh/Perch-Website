const express = require('express')
const next = require('next')
const bodyParser = require('body-parser');
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev ,dir:'./pages'})
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());
    // server.all('*', (req, res) => {
    //     return handle(req, res)
    // })

    server.get('/index.html.var', (req, res) => {
        return app.render(req, res, '/', req.query)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})