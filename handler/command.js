const moment = require('moment')
const { selectLastTypeAndTime, selectRecords, insertTypeIn, insertTypeOut } = require('../db/client');
const { sendMessage } = require('../utils/messageSender')

async function commandHandler(user, command) {
  const record = await selectLastTypeAndTime(user);
  if (record.length === 0) {
    if (command === 'in') {
      await insertTypeIn(user)
      sendMessage(process.env.CHANNEL_URL, 'ined')
    } else {
      sendMessage(process.env.CHANNEL_URL, 'you can type in first')
    }
  }
  switch(command) {
    case 'in':
      if (record[0].type !== 'in') {
        await insertTypeIn(user);
        sendMessage(process.env.CHANNEL_URL, 'ined')
      } else {
        sendMessage(process.env.CHANNEL_URL, 'already in')
      }
      break;
    case 'out':
      if (record[0].type !== 'out') {
        await insertTypeOut(user);
        sendMessage(process.env.CHANNEL_URL, 'outed')
      } else {
        sendMessage(process.env.CHANNEL_URL, 'already out')
      } 
      break;
    case 'list':
      const records = await selectRecords(user)
      const response = records
        .map(r => `type: ${r.type} time: ${moment(r.timestamp).format()}`)
        .reduce((pre, cur) => cur + '\n' + pre);
      sendMessage(process.env.CHANNEL_URL, response)
      break;
    default:
      console.log(`command '${command}' not found`)
  }
}

module.exports = {
  commandHandler
}