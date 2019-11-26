const admin = require('firebase-admin');

process.env.GOOGLE_APPLICATION_CREDENTIALS = './key.json';

const adminInitializer = {
  initialize() {
    if (this.admin) {
      return this.admin
    }
    this.admin = admin.initializeApp({
      databaseURL: "https://lab-project-aa6c1.firebaseio.com",
      projectId: "lab-project-aa6c1",
      storageBucket: "lab-project-aa6c1.appspot.com",
    });
    return this.admin;
  }
};

module.exports = adminInitializer;
