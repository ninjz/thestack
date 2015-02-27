AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'appLayout'});

AccountsTemplates.addField({
    _id: 'name',
    type: 'text',
    displayName: "Name",
    func: function(value){return value === 'Full Name';},
    errStr: 'Only "Full Name" allowed!',
});


// Support for playing D&D: Roll 3d6 for dexterity
Accounts.onCreateUser(function(options, user) {
  var d6 = function () { return Math.floor(Random.fraction() * 6) + 1; };
  user.dexterity = d6() + d6() + d6();
  // We still want the default hook's 'profile' behavior.
  if (options.profile)
    user.profile = options.profile;
  return user;
});
