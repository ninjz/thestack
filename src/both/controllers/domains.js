DomainsController = AppController.extend({
  waitOn: function() {
    return this.subscribe('challenge');
  },
  data: {
    sorting: Challenge.find({ domain: 'Sorting'}),

  },
  onBeforeAction: function (pause) {
    AccountsTemplates.ensureSignedIn.call(this, pause);
  },
  onAfterAction: function () {
    Meta.setTitle('Domains');
  }
});

DashboardController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
