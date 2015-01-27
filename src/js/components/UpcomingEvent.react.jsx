var EventActionCreators = require('../actions/EventActionCreators');
var React = require('react/addons');
var ReactPropTypes = React.PropTypes;
var JoinLeaveButton = require('./JoinLeaveButton.react.jsx');
var moment = require('moment');
var _ = require('underscore');


var UpcomingEvent = React.createClass({

  propTypes: {
      upcomingEvent : ReactPropTypes.shape({
        venue: ReactPropTypes.oneOfType([
          ReactPropTypes.string,
          ReactPropTypes.object
        ]),
        time: ReactPropTypes.object.isRequired,
        details: ReactPropTypes.string.isRequired
      })
  },


  render: function() {
    if(_.isObject(this.props.upcomingEvent.venue)) {
      return (
        <div className="event__upcoming-box--details__text">
          <div className="event__box--buttons">
            <JoinLeaveButton
              isUpcoming={true}
              maxAttendees={this.props.upcomingEvent.maxAttendees}
              attendees={this.props.upcomingEvent.attendees}
              _onUserLeave={this._onUserLeave}
            />
          </div>
          <div className="event__upcoming-box--venue">
            <h3 className="event__upcoming-box--venue-name">
              <a target="_blank" href={this.props.upcomingEvent.venue.url}>{this.props.upcomingEvent.venue.name}</a>
            </h3>
            <span className="event__upcoming-box--venue-address">
              {this.props.upcomingEvent.venue.formatted_address}
            </span>
            <span className="event__upcoming-box--venue-phone-number">
              {this.props.upcomingEvent.venue.international_phone_number}
            </span>
          </div>
          <div className="event__upcoming-box--time">
            {this.getTime()}
          </div>
          <div className="event__upcoming-box--details">
            {this.props.upcomingEvent.details}
          </div>
        </div>
      );
    } else {
      return (
        <div className="event__upcoming-box--details__text">
          <div className="event__upcoming-box--venue">
            <h3 className="event__upcoming-box--venue-name">
              {this.props.upcomingEvent.venue.name}
            </h3>
          </div>
          <div className="event__upcoming-box--time">
            {this.getTime()}
          </div>
          <div className="event__upcoming-box--details">
            {this.props.upcomingEvent.details}
          </div>
        </div>
      );
    }
  },

  getTime: function() {
    var time = moment(this.props.upcomingEvent.time).fromNow();
    return time;
  },

  _onUserLeave: function(event) {
    if(!this.props.upcomingEvent._id) {
      console.error('cant leave before its saved on the server')
      return;
    }
    EventActionCreators.leaveEvent(this.props.upcomingEvent._id);
  },

});

module.exports = UpcomingEvent;