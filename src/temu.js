const { MessageEmbed } = require('discord.js')
const { _temu, _commands, _spells } = require('./msgdata.js')

class Temu {
  

  static do(command, args){
    //Start response
    let response = new MessageEmbed()
      .setColor('#0099ff')
      // .setTitle(_commands[command].name)
      // .setDescription(_commands[command].description)
      .setAuthor(_temu.name, _temu.imageURL, _temu.url)
    
    if(command == "cast"){
      
    }

    if(command == "list" && args[0] == "spells"){
      Object.entries(_spells).forEach((spell, index)=>{
        let {name, description } = spell[1]
        response.addField(`${index+1}) ${name}`, `${description}`)
      })
    }
    return response;
  }


  
  
}

module.exports = {Temu}