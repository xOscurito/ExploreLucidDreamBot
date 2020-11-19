module.exports = {
    name: 'wbtb',
    description: "send wbtb info",
    execute(message, args){

	message.channel.send({embed: {
  	    color: 0x9609e1,
   	    title: "The wbtb Technique",
  	    fields: [
   	     	{ name: "Step 1", value: ""},
   	     	{ name: "Step 2", value: ""},
  	     	{ name: "Step 3", value: ""},
 	        { name: "Step 4", value: ""},
 	        { name: "Step 5", value: ""},
  	        { name: "Source", value: "https://www.thelucidguide.com/"},
 	        { name: "Else", value: "Use the command ld!link if you want to see the YouTube video about MILD"},
 	     ]
 	   }
 	 });

    }

}