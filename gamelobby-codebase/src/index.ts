import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

// store the color of the player in the database
export const storeColor = functions.https.onRequest((request, response) => {
  const color = request.body.color;
  const uid = request.body.uid;
  admin
    .database()
    .ref("users/" + uid + "/color")
    .set(color)
    .then(() => {
      response.send("color stored");
    });
});

// get the color of the player from the database
export const getColor = functions.https.onRequest((request, response) => {
  const uid = request.body.uid;
  admin
    .database()
    .ref("users/" + uid + "/color")
    .once("value")
    .then((snapshot) => {
      response.send(snapshot.val());
    });
});

// store player profile picture in the database
export const storeProfilePicture = functions.https.onRequest(
  (request, response) => {
    const profilePicture = request.body.profilePicture;
    const uid = request.body.uid;
    admin
      .database()
      .ref("users/" + uid + "/profilePicture")
      .set(profilePicture)
      .then(() => {
        response.send("profile picture stored");
      });
  }
);

// get player profile picture from the database
export const getProfilePicture = functions.https.onRequest(
  (request, response) => {
    const uid = request.body.uid;
    admin
      .database()
      .ref("users/" + uid + "/profilePicture")
      .once("value")
      .then((snapshot) => {
        response.send(snapshot.val());
      });
  }
);
