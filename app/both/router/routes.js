Router.route('/', {
  name: 'home'
});

Router.route('/dashboard');
Router.route('/domains', function(){
    this.render('domains');
});
Router.route('/challenge', function() {
    this.render('challenge');
});
