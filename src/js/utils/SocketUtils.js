var socketio = require('socket.io-client');
var Constants = require('../constants/Constants');
var EventServerActionCreators = require('../actions/EventServerActionCreators');
var UserStore = require('../stores/UserStore');

var _socket;

var SocketUtils = {
  init: function() {
    _socket = socketio();

    if(UserStore.isLoggedIn()) {
      //TODO join room
    }

    _socket.on(Constants.ActionTypes.CREATED_EVENT, function(data) {
      EventServerActionCreators.createdEvent(data);
    });


    _socket.on(Constants.ActionTypes.JOINED_EVENT, function(user) {
      EventServerActionCreators.joinedEvent(user);
    });

    _socket.on(Constants.ActionTypes.LEFT_EVENT, function(event) {
      EventServerActionCreators.leftEvent(event);
    });

  }
};

module.exports = SocketUtils;
