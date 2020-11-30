require('dotenv').config()
const { client, createTemplate } = require("./temujin/services/discord.js")
const { Temu } = require("./temujin/temu.js")
const plugins = require("./temujin/plugins/index")
const PREFIX = "/"


// 1. Login Discord client 
client.login(process.env.DISCORDJS_BOT_TOKEN)

// 2. Start reading messages
client.on("message", async (message)=>{
  
  // Dont read my own messages
  if(message.author.bot) return
  
  //check if this is a message for me
  if(message.content.startsWith(PREFIX)){
    const [botName, cmdName, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/)
    if( botName == "temu" ){
      const response = await createTemplate( await Temu.execute(cmdName, args)) // temu.execute should return Embed Object -.-
      message.channel.send(response)
    }
  }  
    
})

//Install all plugins
plugins.forEach(plugin => {
  console.log("Installing plugin... " + plugin.name)
  Temu.registerPlugin(plugin)
});



