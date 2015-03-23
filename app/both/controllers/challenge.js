ChallengeController = AppController.extend({
  layoutTemplate: 'appLayout',
  template: 'challenge',

  waitOn: function() {
    return this.subscribe('challenge', this.params._id);
  },
  data: function() {
    return { challenge: Challenge.find({ _id: this.params._id}),
             allChallenges: Challenge.find({}),}  
    // challenge : Challenge.find({ domain: 'Sorting'}),
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
