// Define the template for Iron Router.
Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

// Create the index route.
Router.map(function() {
  this.route('home', {
    path: '/',
    to: 'main',
    name: 'home',
    template: 'home',
    loadingTemplate: 'loading',
    waitOn: function () {
      return Meteor.subscribe('pixelsIndex');
    },
    onBeforeAction: function () {
      if (!Meteor.userId()) {
        return this.redirect('/login');
      }
      this.next();
    }
  });
  this.route('sign_in', {
    path: '/login',
    to: 'main',
    layoutTemplate: "MainLayout",
    onBeforeAction: function () {
      this.next();
    }
  });

  this.route('signOut', {
    path: '/logout',
    onBeforeAction: function () {
      Meteor.logout();
      return this.redirect('/login');
    }
  });
});
