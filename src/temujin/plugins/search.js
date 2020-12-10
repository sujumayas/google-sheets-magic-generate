const axios = require('axios');

const search = {
  
  name : 'search',
  exec: async function(data, user, args){
    apiBaseURL = "https://public-api.wordpress.com/rest/v1.1/sites/theworldofnoth.wordpress.com"
    let response = await axios.get(`${apiBaseURL}/posts?search=${args[1]}&category=${args[0]}`) //args.join("&amp;")
    console.log(response.data)
    selectedPost = 0
    response.data.posts.forEach((post, index)=>{
      let lowerPost = post.title.toLowerCase()
      if(lowerPost.includes(args[1])){
        selectedPost = index
      }
    })
    let {title, URL, featured_image, excerpt} = response.data.posts[selectedPost]
    return {
      title: title, 
      description: `${excerpt}`, 
      url: URL, 
      image: {url: featured_image }}
  },
}

module.exports = {search}