const cast = {
  
  name : 'cast',
  exec: async function(data, args){
    // args [0] = spellname
    // args [1] = ranks in such spell
    // args [2] = dice for the throw + bonus
    // args [3] = desired multiplier
    // args [4] = Available PPs

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

    return {
      title: "Casting Algorithm resting...", 
      description: "I am sorry temu is not smart enough" 
    }
  }
}

module.exports = {cast}