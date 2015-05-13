Meteor.publishComposite("challenge", function() {
  return {
    find: function() {
      return Challenge.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(challenge) {
    //       return Challenge.find(challenge.id);
    //     }
    //   }
    // ]
    
  }
});
