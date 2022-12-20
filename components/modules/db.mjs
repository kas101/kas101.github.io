import {app} from './auth.mjs'
const {
    BSON: { ObjectId },
  } = Realm;

const mongo = app.currentUser.mongoClient('mongodb-atlas');
const products= mongo.db("maizesunfeed").collection('products');

export{mongo,products};
