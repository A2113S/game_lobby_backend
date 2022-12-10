const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

// export const helloWorld = functions.https.onRequest((request, response) => {
//   response.set("Access-Control-Allow-Origin", "http://localhost:3000");
//   response.set("Access-Control-Allow-Methods", "GET");
//   response.send("Hello from Firebase!");
// });

// get the color of the player from the database in collection users
exports.getColor = functions.https.onRequest((request: any, response: any) => {
  // get the uid from the param query
  // for example, if function url is https://us-central1-aethergamelobby.cloudfunctions.net/getColor
  // then the url will be https://us-central1-aethergamelobby.cloudfunctions.net/getColor?uid=123456789

  const uid = request.query.uid;
  admin
    .firestore()
    .collection("users")
    .doc(uid)
    .get()
    .then((snapshot: any) => {
      response.set("Access-Control-Allow-Origin", "http://localhost:3000");
      // we want to PUT the color in the database
      response.set("Access-Control-Allow-Methods", "GET");
      response.send(snapshot.data().color);
    });
});

// get all the colors of the players from the database in collection users
exports.getAllColors = functions.https.onRequest(
  (request: any, response: any) => {
    admin
      .firestore()
      .collection("users")
      .get()
      .then((snapshot: any) => {
        response.set("Access-Control-Allow-Origin", "http://localhost:3000");
        // we want to PUT the color in the database
        response.set("Access-Control-Allow-Methods", "GET");
        response.send(snapshot.docs.map((doc: any) => doc.data().color));
      });
  }
);

// store the color of the player in the database in collection users
exports.storeColor = functions.https.onRequest(
  (request: any, response: any) => {
    const color = request.query.color;
    const uid = request.query.uid;

    admin
      .firestore()
      .collection("users")
      .doc(uid)
      .update({
        color: color,
      })
      .then(() => {
        response.set("Access-Control-Allow-Origin", "http://localhost:3000");
        response.set("Access-Control-Allow-Methods", "POST, GET");
        response.send("color stored");
      });
  }
);

// reset colors of all players in the database in collection users
exports.resetColors = functions.https.onRequest(
  (request: any, response: any) => {
    admin
      .firestore()
      .collection("users")
      .get()
      .then((snapshot: any) => {
        snapshot.docs.forEach((doc: any) => {
          doc.ref.update({
            color: "",
          });
        });
      })
      .then(() => {
        response.set("Access-Control-Allow-Origin", "http://localhost:3000");
        response.set("Access-Control-Allow-Methods", "POST, GET");
        response.send("colors reset");
      });
  }
);
