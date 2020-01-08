# Zoomer

Zoomer is a very simple discord bot that allows me to easily create a [Zoom](https://zoom.us) instant meeting. Upon creation, it returns

  - The meeting ID
  - The meeting join & start links
  - The dial-in phone numbers

### Installation

Zoomer was developed using [Node.js](https://nodejs.org/) v10.15.0.

Install the dependencies

```sh
$ cd Zoomer
$ npm install
```

In order for the bot to work, you need 3 things. 
  - Discord "Build-A-Bot" Token
  - Zoom JWT token
  - Zoom User ID (account email address also works)

Then, create a .env file that contains the following, filling in the details mentioned above:
```sh
DISCORD_TOKEN=
ZOOM_JWT=
USER_ID=
```

To run the bot, simply do the following
```sh
$ node zoomer
```

In discord, to create a new meeting simply do the following in a channel that the bot is in:
```sh
/new
```
