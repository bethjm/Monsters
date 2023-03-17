const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema ({
    name: { type: String, required: true},
    basicInfo: {
      class: String,
      level: Number,
      race: String,
      alignment: String,
      experiencePoints: Number,
    },
    stats: {
        AC: String,
        HP: String,
        STR: String,
        DEX: String,
        INT: String,
        WIS: String,
        CHA: String,
        CON: String,
    },
    skills: {
      acrobatics: String,
      animalHandling:String,
      arcana:String,
      athletics:String,
      deception:String,
      history:String,
      insight:String,
      intimidation:String,
      investigation:String,
      medicine:String,
      nature:String,
      perception:String,
      performance:String,
      persuasion:String,
      sleightOfHand:String,
      survival:String,
      passive:String,
    },
    savingThrows: {
      strength: String,
      dexterity: String,
      constitution: String,
      intelligence: String,
      wisdom: String,
      charisma: String
    },
    personality: {
      traits: String,
      ideals: String,
      bonds: String,
      flaws: String,
    },
    looks: {
      age: Number,
      height: String,
      weight: String,
      eyes: String,
      skin: String,
      other: String,
    },
    notes: String,

})


const PlayerCollection = mongoose.model('Player', PlayerSchema)
module.exports = PlayerCollection