const axios = require('axios');

const show = {
  
  name : 'show',
  exec: async function(data, args){
    console.log(args[0])
    apiBaseURL = "https://public-api.wordpress.com/rest/v1.1/sites/theworldofnoth.wordpress.com"
    let response = await axios.get(`${apiBaseURL}/posts?search=${args[0]}`) //args.join("&amp;")
    let {title, URL, featured_image} = response.data.posts[0]
    return [`Showing ${args[0]}:`, `${title}\n${URL}\n${featured_image}\n`]
  },
}

module.exports = {show}