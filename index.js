const https = require('http')
const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

https.globalAgent.options.rejectUnauthorized = false;
const server = https.createServer(app);

app.use(cors())
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/auth', require('./routes/blog.routes'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})

const PORT = config.get('port')

async function start() {
  try {
    await mongoose.connect(config.get('mongoDocker'), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    server.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()