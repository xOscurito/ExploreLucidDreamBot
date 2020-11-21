module.exports = {
    name: 'sleepp',
    description: "send sleep paralysis info",
    execute(message, args){

        message.channel.send({embed: {
            color: 0x9609e1,
            title: "Sleep Paralysis",
            fields: [
              { name: "What is Sleep Paralysis?", value: "Sleep paralysis(SP) is a feeling of being conscious but unable to move. It occurs when a person passes between stages of wakefulness and sleep. During these transitions, you may be unable to move or speak for a few seconds up to a few minutes. Some people may also feel pressure or a sense of choking."},
              { name: "Do you Need SP for Lucid Dreaming?", value: 'No. There is only some technique that use or have high risk of causing sleep paralysis.\nThis techniques are WILD or similar and you should avoid them if you are afraid of having sleep paralysis.'},
              { name: "Using Sleep paralysis for Lucid Dreaming", value: "SPILD (Sleep Paralysis Induced Lucid Dream) is a technique that exploits sleep paralysis for entering a lucid dream.\nIf you want more information about SPILD use the command ld!spild."},
              { name: "YT Videos", value: "[Sleep paralysis playlist](https://www.youtube.com/watch?v=fnFRHaKVDKg&list=PLcMceWkJeB2N_EDZb0UwtDuTcwRoqin2b&ab_channel=ExploreLucidDreaming)"},
            ]
          }
        });

    }
}