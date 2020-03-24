import tmi from 'tmi.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new tmi.Client({
    identity: {
        username: process.env.BOT_USERNAME,
        password: process.env.BOT_OAUTH
    },
    channels: [
        'Thef_TV'
    ]
});

client.on('message', (channel, userstate, message, self) => {
    if (self) {
        return;
    }

    if (message === "!dice") {
        client.say(channel, "You rolled: " + Math.floor((Math.random() * 6) + 1));
    }

});

client.on('connected', () => {
    console.log('Connected');
});

client.connect();
