Clicks = new Mongo.Collection("clicks");
if (Meteor.isClient) {

  // counter starts at 0

  Template.hello.helpers({
    counter: function () {
      return Clicks.find({}).fetch();
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Clicks.insert({event: "My Event"});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
