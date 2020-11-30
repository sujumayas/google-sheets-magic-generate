const { DATA } = require('./data/temu.js')

// The Calculator
const Temu = {
  data: DATA,
  
  core: {
    'list': (data, args) => {
      let result = ``      
      Object.entries(data[args[0]]).forEach((item, index)=>{
        let {name, description } = item[1]
        result += `
          ${index+1}) ${name} 
          ${description}
          `
      })
      return  [`Listing ${args[0]}:`, `${result}`]
     },
    'help': (data, args) => {
      if(!args[0]){
        return [ 
          `${data['help']['help']['name']}`, 
          `${data['help']['help']['description']}${data['help']['help']['help']}`]
      }else{
        return [ 
          `${data['help'][args[0]]['name']}`, 
          `${data['help'][args[0]]['description']}${data['help'][args[0]]['help']}`]
      }
    },
    'joke': (data, args) => {
      return ["Just", "joking"]
    }
  },

  plugins: {},    

  execute: async function(buttonName, args) {
    const func = this.core[buttonName] || this.plugins[buttonName];
    let result = await func(this.data, args);
    return result
  },

  registerPlugin(plugin) {
    const { name, exec } = plugin;
    this.plugins[name] = exec;
  }
};

module.exports = {Temu}