Meteor.startup(function() {

    var user = Meteor.users.findOne({'emails.address':"s@gmail.com"});
    console.log(user);


    user = {name:'admin', username:'admin', email:'theadmin@thestack.com', roles:['admin']};

    var created = Meteor.users.findOne({'username': 'admin'});
    console.log(created);

    if(!created){
        console.log('creating admin user..');
        var id;

        id = Accounts.createUser({
            username: user.username,
            email: user.email,
            password: "password",
            profile: { name: user.name }
        });

        Roles.addUsersToRoles(id, user.roles);
    }


});
