Template.applyForLeave.onCreated(function () {

});

Template.applyForLeave.rendered = function () {
};

Template.applyForLeave.destroyed = function () {
};

Template.applyForLeave.helpers({
});

Template.applyForLeave.events({
	'click #applyForLeaveBtn'(event, instance){
		var leaveType = $("#leaveTypeOption").val();
		var leaveReason = $("#leaveReason").val();
		var startDate = $("#minDate").val();
		var endDate = $("#maxDate").val();
		var noOfDays = $("#noOfDays").val();
		if(!( Meteor.user() && Meteor.user().services.google.email.split('@')[1].includes('cctech.co.in') == true ) )
		{
			return;
		}
		else
		{
			emailId = Meteor.user().services.google.email;
			empName = Meteor.user().services.google.name;
		}

		var Data = {
			"Emp_Name": empName,
			"Emp_Email": emailId,
			"Leave_Type": leaveType,
			"Reason": leaveReason,
			"Start_Date": startDate,
			"End_Date": endDate,
			"No_Of_Days": parseInt(noOfDays),
		}

		$.ajax({
			type: "POST",
			url: "http://localhost:3000/leaves",
			contentType: "application/json",
			async: false,
			data: JSON.stringify(Data),
			success: function (result) {
				//alert(result); 
				console.log(result);
			}

		});

  // Client: Asynchronously send an email.
  Meteor.call(
	  'sendEmail',
	  'shubham.sarwade@cctech.co.in',
    'shubham.sarwade@cctech.co.in',
    'Hello from Meteor!',
    'This is a test of Email.send.'
  );

	}
});
