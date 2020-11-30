const { Client, MessageEmbed } = require('discord.js')
const { TEMU, COMMANDS, SPELLS } = require('./data/temu.js')
const client = new Client()
const PREFIX = "/"

class Temu {
  static spells = SPELLS
  static temu = TEMU
  static commands = COMMANDS

  static start(token){
    
    //Set Event Handlers for temu
    client.on("ready",()=>{
      console.log(`${client.user.tag} has logged in.`)
    })
    client.on("message", (message)=>{
      
      // Dont read my own messages
      if(message.author.bot) return
      
      //check if this is a message for me
      if(message.content.startsWith(PREFIX)){
        const [botName, cmdName, ...args] = message.content
          .trim()
          .substring(PREFIX.length)
          .split(/\s+/)
      
        let response = this.do(cmdName, args)
        message.channel.send(response)
      }  
        
    })
    
    //Login Bot
    client.login(token)
  }

  static do(command, args){
    //Start response
    let response = new MessageEmbed()
      .setColor('#0099ff')
      .setAuthor(this.temu.name, this.temu.imageURL, this.temu.url)
    
    switch (command) {
      case "show":
        if(!args[0]){
          console.log("Show subCommand not found error...")
          response = this.manPage(response)
        }else{
          response = this.show(response, args[0])
        }  
        break
      case "list":
        // Just a plain handoff right now
        if(!args[0]){
          console.log("List subCommand not found error...")
          response = this.manPage(response)
        }else if(args[0] == "help"){
          response = this.manPage(response, "list")
        }else{
          let subCommand = args[0]
          response = this[`list${subCommand}`](response)
        }
        break;
      case "help":
        response = this.manPage(response)
        break;
      default:
        response = this.manPage(response)
        break;
    }
    return response;
  }

  static listspells(response){
    Object.entries(this.spells).forEach((spell, index)=>{
      let {name, description } = spell[1]
      response.addField(`${index+1}) ${name}`, `${description}`)
    })
    return response
  }
  static listrandom(response){
    for(let i = 1; i < (Math.random()*20) + 4; i++){
      response.addField(`Random generated item ${i}`, `Random generated description ${i}`)
    }
    return response
  }

  static show(response, postName){
    //let post = WP.get("postName").permanlink
    let post = "https://theworldofnoth.wordpress.com/2020/06/08/the-world-of-noth/"
    response.addField("Test", `${post}`)
    return response
  }  

  static manPage(response, command = "help"){
    // TODO implement call to data and print Temujin Manual
    //console.log(this.commands)
    response.addField(`
      ${this.commands[command].name}`, 
      `${this.commands[command].description}
      ${this.commands[command].help}`)
    
    return response
  }

}


module.exports = {Temu}