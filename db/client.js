const moment = require('moment')
const pg = require('knex')({
  client: 'pg',
  connection: process.env.DB_URL,
});

const insertTypeIn = (user) => (
  pg('Attendance')
    .withSchema('public')
    .insert({
      timestamp: moment().format(),
      type: 'in',
      user
    })
);
const insertTypeOut = (user) => (
  pg('Attendance')
    .withSchema('public')
    .insert({
      timestamp: moment().format(),
      type: 'out',
      user
    })
);
const selectLastTypeAndTime = (user) => (
  pg.withSchema('public')
    .select('type', 'timestamp')
    .from('Attendance')
    .where('user', user)
    .orderBy('timestamp', 'desc')
    .limit(1)
)
const selectRecords = (user) => (
  pg.withSchema('public')
    .select('type', 'timestamp')
    .from('Attendance')
    .where('user', user)
)

module.exports = {
  insertTypeIn,
  insertTypeOut,
  selectLastTypeAndTime,
  selectRecords,
};