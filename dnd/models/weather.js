const mongoose = require('mongoose')
 
const WeatherSchema = new mongoose.Schema ({
weather:{
    temp: String
}
})


const Weather = mongoose.model('Weather', WeatherSchema)
module.exports = Weather