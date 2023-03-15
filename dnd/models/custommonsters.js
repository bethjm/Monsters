const mongoose = require('mongoose')

const customMonsterSchema = new mongoose.Schema ({
	img: String,
    name: { type: String, required: true},
  	type: { type: String, required: true},
    used: String,
    location: String,
    stats: {
        CR: String,
        AC: String,
        HP: String,
        STR: String,
        DEX: String,
        INT: String,
        WIS: String,
        CHA: String
    },
    encounterType: String,
    combatType: String,
    strengths: String,
    strengthNotes: String,
    weaknesses: String,
    weaknessNotes: String,
    notes: String

})


const customMonsterCollection = mongoose.model('MonsterCustom', customMonsterSchema)
module.exports = customMonsterCollection



