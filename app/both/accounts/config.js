AccountsTemplates.configureRoute('signIn', {
    redirect: function(){


        var user = Meteor.user();

        if (Roles.userIsInRole(user, ['admin','manage-users']))
          Router.go('/admin');
        else
          Router.go('/user/' + user._id);
    },
    layoutTemplate: 'appLayout'
});


AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'appLayout'});


AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "username",
      required: true,
      minLength: 5,
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid email',
  }
]);

AccountsTemplates.removeField('password');
AccountsTemplates.addField({
    _id: 'password',
    type: 'password',
    required: true,
    minLength: 6,
    // re: /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
    errStr: 'At least 1 digit, 1 lower-case and 1 upper-case',
});


// Support for playing D&D: Roll 3d6 for dexterity
// Accounts.onCreateUser(function(options, user) {
//   var d6 = function () { return Math.floor(Random.fraction() * 6) + 1; };
//   user.dexterity = d6() + d6() + d6();
//   // We still want the default hook's 'profile' behavior.
//   if (options.profile)
//     user.profile = options.profile;
//   return user;
// });
