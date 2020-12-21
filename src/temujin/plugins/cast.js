const {google} = require('googleapis');
const {castersGoogleData} = require("../services/google.js")

const cast = {
  
  name : 'cast',
  exec: async function(data, user, args){
    
    //Tools
    let processSpellData = function(castersGoogleData){
      let results = {}
      let spells = castersGoogleData["spells"].values
      let mana = castersGoogleData["mana"].values
  
      for (let i = 1; i < spells.length; i++) {
        if(results[spells[i][0]] == undefined){
          results[spells[i][0]] = {}
          results[spells[i][0]]["spells"] = []
          results[spells[i][0]]["mana"] = {}
        }
        results[spells[i][0]]["spells"].push({
          spellName : spells[i][1],
          ranks : spells[i][2],
          bonus : spells[i][3],
          stat : spells[i][4],
          generalData : {
            sme : spells[i][5],
            sme_name : spells[i][6],
            sme_measure : spells[i][7],
            cost : spells[i][8],
            aoe : spells[i][9],
            casting_time: spells[i][10],
            duration: spells[i][11]
          }
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
    let hasMana = function(castersData, user, manaToSpend){
      console.log(castersData[user]["mana"]["available"])
      console.log(manaToSpend)
      if(castersData[user]["mana"]["available"] > manaToSpend){
        return true
      }
      return false
    }
    let processSpellCast = function(castersData, user, desiredMultiplier){
      console.log(castersData)
      /* castersData : {
      *     spells: [
      *       {spellName, ranks, bonus, stat, sme, sme_name, sme_measure, cost, aoe, casting_time}    
      *     ],
      *     mana: { available, total }
      * }
      */
      let experticeChaosMultipliers = {dabbler: 8, practitioner: 4, magician: 2, wizzard: 0, }
      
      //Extract only the spell we want into thisSpellData
      let [thisSpellData] = castersData.spells.filter(spell => {
        return spell.spellName == args[0] // check this
      })
      // Determine what kind of Wizard it is: 
      let expertice = "dabbler"
        // Ranks > 30               : Wizard       (x0)
        if(thisSpellData.ranks > 30){
          expertice = "wizzard"
        }else if (thisSpellData.ranks > 20){
          expertice = "magician"
        }else if(thisSpellData.ranks > 10){
          expertice = "practitioner"
        }
      // If not Wizard -> Determine Chaos Engineering
      let chaosMultiplier  = 0
      if(expertice != "wizzard"){
        // chaosMultiplier = Math.random(x[Magician|Practiioner|Dabbler])
        chaosMultiplier = Math.floor(Math.random() * experticeChaosMultipliers[expertice])
      }
      // fullMultiplier = Math.random(x[Magician|Practiioner|Dabbler]) + desired_multiplier
      let fullMultiplier = chaosMultiplier + parseInt(desiredMultiplier)
      // Spell base cost * fullMultiplier
      let finalCost = thisSpellData.generalData.cost * fullMultiplier
      // spell base castingtime * chaosMultiplier
      let finalCastingTime = thisSpellData.generalData.casting_time * fullMultiplier
      let finalSME = thisSpellData.generalData.sme * fullMultiplier
      let finalSMEMeasure = thisSpellData.generalData.sme_measure
      let smeName = thisSpellData.generalData.sme_name
      let baseAoe = thisSpellData.generalData.aoe
      let baseDuration = thisSpellData.generalData.duration

      manaToSpend = finalCost
      aoe = (smeName == "aoe") ? `(SME)${finalSME} ${finalSMEMeasure}`: `${baseAoe} meters`
      duration = (smeName == "duration") ? `(SME)${finalSME} ${finalSMEMeasure}`: `${baseDuration} seconds`
      castingTime = `${finalCastingTime} turns`
      finalMultiplier = `x${fullMultiplier}`
      return {manaToSpend, aoe, duration, castingTime, finalMultiplier, expertice}
    }
    


    /** 
    *
    * 
    *   Cast Logic here. 
    * 
    * 
    * 
    *
    **/
    let spellName = args[0]
    let desiredMultiplier = args[1].substring(1) // remove x in x2
    let castersData = processSpellData(castersGoogleData)
    let finalCast = {}
    // specialArgs [1] = diceThrow (generated)
    if(checkForSpell(castersData, user, spellName)){
      console.log("The user have the spell")
      result = true
      let {manaToSpend, aoe, duration, castingTime, finalMultiplier, expertice} = processSpellCast(castersData[user], user, desiredMultiplier)
      if(hasMana(castersData, user, manaToSpend)){
        console.log("Casting... ")
        totalMana = castersData[user]["mana"]["total"]
        availableMana = castersData[user]["mana"]["available"] - manaToSpend
      }
      finalCast = {manaToSpend, totalMana, availableMana, aoe, duration, castingTime, finalMultiplier, spellName, user, expertice}
    }else{
      finalCast = null
    }
    
    
    
    
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
    
    
    
    return (finalCast) ? {
      title: "Casting Algorithm...", 
      description: `${finalCast.user} has the spell && has enough Mana to cast it!`,
      fields: {
        name: `Results:
        `,
        value: `${finalCast.user} casts the ${finalCast.spellName} spell with a __**${finalCast.finalMultiplier} multiplier**__:
        He is a **${finalCast.expertice}** in this spell. 
        **Duration**: ${finalCast.duration}
        **AoE **: ${finalCast.aoe}
        **Casting Time**: ${finalCast.castingTime}
        **Mana Spent**: ${finalCast.manaToSpend}(${finalCast.availableMana}/${finalCast.totalMana})`
      } 
    } : {
      title: "Casting Algorithm...", 
      description: `The User does not know that spell`,
    }
  }
}

module.exports = {cast}