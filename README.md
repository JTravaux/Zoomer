# Zoomer

Zoomer is a very simple discord bot that allows me to easily create a [Zoom](https://zoom.us) instant meeting. 

Upon creation, it returns:

  - The meeting ID
  - The meeting join & start links
  - The dial-in phone numbers

### Installation

Zoomer was developed using [Node.js](https://nodejs.org/) v10.15.0.

Install the dependencies:

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

Start the bot, like you would any Node app:
```sh
$ node zoomer
```

Discord command interface:
  - new [topic]: Creates a meeting, optionally include a topic (defaults to "Zoom Meeting")

```sh
/new 
/new Software Discussion
```