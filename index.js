let express = require('express'),
    app = express();

app.get('/', function(req, res) {
  res.send('Hi There from Express!!!')
})

app.listen(3000, function() {
  console.log('App is running on port 3000...')
})