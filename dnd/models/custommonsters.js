const mongoose = require('mongoose')

const customMonsterSchema = new mongoose.Schema ({
	img: String,
    version: { type: String, required: true},
    name: { type: String, required: true},
  	type: { type: String, required: true},
    used: Boolean,
    location: [String],
    situation: [String],
    occupation: String,
    encounterType: String,
    interactType: String,
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
    strengths: [String],
    strengthNotes: String,
    weaknesses: [String],
    weaknessNotes: String,
    importantLinks: [String],
    notes: String

})


const customMonsterCollection = mongoose.model('MonsterCustom', customMonsterSchema)
module.exports = customMonsterCollection



