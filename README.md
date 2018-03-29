Slack Attendace Bot
===
## Start
1. Create slack app
2. Enable `Incoming Webhooks` and `Event Subscriptions` for the app (`Request URL` is `mydomain/slack/events`)
3. Subscribe to `message.channels` events in `Event Subscriptions`
4. Set `CHANNEL_URL` from `Webhook URL` in `Incoming Webhooks`
5. Set `TOKEN`, `DB_URL`, `CHANNEL_ID` (receive messages from) 
6. Start server and install slack app from slack api website

To start server:
```
node index.js
```
## Usage
Send message to bot with:
* `in`  
  Save a `in` record with timestamp

* `out`  
  Save a `out` record with timestamp

* `list`  
  List all records for you
