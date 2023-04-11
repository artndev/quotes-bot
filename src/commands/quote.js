const { SlashCommandBuilder } = require('discord.js');
const { 
    QUOTABLE_RANDOM_API_URL, 
    QUOTABLE_MAIN_API_URL 
} = require('../../config.json')

const { getData } = require('../utils.js')
const { qEmbed } = require('../embeds.js')
const { qRow } = require('../buttons.js')


module.exports = {
	data: new SlashCommandBuilder()
		.setName('q')
		.setDescription('Random quote'),
	async execute(msg) {
        getData(QUOTABLE_RANDOM_API_URL)
            .then(async (json) => {
                await msg.reply({ 
                    embeds: [qEmbed(
                        json["author"], 
                        json["content"],
                        json["tags"]
                    )],
                    components: [ 
                        qRow(QUOTABLE_MAIN_API_URL + json["_id"]) 
                    ],
                });
            })
            .catch(err => { throw err })
            .finally(console.log("The quote was created!"));
	},
};