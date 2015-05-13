Domains = new Mongo.Collection('domains');

Domains.helpers({

});

Domains.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
