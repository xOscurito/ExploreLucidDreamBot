module.exports = {
    name: 'list',
    description: "send a list of command",
    execute(message, args){

	message.channel.send({embed: {
  	    color: 0x9609e1,
   	    title: "Commands list",
  	    fields: [
   	     	{ name: "Teachniques", value: "mild"},
   	     	{ value: "wild", value: "wbtb"},
  	     	{ value: "vild", value: "ld!try"},
 	        { value: "fild", value: "gianluca"},
 	        { name: "Step 5", value: ""},
  	        { name: "Source", value: "https://www.thelucidguide.com/"},
 	        { name: "Links", value: "Youtube(ELD): "},
 	        { name: "Else", value: "Use the command ld!help for a list of commands"},
 	     ]
 	   }
 	 });

    }

}
