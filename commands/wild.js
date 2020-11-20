module.exports = {
    name: 'wild',
    description: "send wild info",
    execute(message, args){

	message.channel.send({embed: {
  	    color: 0x9609e1,
   	    title: "The WILD Technique",
  	    fields: [
   	     	{ name: "Step 1", value: "Wake yourself up after 4 to 6 hours of sleep, get out of bed and stay up for anywhere between a few minutes to an hour before going back to bed. It is preferable that you do something related to lucid dreaming during this time, but it is not required."},
   	     	{ name: "Step 2", value: "Go back to bed and lie absolutely still, as if your body is melting into the mattress and losing all sensation. Silence your inner monologue if it starts to chime in. You may hear hypnagogic sounds, echoes of voices and other sounds in your head."},
  	     	{ name: "Step 3", value: "Once in the half-dream state, you will experience hypnagogia as a mixture of patterns and colors that take over your vision in the darkness. Observe your hypnagogia and stay relaxed, allowing it to hypnotize you and draw your awareness away from the outside world  into the internal dream world that is starting to evolve now."},
 	        { name: "Step 4", value: "Try"},
 	        { name: "ATTENTION", value: "Since your consciousness is still linked to your physical body, which is now asleep, you may feel the effects of sleep paralysis. This is a natural protection mechanism which stops you from acting out your dreams. It happens every night, but usually by this stage your mind is asleep too. So if you feel like your limbs are going numb, or a lead blanket is moving up your body, don’t fight it. Instead, relax and rejoice in the fact that you are about the enter a Wake Induced Lucid Dream"},
  	        { name: "Source", value: "https://www.youtube.com/channel/UCF_gxHcSIPIyCV31oa1wWpA"},
 	        { name: "Else", value: "Use the command ld!wildlink if you want to see the YouTube video about WILD or ld!help for a list of commands"},
 	     ]
 	   }
 	 });

    }

}
