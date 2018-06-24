let express = require('express'),
    app = express(),
    port = 3000

let todoRoutes = require('./routes/todos')

app.get('/', function(req, res) {
  res.send('Hi There from Express!!!')
})

app.use('/api/todos', todoRoutes)

app.listen(port, function() {
  console.log('App is running on port 3000...')
})