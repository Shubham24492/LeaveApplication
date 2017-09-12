import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Leaves } from '../lib/collections';


Leaves.schema = new SimpleSchema({
  Emp_Name: {type: String},
  Emp_Email: {type: String},
  Leave_Type: {type: String},
  Reason: {type: String},
  Start_Date: {type: String},
  End_Date: {type: String},
  No_Of_Days: {type: Number, defaultValue: 0},
});

Leaves.attachSchema(Leaves.schema);

var leaveSeeds = [
    {
        Emp_Name: 'Shubham Sarwade',
        Emp_Email: 'shubham.sarwade@cctech.co.in',
        Leave_Type: 'Casual',
        Reason: 'going home',
        Start_Date: '11/09/2017',
        End_Date: '11/09/2017',
        No_Of_Days: 1,
    },
    {
        Emp_Name: 'Sumant Landges',
        Emp_Email: 'sumant.landge@cctech.co.in',
        Leave_Type: 'Casual',
        Reason: 'going home',
        Start_Date: '11/09/2017',
        End_Date: '11/09/2017',
        No_Of_Days: 1,
    },
    {
        Emp_Name: 'Nitin Tambe',
        Emp_Email: 'nitin.tambe@cctech.co.in',
        Leave_Type: 'Casual',
        Reason: 'going home',
        Start_Date: '11/09/2017',
        End_Date: '11/09/2017',
        No_Of_Days: 1,
    }
];

if(Leaves.find().count() === 0){
  _.each(leaveSeeds, function(emp){
    Leaves.insert(emp);
    console.log("Inserted ", emp.Emp_Name);
  })
}