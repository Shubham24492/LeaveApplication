Template.homeIndex.rendered = function () {
  if ( !Meteor.user() == null)  {
    Session.set('user', Meteor.user());
  }
};

Template.homeIndex.destroyed = function () {
};