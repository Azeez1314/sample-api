const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
    'age': 29,
    'birthName': 'Shéyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England' 
     },
    'chance the rapper':{
    'age': 29,
    'birthName':'Chancelor Bennett',
    'birthLocation': 'Chicago, Illinois' 
     },
    'dylan':{
    'age': 29,
    'birthName':'Dylan',
    'birthLocation': 'Dylan' 
    },
    'unknown': {
            'age': 0,
            'birthName':'unknown',
            'birthLocation': 'unknown' 
    }

}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const rappersName = req.params.name.toLowerCase()

    if( rappers[rappersName] ) {
        res.json(rappers[rappersName])
    }else{
        res.json(rappers['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})