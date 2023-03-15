const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
///////
const Seed = require('./models/seed.js')
const MonsterCustom = require('./models/custommonsters.js')

///////
const app = express()

///////
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static('public'));

///////

// app.get('/seed', (req, res) =>{
//   MonsterCustom.create(Seed).then((seed)=>{
//     res.send(seed)
//   })
// })
//comment this out after I load it once
//drop collection as off switch ()

//////

app.get('/custommonster', (req, res) => {
    MonsterCustom.find({}).then((allMonsters) => {
     res.render('index.ejs', {
        customMonsters:allMonsters
      })
    })
 })

app.get('/custommonster/new', (req, res) => {
	res.render('new.ejs')
})


app.get('/custommonster/:id', (req, res) => {
    MonsterCustom .findById(req.params.id).then((foundMonster) => {
        res.render('show.ejs', {
          customizedMonster:foundMonster
        })
        console.log(foundMonster)
      })
    })



app.get('/custommonster/:id/edit', (req, res) => {
    MonsterCustom.findById(req.params.id).then((foundMonster) => {
        res.render('edit.ejs', {
        customizedMonster:foundMonster
        })
    })
})
      

////////


app.post('/custommonster', (req, res) => {
  MonsterCustom.create(req.body)
    .then((createdMonster) => {
      res.redirect('/custommonster');
    })
});

app.delete('/custommonster/:id', (req, res) => {
    MonsterCustom.findByIdAndRemove(req.params.id).then(() => {
        res.redirect('/custommonster')
    }) 
})

app.put('/custommonster/:id', (req, res) => {
    MonsterCustom.findByIdAndUpdate(req.params.id, req.body).then(() => {
      res.redirect('/custommonster')
    })
  })
      

////////
mongoose.connect('mongodb://localhost:27017/oftheessence').then(() => {
	console.log('mongo meow')
})

app.listen(3000, () => {
    console.log('meow')
})

