var React = require('react');
var ReactPropTypes = React.PropTypes;
var _ = require('underscore');
var Event = require('./Event.react');
var AddEventButton = require('./AddEventButton.react');

require('../../sass/outline.scss');


var getEvent = function(user, event) {
  return <Event
            key={event._id || event.cid}
            user={user}
            event={event}
          />
}


var Events = React.createClass({

  propTypes: {
   events: ReactPropTypes.array.isRequired,
   user: ReactPropTypes.object.isRequired
  },

  render: function() {
    var events = _.map(this.props.events, _.partial(getEvent, this.props.user));

    return (
      <div className="events__spread">
        <div className="events__columns">
            {events}
        </div>
        <AddEventButton
          onClick={this.onAddEvent}
          isLoggedIn={this.props.user.loggedIn} />
      </div>
    );

  }

});

module.exports = Events;
