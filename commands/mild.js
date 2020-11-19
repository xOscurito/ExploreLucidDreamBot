module.exports = {
    name: 'mild',
    description: "send mild info",
    execute(message, args){

        message.channel.send({embed: {
            color: 0x9609e1,
            title: "The MILD technique",
            fields: [
              { name: "Step 1", value: "When you awaken naturally from a dream in the early morning, rehearse it several times until you have memorised it. "},
              { name: "Step 2", value: 'As you lay in bed, returning to sleep, say to yourself "The next time I am dreaming I will remember to recognise that Im dreaming"'},
              { name: "Step 3", value: "Imagine yourself back in the dream only this time see yourself becoming aware that you are dreaming."},
              { name: "Step 4", value: "Continue steps two and three until your have clearly set your intention or you return to sleep."},
              { name: "Source", value: "https://www.thelucidguide.com/"},
              { name: "Else", value: "Use the command ld!mildlink if you want to see the YouTube video about MILD"},
            ]
          }
        });

    }

}