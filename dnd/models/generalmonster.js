const mongoose = require('mongoose')

const generalMonsterSchema = new mongoose.Schema ({
	img: String,
    version: { type: String, required: true},
    name: { type: String, required: true},
  	type: { type: String, required: true},
    combatType: String,
    stats: {
        CR: Number,
        AC: Number,
        HP: Number,
        STR: Number,
        DEX: Number,
        INT: Number,
        WIS: Number,
        CHA: Number
    },
    strengths: String,
    weaknesses: String,

})


const generalMonsterCollection = mongoose.model('generalMonster', generalMonsterSchema)
module.exports = generalMonsterCollection