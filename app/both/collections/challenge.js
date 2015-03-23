Challenge = new Mongo.Collection('challenge');

Challenge.helpers({

});

Challenge.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
