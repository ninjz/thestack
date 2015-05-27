Meteor.startup(function() {

  Factory.define('item', Items, {
    name: function() { return Fake.sentence(); },
    rating: function() { return _.random(1, 5); }
  });

  if (Items.find({}).count() === 0) {

    _(10).times(function(n) {
      Factory.create('item');
    });

  }

  Factory.define('challenge', Challenge, {
    problem: function() {return Fake.sentence(); },
    code: ["Function1(list l):", "total_sum := 0"
                , "for items in list l:", "if l is divisible by 2 then"
                , "total_sum := total_sum + l"]
   });

   if(Challenge.find({}).count() === 0){
       _(1).times(function(n) {
           Factory.create('challenge');
       });
   }

});
