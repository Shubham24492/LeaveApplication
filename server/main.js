import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Leaves, Employees } from '../lib/collections';

Meteor.startup(() => {
  // code to run on server at startup
 console.log('Meteor Server started');
// if (Employees.find().count() !== 0) 
// {
//   Employees.forEach((e) => {
//      Employees.remove(e);
//    });
// }
//Employees.remove({});

// Employees.schema = new SimpleSchema({
//   Emp_Name: {type: String},
//   Emp_Email: {type: String},
//   Image_URL: {type: String}
// });

// Employees.attachSchema(Employees.schema);

// if (Employees.find().count() !== 0) 
// {
//   for(e in Employees){
//      Employees.remove(e);
//    };
// }

//   var Employees2 = [
//     {
//       Emp_Name : 'Shubham Sarwade',
//       Emp_Email: 'shubham.sarwade@cctech.co.in',
//       Image_URL: 'https://lh4.googleusercontent.com/-bWx2NucQh7k/AAAAAAAAAAI/AAAAAAAAABc/BG0lLSCUm5c/s96-c/photo.jpg'
//     },
//     {
//       Emp_Name : 'Sumant Landge',
//       Emp_Email: 'sumant.landge@cctech.co.in',
//       Image_URL: 'https://lh4.googleusercontent.com/-bWx2NucQh7k/AAAAAAAAAAI/AAAAAAAAABc/BG0lLSCUm5c/s96-c/photo.jpg'
//     },
//     {
//       Emp_Name : 'Nitin Tambe',
//       Emp_Email: 'nitin.tambe@cctech.co.in',
//       Image_URL: 'https://lh4.googleusercontent.com/-bWx2NucQh7k/AAAAAAAAAAI/AAAAAAAAABc/BG0lLSCUm5c/s96-c/photo.jpg'
//     }
//   ];

//   Employees2.forEach((e) => {
//     Employees.insert(e);
//   });

//   // const Leaves = [
//   //   {
//   //     Emp_Email: 'shubham.sarwade@cctech.co.in',
//   //   },
//   //   {
//   //     Emp_Email: 'sumant.landge@cctech.co.in',
//   //   },
//   //   {
//   //     Emp_Email: 'nitin.tambe@cctech.co.in',
//   //   }
//   // ];

//   // Leaves.forEach((chat) => {
//   //   const Leaves = Leaves.findOne({ chatId: { $exists: false } });
//   //   chat.lastMessage = message;
//   //   const chatId = Chats.insert(chat);
//   //   Messages.update(message._id, { $set: { chatId } });
//   // });

});
