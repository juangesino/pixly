Template.navBar.helpers({
  user_name: function () {
    return Meteor.user().profile.name;
  },
  profile_image: function () {
    if (Meteor.user() && Meteor.user().services.google && Meteor.user().services.google.picture) {
      return Meteor.user().services.google.picture;
    } else {
      return 'http://placehold.it/30x30';
    }
  },
  getClass: function (route_path) {
    if (route_path == Iron.Location.get().path) {
      return 'active';
    } else {
      return '';
    }
  },
  home_path: function () {
    return Router.path("home");
  },
});
