Router.route('/', {
  name: 'home'
});

Router.route('/dashboard');
Router.route('/domains', function(){
    this.render('domains');
});
// Router.route('/challenge',{
//     name: 'challenge',
//     controller: 'ChallengeController'
// });

Router.route('/challenge/:_id',{
    name: 'challenge.show',
    controller: 'ChallengeController'
});

// we want to be sure that the user is logging in
// for all routes but login
// Router.onBeforeAction(function () {
//     if ()
// });
