import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Leaves, Employees } from '../lib/collections';

/**
 * var Employees2 = [
    {
      Emp_Name : 'Shubham Sarwade',
      Emp_Email: 'shubham.sarwade@cctech.co.in',
      Image_URL: 'https://lh4.googleusercontent.com/-bWx2NucQh7k/AAAAAAAAAAI/AAAAAAAAABc/BG0lLSCUm5c/s96-c/photo.jpg'
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
    }
  ];
 * 
 */

Employees.schema = new SimpleSchema({
  Emp_Name: {type: String},
  Emp_Email: {type: String},
  Image_URL: {type: String}
});

Employees.attachSchema(Employees.schema);

var employeeSeeds = [
  {
      Emp_Name : 'Shubham Sarwade',
      Emp_Email: 'shubham.sarwade@cctech.co.in',
      Image_URL: 'https://lh4.googleusercontent.com/-bWx2NucQh7k/AAAAAAAAAAI/AAAAAAAAABc/BG0lLSCUm5c/s96-c/photo.jpg'
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
];

if(Employees.find().count() === 0){
  _.each(employeeSeeds, function(emp){
    Employees.insert(emp);
    console.log("Inserted ", emp.Emp_Name);
  })
}

if(Meteor.users.find().count() === 0){
  var id = Accounts.createUser({
    username : "Administrator",
    email: "admin@test.com",
    password: "admin123",
    profile: { name: "Big Admin" },
    roles : []
  });

  Roles.addUsersToRoles(id, ["Administrator"]);
  console.log("Added Admin user...");
}