
function sendMessage(channel, text) {
  fetch(channel, {
    method: 'POST',
    body: JSON.stringify({
      text
    })
  })
}

module.exports = {
  sendMessage
}