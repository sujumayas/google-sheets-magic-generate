const { DATA } = require('./data/temu.js')
const TurndownService = require('turndown')
const turndownService = new TurndownService()

// The Calculator
const Temu = {
  data: DATA,
  
  core: {
    'list': (data, args) => {
      let result = []      
      Object.entries(data[args[0]]).forEach((item, index)=>{
        let {name, description } = item[1]
        result.push({
          "name": `${index+1}) ${name}`,
          "value": description
        })
      })
      return {title: `Listing: ${args[0]}`, description: `This are the ${args[0]} we could find:`, fields: result}
     },
    'help': (data, args) => {
      if(!args[0]){
        return {
          title: `${data['help']['help']['name']}`, 
          description: `${data['help']['help']['description']}`,
          fields: {name: "Content: ", value: `${data['help']['help']['help']}`}
        }
      }else{
        return {
          title: `${data['help'][args[0]]['name']}`, 
          description: `${data['help'][args[0]]['description']}`,
          fields: {name: "Content: ", value: `${data['help'][args[0]]['help']}`}
        }
      }
    },
    'joke': (data, args) => {
      let joke = Math.floor(Math.random() * data["jokes"].length)
      console.log(data["jokes"][joke])
      return {title: "Joke command:", description: "...", fields:{
        name: data["jokes"][joke].name,
        value: data["jokes"][joke].description
      }}
    }
  },

  createTemplate: async function(responseObject){
    let template = {}

    // Base template Data
    template.color = "0x0099ff"
    template.author = {
      name :"Temujin Magical Bot",
      icon_url :"https://media-exp1.licdn.com/dms/image/C4E03AQFzgujb8mJgWA/profile-displayphoto-shrink_200_200/0?e=1611792000&v=beta&t=KnMeu9yI4CAQgUGxox04eIFLGbi6k8DmkTR-d_5NLZk",
      url :"https://www.linkedin.com/in/diego-polo-ch%C3%A1vez-aa620031/",
    }
    // template.footer = {
    //   text : "Doing all the hard work for you",
    //   icon_url : "https://media-exp1.licdn.com/dms/image/C4E03AQFzgujb8mJgWA/profile-displayphoto-shrink_200_200/0?e=1611792000&v=beta&t=KnMeu9yI4CAQgUGxox04eIFLGbi6k8DmkTR-d_5NLZk",
    // }

    // Required Data
    template.title = responseObject.title
    template.description = turndownService.turndown(responseObject.description)
    
    // Optional Data
    template.fields = responseObject.fields || []
    template.url = responseObject.url || "http://google.com"
    if(responseObject.image && responseObject.image.length > 1){
      template.image = responseObject.image || {
        url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/afb86caa-39ba-4a91-ba30-89b096bb4c5b/dd2hlhj-1cfe0289-138c-4605-ae62-de8b83d5bc95.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYWZiODZjYWEtMzliYS00YTkxLWJhMzAtODliMDk2YmI0YzViXC9kZDJobGhqLTFjZmUwMjg5LTEzOGMtNDYwNS1hZTYyLWRlOGI4M2Q1YmM5NS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.uDt3jQFc-OV2xD81Hq8a6WIY2E8MNdnZYDETokPE_Ws"
      }
    }
    

    return template;
  },

  plugins: {},    

  execute: async function(buttonName, user, args) {
    const func = this.core[buttonName] || this.plugins[buttonName];
    let result = await this.createTemplate(await func(this.data, user, args));
    return result
  },

  registerPlugin(plugin) {
    const { name, exec } = plugin;
    this.plugins[name] = exec;
  }
};

module.exports = {Temu}