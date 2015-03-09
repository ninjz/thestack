ChallengeController = AppController.extend({
  waitOn: function() {
    return this.subscribe('challenge');
  },
  data: {
    domains: Challenge.find()
},
  onBeforeAction: function (pause) {
    AccountsTemplates.ensureSignedIn.call(this, pause);
  },
  onAfterAction: function () {
    Meta.setTitle('Challenge');
  }
});

ChallengeController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
