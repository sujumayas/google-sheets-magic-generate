module.exports  = {
  TEMU:{
    name: "Temujin Magical Bot",
    phrase: "Doing all the hardwork for you",
    imageURL: "https://media-exp1.licdn.com/dms/image/C4E03AQFzgujb8mJgWA/profile-displayphoto-shrink_200_200/0?e=1611792000&v=beta&t=KnMeu9yI4CAQgUGxox04eIFLGbi6k8DmkTR-d_5NLZk",
    url: "https://www.linkedin.com/in/diego-polo-ch%C3%A1vez-aa620031/"
  },
  DATA: {
    help:{
      help: {
        help: `
          > This bots knows this commands so far:  
          > 
          >  **/temu help**
          >  You can use it alone or after a command to be more specific. 
          >  
          >  **/temu cast**         
          >  You can use it with the name of a spell and your skill to cast it.
          >  
          >  **/temu list**          
          >  You can use it with lists like "spells" to print them in the chat. 
          >  
          >  **/temu joke**        
          >  You want some fun? Temujin is ready. 
          > 
          >  
          > It's just magic!
          `,
        name: "Help Command",
        description: `This command lists all the commands and help you user Temujin Magical Bot.\n\n`
      },
      cast: {
        help: `
          > Cast a spell
          > 
          > Use it with the name of a spell and your skill total like this: 
          > In the future this will also throw your dice. 
          > 
          > /temu cast fireball 120
          > 
          > 
          > It's just magic!
          `,
        name: "Cast command",
        description: "The best way to cast spells in the Noth World. A little bit of Chaos Added!"
      },
      list: {
        help: `
          > Use it to list things like "spells" like this: 
          > 
          > /temu list spells
          > 
          > /temu list random
          > 
          > It's just magic!
          `,
        name: "List Command",
        description: "Just a simple command to list things. Try spells or random"
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
        name: "Joke Command",
        description: "Enjoy the simple humour of the bots!"
      }
    },
    spells:{
      senseMagic: {
        name: "Sense Magic",
        description: "You sense magic",
        castTimeInTurns: 1, 
        ppBaseCost: 6,
        specialModifierEffect: {
          name: "Area of Effect", 
          baseValue: 10, 
          metric: "m",
          multiplierStep: 0.2
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
          metric: "HP",
          multiplierStep: 0.5
        },
      }
    },
    categories: [
      {
        "name": "Activo",
        "slug": "activo",
        "description": "Slug: activo",
      },{
        "name": "Adventures",
        "slug": "adventures",
        "description": "Slug: adventures",
      },{
        "name": "Bazaar Squirrels",
        "slug": "bazaar-squirrels",
        "description": "Slug: bazaar-squirrels",
      },{
        "name": "Characters",
        "slug": "characters",
        "description": "Slug: characters",
      },{
        "name": "Cirrane",
        "slug": "cirrane",
        "description": "Slug: cirrane",
      },{
        "name": "Cities",
        "slug": "cities",
        "description": "Slug: cities",
      },{
        "name": "Dragones",
        "slug": "dragones",
        "description": "Slug: dragones",
      },{
        "name": "Dwarves",
        "slug": "dwarves",
        "description": "Slug: dwarves",
      },{
        "name": "Enemigo Intimo",
        "slug": "enemigo-intimo",
        "description": "Slug: enemigo-intimo",
      },{
        "name": "Estado del mundo",
        "slug": "estado-del-mundo",
        "description": "Slug: estado-del-mundo",
      },{
        "name": "Foul Brigands",
        "slug": "foul-brigands",
        "description": "Slug: foul-brigands",
      },{
        "name": "Gulska",
        "slug": "gulska",
        "description": "Slug: gulska",
      },{
        "name": "Hyamel",
        "slug": "hyamel",
        "description": "Slug: hyamel",
      },{
        "name": "Iron nails",
        "slug": "iron-nails",
        "description": "Slug: iron-nails",
      },{
        "name": "Kingdom",
        "slug": "kingdom",
        "description": "Slug: kingdom",
      },{
        "name": "La Banda",
        "slug": "la-banda",
        "description": "Slug: la-banda",
      },{
        "name": "La guardia (Hyamel)",
        "slug": "la-guardia-hyamel",
        "description": "Slug: la-guardia-hyamel",
      },{
        "name": "La Red",
        "slug": "la-red",
        "description": "Slug: la-red",
      },{
        "name": "La Sirena Varada",
        "slug": "la-sirena-varada",
        "description": "Slug: la-sirena-varada",
      },{
        "name": "Los Intocables",
        "slug": "los-intocables",
        "description": "Slug: los-intocables",
      },{
        "name": "Meta Excerpts",
        "slug": "meta-excerpts",
        "description": "Slug: meta-excerpts",
      },{
        "name": "MIA",
        "slug": "mia",
        "description": "Slug: mia",
      },{
        "name": "Mirror Mountains",
        "slug": "mirror-mountains",
        "description": "Slug: mirror-mountains",
      },{
        "name": "Northern Kings",
        "slug": "northern-kings",
        "description": "Slug: northern-kings",
      },{
        "name": "NPC",
        "slug": "npc",
        "description": "Slug: npc",
      },{
        "name": "Places",
        "slug": "places",
        "description": "Slug: places",
      },{
        "name": "River Rats",
        "slug": "river-rats",
        "description": "Slug: river-rats",
      },{
        "name": "Rusturia",
        "slug": "rusturia",
        "description": "Slug: rusturia",
      },{
        "name": "Southern Emperors",
        "slug": "southern-emperors",
        "description": "Slug: southern-emperors",
      },{
        "name": "The foul Brigands",
        "slug": "the-foul-brigands",
        "description": "Slug: the-foul-brigands",
      },{
        "name": "The Protectors",
        "slug": "the-protectors",
        "description": "Slug: the-protectors",
      },{
        "name": "Uncategorized",
        "slug": "uncategorized",
        "description": "Slug: uncategorized",
      },{
        "name": "Windermere",
        "slug": "windermere",
        "description": "Slug: windermere",
      }
    ],
    jokes:[
      {
        name: "Q: How many Call of Cthulhu investigators does it take to change a lightbulb?",
        description: "A: All of them, don't split up the party!"
      },
      {
        name: "Q: How many Call of Cthulhu investigators does it take to change a lightbulb?",
        description: "A: What, go out there? In the dark?!!!"
      },
      {
        name: "Q: How many Call of Cthulhu investigators does it take to change a lightbulb?",
        description: "A: Three, one to change the lighbulb, one to hold the ladder, and one to keep watch with a shotgun."
      },
      {
        name: "Q: How many Call of Cthulhu investigators does it take to change a lightbulb?",
        description: "A: Sorry, they all died when the light went out."
      },
      {
        name: "Q: What looks like Black Pudding and wears chainmail?",
        description: "A: A squashed dwarf."
      },
      {
        name: "Life is like a dick.",
        description: "It gets hard for no reason and it is much too short."
      },
      {
        name: "Why did the wizard seductively kiss his date a few inches below her jawline?",
        description: "He was a neck romancer."
      },
      {
        name: "Why don’t ants have dicks?",
        description: "If they did, they would be uncles!"
      },
      {
        name: "The optimal party should always have a bard and a Rogue",
        description: "To balance out your prose and cons"
      },
      {
        name: "What do you call a Campaign with a party full of Clerics?",
        description: "Multiplayer"
      },
      {
        name: "Q: How many half-elves does it take to change a light bulb?",
        description: "A. Only one. It turns out that half-elves are good for something after all."
      },
      {
        name: "Q. How many elves does it take to sharpen a sword?",
        description: "A. Three, one to do the sharpening, and two to compose a song about it so when the first one is done four hundred years later, they can remember whose sword it is."
      }
       
    ]
  }
}