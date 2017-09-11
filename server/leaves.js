import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Leaves } from '../lib/collections';


Leaves.schema = new SimpleSchema({
  Emp_Name: {type: String},
  Emp_Email: {type: String},
  Leave_Type: {type: String},
  Reason: {type: String},
  Start_Date: {type: Date},
  End_Date: {type: Date},
  No_Of_Days: {type: Number, defaultValue: 0},
});

Leaves.attachSchema(Leaves.schema);

var leaveSeeds = [
    {
        Emp_Name: 'Shubham Sarwade',
        Emp_Email: 'shubham.sarwade@cctech.co.in',
        Leave_Type: 'Casual',
        Reason: {type: String},
        Start_Date: {type: Date},
        End_Date: {type: Date},
        No_Of_Days: {type: Number, defaultValue: 0},
    },
    {
      Emp_Name : 'Sumant Landge',
      Emp_Email: 'sumant.landge@cctech.co.in',
      Image_URL: 'https://lh4.googleusercontent.com/-bWx2NucQh7k/AAAAAAAAAAI/AAAAAAAAABc/BG0lLSCUm5c/s96-c/photo.jpg'
    },
    {
      Emp_Name : 'Nitin Tambe',
      Emp_Email: 'nitin.tambe@cctech.co.in',
      Image_URL: 'https://lh4.googleusercontent.com/-bWx2NucQh7k/AAAAAAAAAAI/AAAAAAAAABc/BG0lLSCUm5c/s96-c/photo.jpg'
    },
//   {
//     "sku" : "your-own-crater",
//     "name" : "Your Very Own Crater",
//     "image" : "your-own-crater.jpg",
//     "summary" : "Buy one for yourself or the one you love! Nothing says 'you're truly special' like a huge hole in the ground",
//     "description": "The Martian surface is scarred by huge numbers of craters - but we like to think of these gigantic holes as 'scars of love' - so say I love you by buying your very own! Whether it's a personal vanity treat or for that very special someone, a Martian crater shows just how *deep* you really are.",
//     "price" : 9999900,
//     "inventory" : 0,
//     "status" : "published",
//     "published_at" : new Date(),
//     "cost" : 45532,
//     "vendor" : {
//       "id" : 2,
//       "slug" : "red-planet",
//       "name" : "Red Planet Love Machine"
//     }
  //}
];

if(Leaves.find().count() === 0){
  _.each(leaveSeeds, function(emp){
    Leaves.insert(emp);
    console.log("Inserted ", emp.Emp_Name);
  })
}