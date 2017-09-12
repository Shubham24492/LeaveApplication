import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
//   Todos = new Mongo.Collection('todos');

//   // This line is changing an in-memory Minimongo data structure
// Todos.insert({_id: 'my-todo'});
// // And this line is querying it
// const todo = Todos.findOne({_id: 'my-todo'});
// // So this happens right away!
// console.log(todo);

// Tracker.autorun(function () {
//     Meteor.call('getName', (err, name) => {
//       console.log(name);
//     });
// });
// });

// Template.hello.helpers({
  
//   // counter() {},
//     //return Template.instance().counter.get();
// onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//   console.log('Name: ' + profile.getName());
//   console.log('Image URL: ' + profile.getImageUrl());
//   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
