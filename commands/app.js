module.exports = {
    name: 'app',
    description: "send ld apps info",
    execute(message, args){

	message.channel.send({embed: {
			title: "Dream Journaling Apps",
			color: 6166501,
			footer: {
			  icon_url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj",
			  text: "| Made by Oscurito"
			},
		fields: [
			  
   	     	{ name: "Lucidity", value: "Lucidity (for both IOs and Android) is one of the most used app for dream journal"},
   	     	{ name: "Benefits", value: "Meditators have reduced REM sleep but greater dream recall\nMeditators have more lucid dreams, even after controlling for recall\nBoth meditators and lucid dreamers show more  field independence\n Field independence is a cognitive style of learning. It means you tend to separate details from the surrounding context (as opposed to field dependence, which is the inability to distinguish details)"}, 
			{ name: "Guided Meditation Videos", value: "[Meditation Vacation Dream Playlist](https://www.youtube.com/playlist?list=PLY7K9GAzFiwk1W9nScaJeT8qUnYPfKMFc)\n[Daniel Love Guided Meditation](https://youtu.be/GzDCyxYd92k)"},
			{ name: "YT Videos", value: "[Explore Lucid Dreaming Beginner Meditation tutorial 1](https://youtu.be/cbLH6DZ17VM)\n[Explore Lucid Dreaming Beginner Meditation tutorial 2](https://youtu.be/CXUaocZynMc)"},
			  
			]
		  }
		}
	)
 }
}