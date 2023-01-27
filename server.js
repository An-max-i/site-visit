const {MongoClient} = 
require('mongodb');

MongoClient.connect
('mongodb://gen_user:lv60kloha3@85.193.84.182:27017/default_db?authSource=admin&directConnection=true',
function (err, db) {})