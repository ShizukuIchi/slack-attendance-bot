const Date = require('../utils/date');
const { commandHandler } = require('./command')

function textHandler(user, text) {
  const t = text.toLowerCase()
  switch(t){
    case 'in':
    case 'out':
    case 'list':
      commandHandler(user, t);
      break;
    default:
      console.log(`${user} says ${text}.`)  
  }
}

module.exports = {
  textHandler,
};