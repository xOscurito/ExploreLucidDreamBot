module.exports = {
    name: 'wbtb',
    description: "send wbtb info",
    execute(message, args){

	message.channel.send({embed: {
  	    color: 0x9609e1,
   	    title: "The WBTB Technique",
  	    fields: [
   	     	{ name: "Step 1", value: "Set an alarm to wake you after four to five hours sleep, then retire to bed. When setting the alarm, understand that the aim is to interrupt your sleep cycle just prior to entering the stage in which REM (dreaming) sleep is  most prevalent."},
   	     	{ name: "Step 2", value: "Go to sleep (Easy one)."},
  	     	{ name: "Step 3", value: "Upon waking from your alarm, get out of bed and occupy yourself for 15-90 minutes (you will need to experiment to find your optimal time - for most it is roughly 20 minutes). Do whatever is required to make your mind alert and active, but without going as far as to make returning to sleep impossible."},
 	        { name: "Step 4", value: "Return to bed with the firm intention to recognise that you are dreaming once it occurs. Allow yourself to relax and fall back into sleep (generally at this point, dreamers will also be employing a second psychological technique to improve their chances of success)."},
  	        { name: "Source", value: "https://www.thelucidguide.com/"},
 	        { name: "Else", value: "Use the command ld!wbtblink if you want to see the YouTube video about WBTB or ld!help for a list of commands"},
 	     ]
 	   }
 	 });

    }

}