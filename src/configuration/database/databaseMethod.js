import React from "react";
import app from "./databaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useDispatch } from "react-redux";

const database = getDatabase();

const auth = getAuth(app);

const signUp = (userObj) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, userObj.email, userObj.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        saveData("users", userObj, user.uid).then(() => {
          resolve("User Created Successfully");
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..

        reject(errorMessage);
      });
  });
};

const saveData = (nodemName, userObj, uid) => {
  userObj.id = uid;
  set(ref(database, `${nodemName}/${uid}`), userObj);
};

const getData = (nodemName, uid) => {
  const starCountRef = ref(database, `${nodemName}/${uid}`);

  return new Promise((resolve, reject) => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      resolve(data);
    });
  });
};

const login = (userObj) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, userObj.email, userObj.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        getData("users", user.uid)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(errorMessage);
      });
  });
};

export { signUp, saveData, login };
