DomainsController = AppController.extend({
  // waitOn: function() {
  //   return this.subscribe('domains');
  // },
  // data: {
  //   domains: Domains.find({})
  // },
  // onBeforeAction: function (pause) {
  //   AccountsTemplates.ensureSignedIn.call(this, pause);
  // },
  // onAfterAction: function () {
  //   Meta.setTitle('Domains');
  // }
});

DashboardController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
