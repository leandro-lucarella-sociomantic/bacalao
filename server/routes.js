module.exports = {
  // User:
  login: require('./controllers/user.ctrl').login,

  logout: require('./controllers/user.ctrl').logout,

  addReference: require('./controllers/user.ctrl').addReference,

  // Events:
  getEvents: require('./controllers/event.ctrl').getEvents,

  createEvent: require('./controllers/event.ctrl').createEvent,

  joinEvent: require('./controllers/event.ctrl').joinEvent,

  leaveEvent: require('./controllers/event.ctrl').leaveEvent

}
