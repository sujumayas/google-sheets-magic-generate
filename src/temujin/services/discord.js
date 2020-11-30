const { Client, MessageEmbed } = require('discord.js')

const client = new Client()

//Set Event Handlers for temu
client.on("ready",()=>{
  console.log(`${client.user.tag} has logged in.`)
})

// const createTemplate = async function(response){
//   let msg = new MessageEmbed()
//             .setColor('#0099ff')
//             .setAuthor("Temujin Magical Bot","https://media-exp1.licdn.com/dms/image/C4E03AQFzgujb8mJgWA/profile-displayphoto-shrink_200_200/0?e=1611792000&v=beta&t=KnMeu9yI4CAQgUGxox04eIFLGbi6k8DmkTR-d_5NLZk","https://www.linkedin.com/in/diego-polo-ch%C3%A1vez-aa620031/")
//   console.log("discord is creating a message with: ")
//   let [name, value] = response;
//   msg.addField(name,value, false)

//   return msg;
// }



module.exports = {client}