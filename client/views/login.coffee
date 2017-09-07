Template.login.events
  'click #google-login': (e)->
    console.log('clicked google login')
    Meteor.loginWithGoogle {}, (err) ->
      if err
        throw new (Meteor.Error)('Google login failed')
      return
    return
  'click #logout': (e) ->
    Meteor.logout (err) ->
      if err
        throw new (Meteor.Error)('Logout failed')
      return
    return