module.exports = {
    name: 'ada',
    description: "send ada info",
    execute(message, args){

        message.channel.send({embed: {
            color: 0x9609e1,
            title: "All Day Awareness",
            footer: {
                icon_url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj",
                text: "| Made by Oscurito"
              },
            fields: [
              { name: "The principle", value: "As you go about your daily business, strive to increase your powers of observation, reflection and your sense of presence in the moment.\n\nFor example, as you're reading this message pay extra attention to your surroundings. Feel the sensations in your body, notice the subtle sounds in your environment, become aware of your sensory experience, the sights, sounds, scents and sensations, and importantly, your thoughts."},
              { name: "The main objective", value: 'ADA is not about increasing the *amount* of awareness, instead, it is a form of training that attempts to change the nature and focus of your awareness.'},
              { name: "Step 3", value: "Imagine yourself back in the dream only this time see yourself becoming aware that you are dreaming."},
              { name: "Step 4", value: "Continue steps two and three until your have clearly set your intention or you return to sleep."},
              { name: "Source", value: "https://www.thelucidguide.com/"},
              { name: "Else", value: "Use the command ld!mildlink if you want to see the YouTube video about MILD"},
            ]
          }
        });

    }
}