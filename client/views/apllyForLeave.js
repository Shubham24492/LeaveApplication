Template.applyForLeave.onCreated(function () {

});

Template.applyForLeave.rendered = function () {            
             

    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please supply your last name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    phone: {
                        country: 'India',
                        message: 'Please supply a vaild phone number with area code'
                    }
                }
            },
            Start: {
                validators: {
                    notEmpty: {
                        message: 'This field can not be empty'
                    },
                   date: {
                        format:'DD/MM/YYYY',
                        message: 'The format is dd/mm/yyyy' 
                   }
                }
            }, 
            End: {
                validators: {
                    notEmpty: {
                        message: 'This field can not be empty'
                    },
                  date: {
                        format:'DD/MM/YYYY',
                        message: 'The format is dd/mm/yyyy' 
                   }
                }
            },   
            address: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please supply your street address'
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Please supply your city'
                    }
                }
            },
            Manager: {
                validators: {
                    notEmpty: {
                        message: 'Please select your Manager'
                    }
                }
            },
             Leave: {
                validators: {
                    notEmpty: {
                        message: 'Please select Leave Type'
                    }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your zip code'
                    },
                    zipCode: {
                        country: 'US',
                        message: 'Please supply a vaild zip code'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please Provide Reason'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });

	$('#datetimepicker5').datepicker({
       
    });
     $('#datetimepicker6').datepicker({
       
	});
	

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
