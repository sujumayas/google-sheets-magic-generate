const {google} = require('googleapis');
const {spellsData} = require("../services/google.js")

const cast = {
  
  name : 'cast',
  exec: async function(data, user, args){
    // args = [/temu cast] sense-magic x2 
    // args [0] = spellname 
    // args [1] = desired multiplier
    // specialArgs [0] = username (obtained from casting username)
    // specialArgs [1] = diceThrow (generated)
    // googleApi/user = (specialArgs[0]) Ranks in (args[0]) spell
    // googleApi/user = (specialArgs[1]) + (specialArgs[0])Spell Bonus
    // googleApi/user = (specialArgs[0]) Available PPs (¿editable?)
    // googleApi/user = (specialArgs[0]) Stat Bonus

    // Logic: 
      
      // Determine what kind of Wizard it is: 
        // Ranks > 30               : Wizard       (x0)
        // Ranks < 30 && Ranks > 20 : Magician     (x2)
        // Ranks < 20 && Ranks > 10 : Practitioner (x4)
        // Ranks < 10               : Dabbler      (x8)
      
      // If not Wizard -> Determine Chaos Engineering

        // base_multiplier = Math.random(x[Magician|Practiioner|Dabbler]) 
        // full_multiplier = Math.random(x[Magician|Practiioner|Dabbler]) + desired_multiplier (args[3])
        // Spell base cost * full_multiplier
        // spell base castingtime * base_multiplier
        // For each Spell SMEs: 
          // SME Bonus * full_multiplier
      
      // Determine dificulty of spellcasting: 
          // diff: baseTN (101) + (full_multiplier * dificulty_steps(5))
      
      //Determine if you can cast the spellcasting
          // throw > diff ? 
            // Fail Message (difference between diff and Throw)
          // else: 
            // Success message for table (full_multiplier, SME_final_bonus, final_Cost, final_casting_time)
    //Tools
    let processSpellData = function(data){
      let results = {}
      let spells = data["spells"].values
      let mana = data["mana"].values
  
      for (let i = 1; i < spells.length; i++) {
        if(results[spells[i][0]] == undefined){
          results[spells[i][0]] = {}
          results[spells[i][0]]["spells"] = []
          results[spells[i][0]]["mana"] = {}
        }
        results[spells[i][0]]["spells"].push({
          spellName : spells[i][1],
          bonus : spells[i][2],
          stat : spells[i][3],
        })
      }
  
      for (let j = 1; j < mana.length; j++) {
        let name = mana[j][0]
        let available = mana[j][1]
        let total = mana[j][2]
        Object.keys(results).forEach(spellCaster=>{
          if(spellCaster == name){
            results[spellCaster]["mana"]["available"] = available
            results[spellCaster]["mana"]["total"] = total
          }
        })
        
      }
  
      return results
  
    }
    let checkForSpell = function(castersData, user, spellName){
      if(castersData[user]){
        return (castersData[user]["spells"].filter(spell=>{
          return spell["spellName"] == spellName
        }).length > 0)
      }
      return false
    }
    

    let castersData = processSpellData(spellsData)
    console.log(castersData[user]["spells"])
    console.log(args[0])
    let result = checkForSpell(castersData, user, args[0])

    return {
      title: "Casting Algorithm...", 
      description: `The user: ${user} ${(result ? "has the ":"does not have the ")} ${args[0]} spell` 
    }
  }
}

module.exports = {cast}