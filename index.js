const http = require('http')
const fetch = require('isomorphic-fetch')

const createSlackEventAdapter = require('@slack/events-api').createSlackEventAdapter;
const slackEvents = createSlackEventAdapter('');  // token
const channelUrl = ''; // channel you want to send message to
const port = process.env.PORT || 3000;

// Initialize an Express application
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// You must use a body parser for JSON before mounting the adapter
app.use(bodyParser.json());

// Mount the event handler on a route
// NOTE: you must mount to a path that matches the Request URL that was configured earlier
app.use('/slack/events', slackEvents.expressMiddleware());

// Attach listeners to events by Slack Event "type". See: https://api.slack.com/events/message.im
Date.prototype.hm = function() {
  const h = this.getHours()
  const m = this.getMinutes()
  return `${h}:${m}`
};

slackEvents.on('message', (event)=> {
  console.log(`Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`);
  let text = ''
  const date = new Date()
  if (event.text.toLowerCase() === 'in') {
    text = `change state to up at ${date.hm()}.`
  } else if (event.text.toLowerCase() === 'out') {
    text = `change state to down at ${date.hm()}.`
  }
  if (text.length) {
    fetch(channelUrl, {
      method: 'POST',
      body: JSON.stringify({
        text
      })
    })
  }
});

// Handle errors (see `errorCodes` export)
slackEvents.on('error', console.error);

// Start the express application
http.createServer(app).listen(port, () => {
  console.log(`server listening on port ${port}`);
});

