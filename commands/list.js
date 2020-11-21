module.exports = {
    name: 'list',
    description: "send a list of command",
    execute(message, args){

	message.channel.send({embed: {
			title: " Commands List",
			description: " ***```\nImportant: Use ld! as prefix before the command```***",
			color: 6166501,
			footer: {
			  icon_url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj",
			  text: "| Made by Oscurito"
			},
			thumbnail: {
			  url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj"
			},
			
			fields: [
			  {
				name: "Techniques",
				value: "ada\ncild\ndeild\ndild\ndream_walker\nfild\nimp\nlove_method\nmild\nnild\nrausis\nspild\nssild\nvild\nwbtb\nwild\nwrild",
				 inline: true
			  },
			  {
				name: "Others",
				value: "dream_journal\nsleep_cycle\nsleep_paralysis\nreality_check\nmotivation\nlucidesk\napplications\nmeditation\nbinaural_beats\ndream_recall\nlucid_nightmare\nmistakes\nbest_technique\nfall_asleep_fast",
				 inline: true
			  },
			  {
				name: "Links",
				value: "[Officail Youtube](https://www.youtube.com/channel/UCF_gxHcSIPIyCV31oa1wWpA)\n[Patreon](https://www.patreon.com/exploreluciddreaming)\n[TheLucidGuide](https://www.thelucidguide.com/)"
			  }
			  
			]
		  }
		}
	)
 }
}
