const admin = require('firebase-admin');

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
