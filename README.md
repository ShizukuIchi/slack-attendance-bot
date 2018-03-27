Slack Attendace Bot
===
## Start
1. create slack app
2. enable `Incoming Webhooks` and `Event Subscriptions` for the app (`Request URL` is `mydomain/slack/events`)
3. subscribe to Event `message.im` events
4. set `channelUrl` variable from `Webhook URL` section in `Incoming Webhooks`
5. set token for the server
6. start server and install slack app from slack api website

To start server:
```
node index.js
```
## Usage
Send message to bot with:
* `in`  
  the bot will send a message to the specific channel url with text `change state to up at` *`hhmm`*.

* `out`  
  the bot will send a message to the specific channel url with text `change state to down at` *`hhmm`*.

Changing the channel url by replacing the `channelUrl` variable.
