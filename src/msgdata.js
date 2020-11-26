module.exports  = {
  _temu:{
    name: "Temujin Magical Bot",
    phrase: "Doing all the hardwork for you",
    imageURL: "https://media-exp1.licdn.com/dms/image/C4E03AQFzgujb8mJgWA/profile-displayphoto-shrink_200_200/0?e=1611792000&v=beta&t=KnMeu9yI4CAQgUGxox04eIFLGbi6k8DmkTR-d_5NLZk",
    url: "https://www.linkedin.com/in/diego-polo-ch%C3%A1vez-aa620031/"
  },
  _commands:{
    help: {
      help: `
        > This bots knows this commands so far:  
        > 
        >  $ /temu help          You can use it alone or after a command to be more specific. 
        >  $ /temu cast          You can use it with the name of a spell and your skill to cast it.
        >  $ /temu list          You can use it with lists like "spells" to print them in the chat. 
        >  $ /temu joke          You want some fun? Temujin is ready. 
        > 
        > It's just magic!
        `,
      name: "test command name",
      description: "test command description"
    },
    cast: {
      help: `
        > Cast a spell
        > 
        > Use it with the name of a spell and your skill total like this: 
        > In the future this will also throw your dice. 
        > 
        > $ /temu cast fireball 120
        > 
        > 
        > It's just magic!
        `,
      name: "test command name",
      description: "test command description"
    },
    list: {
      help: `
        > Use it to list things like "spells" like this: 
        > 
        > $ /temu list spells
        > 
        > 
        > It's just magic!
        `,
      name: "test command name",
      description: "test command description"
    },
    joke: {
      help: `
        > A simple joking algorithm. 
        > 
        > (1) It searches for stupidity in the party
        > (2) It analyze it deeply. 
        > (3) It makes a joke about it. 
        > 
        > It's just magic!
        `,
      name: "test command name",
      description: "test command description"
    }
  },
  _spells:{
  senseMagic: {
    name: "Sense Magic",
    description: "You sense magic",
    castTimeInTurns: 1, 
    ppBaseCost: 6,
    specialModifierEffect: {
      name: "Area of Effect", 
      baseValue: 10, 
      metric: "m"
    },
  },
  fireball: {
    name: "Fireball",
    description: "You throw a Fireball",
    castTimeInTurns: 3, 
    ppBaseCost: 12,
    specialModifierEffect: {
      name: "Damage", 
      baseValue: 10, 
      metric: "HP"
    },
    
  }
  }
}