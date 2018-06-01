import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Meteor.subscribe('pixelsIndex');
Meteor.subscribe('userData');

Pixels = new Mongo.Collection("pixels");

// toastr Configuration (http://codeseven.github.io/toastr/demo.html)
toastr.options.progressBar = true;
toastr.options.positionClass = "toast-bottom-left";
