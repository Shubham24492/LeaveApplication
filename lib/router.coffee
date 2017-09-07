template(name='login')
  h1 Login With Google
  img(src="#{currentUser.services.google.picture}")
  if currentUser
    p #{currentUser.services.google.given_name}
    button#logout Logout
  else
    button#google-login.btn.btn-default  Login with Google


name: 'loginPage'
  waitOn: ->
    Meteor.subscribe 'myself', Meteor.userId()
  data: ->
    Meteor.users.find Meteor.user()