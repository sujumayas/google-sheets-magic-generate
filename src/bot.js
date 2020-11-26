require('dotenv').config()
const { Client } = require('discord.js')
const { Temu } = require("./temu.js")

const client = new Client()
const PREFIX = "/"

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
  
    let response = Temu.do(cmdName, args)
    message.channel.send(response)
  }  
    
})
client.login(process.env.DISCORDJS_BOT_TOKEN)