import { Meteor } from 'meteor/meteor';

Pixels = new Mongo.Collection("pixels");

Meteor.publish('pixelsIndex', function(){
  return Pixels.find({userId: this.userId });
});

Meteor.publish("userData", function () {
    return Meteor.users.find({_id: this.userId});
});

Meteor.methods({

});
