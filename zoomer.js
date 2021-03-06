require('dotenv').config();
const Discord = require('discord.js');
const request = require("request");

const bot = new Discord.Client();
const baseURL = 'https://api.zoom.us/v2/'

// Connect to the bot
bot.login(process.env.DISCORD_TOKEN);
bot.on('ready', () => console.info(`Logged in as ${bot.user.tag}!`))

// Listen for messages
bot.on('message', msg => {
    if (msg.content === 'ping') 
        msg.channel.send('pong');
    if (msg.content.includes('/new')) 
        createMeeting(msg)
});

// Creates a new zoom meeting
const createMeeting = msg => {
    let options = {
        method: 'POST',
        url: `${baseURL}/users/${process.env.USER_ID}/meetings`,
        headers: {authorization: `Bearer ${process.env.ZOOM_JWT}`},
        json: {
            topic: msg.content.split("/new")[1],
            type: 1,
            settings: {
                host_video: false,
                participant_video: false,
                global_dial_in_countries: ["US"],
            }
        }
    };

    request(options, (err, resp, body) => {
        if(err){
            console.log(err)
            msg.channel.send(`An error has occured. Check the console for more info`)
        }
        else 
            if (body.code === 1001 || body.code === 124)
                msg.channel.send(`Zoom Error: ${body.message}`)
            else 
                msg.channel.send(`
                > **Meeting ID:** ${body.id}
                > **Join Link:** <${body.join_url}>
                > **Start Link:** <${body.start_url}>
                > **Phone Numbers:** ${body.settings.global_dial_in_numbers.map(n => n.number).join(', ')}`)
    })
}