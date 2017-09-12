var DBDataListReact = new ReactiveVar();
Template.viewYourLeaves.rendered = function () {

};

Template.viewYourLeaves.onCreated(function () {

    Tracker.autorun(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/leaves",
        contentType: "application/json",
        async: false,
        success: function (result) {
           var leaveDetailsList = [];
            var Data = result;
            if(Data != undefined)
            for (var i = 0; i < Data.length; i++) {
                leaveDetailsList.push({
                    leaveType: Data[i]["Leave_Type"],
                    fromTime: Data[i]["Start_Date"],
                    toTime: Data[i]["End_Date"],
                    noOfDays:Data[i]["No_Of_Days"],
                    leaveReason:Data[i]["Reason"],
                    leaveID:Data[i]["_id"]
                });
            }
            DBDataListReact.set(leaveDetailsList);
            console.log(DBDataListReact);
        }
    })
});
});

Template.viewYourLeaves.helpers({
    'DBDataList': function () {
        var data = DBDataListReact.get();
        if (data) {
            if(data.length > 0)
            return data;
        }
    }
});

Template.leavedetails.events({
});

Template.leavedetails.helpers({
    'leaveType': function () {
        var data = Template.currentData();
        return data.leaveType;
    },
    'fromTime': function () {
        var data = Template.currentData();
        return data.fromTime;
    },
    'toTime': function () {
        var data = Template.currentData();
        return data.toTime;
    },    
    'noOfDays': function () {
        var data = Template.currentData();
        return data.noOfDays;
    },
    'leaveReason': function () {
        var data = Template.currentData();
        return data.leaveReason;       
    },
    'leaveID': function () {
        var data = Template.currentData();
        return data.leaveID;    
    }
});



