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
        AC: Number,
        HP: Number,
        STR: Number,
        DEX: Number,
        INT: Number,
        WIS: Number,
        CHA: Number,
    },
    skills: {
      acrobatics: Number,
      animalHandling:Number,
      arcana:Number,
      athletics:Number,
      deception:Number,
      history:Number,
      insight:Number,
      intimidation:Number,
      investigation:Number,
      medicine:Number,
      nature:Number,
      perception:Number,
      performance:Number,
      persuasion:Number,
      sleightOfHand:Number,
      survival:Number,
    },
    savingThrows: {
      strength: Number,
      dexterity: Number,
      constitution: Number,
      intelligence: Number,
      wisdom: Number,
      charisma: Number
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
    }

})


const PlayerCollection = mongoose.model('Player', PlayerSchema)
module.exports = PlayerCollection