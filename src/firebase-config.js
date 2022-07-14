/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyA0B2NexwAFtml_nawRCNmGel-dBPeG3bQ",
  authDomain: "todo-list-3aa9c.firebaseapp.com",
  projectId: "todo-list-3aa9c",
  storageBucket: "todo-list-3aa9c.appspot.com",
  messagingSenderId: "992223448041",
  appId: "1:992223448041:web:3f6263fb97fa7cd14c5978",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
