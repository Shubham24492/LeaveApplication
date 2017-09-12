import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Leaves, Employees } from '../lib/collections';

if(Meteor.isServer) {
   // When Meteor starts, create new collection in Mongo if not exists.
    Meteor.startup(function () {
        //User = new Meteor.Collection('user');
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
    });

// GET /user - returns every message from MongoDB collection.

Router.route('/leaves',{where: 'server'})
    .get(function(){
        var response = Leaves.find(/*{'Emp_Email':"shubham.sarwade@cctech.co.in"}*/).fetch();
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
    })

  // POST /message - {message as post data}
  // Add new message in MongoDB collection.

    .post(function(){
        var response;
        if(this.request.body.Emp_Name === undefined || this.request.body.Leave_Type === undefined || this.request.body.Reason === undefined ||
           this.request.body.Start_Date === undefined || this.request.body.End_Date === undefined || this.request.body.No_Of_Days === undefined ) {
            response = {
                "error" : true,
                "message" : "invalid data"
            };
        } 
        else
        {
            const leave = {
                Emp_Name: this.request.body.Emp_Name,
                Emp_Email: 'shubham.sarwade@cctech.co.in',
                Leave_Type: 'Casual',
                Reason: 'going home',
                Start_Date: '11/09/2017',
                End_Date: '11/09/2017',
                No_Of_Days: 1,
            };
            
            Leaves.schema.validate(leave);

            Leaves.insert({
                UserName : this.request.body.userName,
                UserPassword : this.request.body.userPassword
            });
            response = {
                "error" : false,
                "message" : "User added."
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
    });

Router.route('/users/:id',{where: 'server'})

    // GET /message/:id - returns specific records

    .get(function(){
        var response;
        if(this.params.id !== undefined) {
            var data = User.find({_id : this.params.id}).fetch();
            if(data.length > 0) {
                response = data
            } else {
                response = {
                    "error" : true,
                    "message" : "User not found."
                }
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
    })

    // PUT /message/:id {message as put data}- update specific records.

    .put(function(){
        var response;
        if(this.params.id !== undefined) {
            var data = User.find({_id : this.params.id}).fetch();
            if(data.length > 0) {
                if(User.update({_id : data[0]._id},{$set : {UserName : this.request.body.userName,UserPassword : this.request.body.userPassword}}) === 1) {
                    response = {
                        "error" : false,
                        "message" : "User information updated."
                    }
                } else {
                    response = {
                        "error" : true,
                        "message" : "User information not updated."
                    }
                }
            } else {
                response = {
                    "error" : true,
                    "message" : "User not found."
                }
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
    })

    // DELETE /message/:id delete specific record.

    .delete(function(){
        var response;
        if(this.params.id !== undefined) {
            var data = User.find({_id : this.params.id}).fetch();
            if(data.length >  0) {
                if(User.remove(data[0]._id) === 1) {
                    response = {
                        "error" : false,
                        "message" : "User deleted."
                    }
                } else {
                    response = {
                        "error" : true,
                        "message" : "User not deleted."
                    }
                }
            } else {
                response = {
                    "error" : true,
                    "message" : "User not found."
                }
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
    });
  }


Meteor.methods({
  insertLeave() {
      return "hi,,,,,,,";
    },
    getAllLeaves() {
      return "hi,,,,,,,";
    },
    updateLeave() {
      return "hi,,,,,,,";
    },
    deleteLeave() {
      return "hi,,,,,,,";
    },
});