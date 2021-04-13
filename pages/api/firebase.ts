// firestore

import admin from "firebase-admin";

let fireStoreDatabase: FirebaseFirestore.Firestore;

const firebaseInitDatabase = () => {
  try {
    const firebaseConfig = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

    admin.initializeApp({
      credential: admin.credential.cert(firebaseConfig),
      databaseURL: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
    });

    fireStoreDatabase = admin.firestore();
  } catch (error) {
    if (error.errorInfo.code === "app/duplicate-app") {
      fireStoreDatabase = admin.firestore();
    } else {
      // console.error("Firebase admin initialization errror", error, error.stack);
    }
  }
};

export const firebaseGetFirebase = () => {
  if (!fireStoreDatabase) {
    firebaseInitDatabase();
  }
  return fireStoreDatabase;
};

const colName = () => {
  return `${process.env.STAGE}`;
};

const wordListRef = (db: FirebaseFirestore.Firestore) => {
  const stage = `${process.env.STAGE}`;
  return db.collection(stage).doc("wordlist");
};

export const firebaseGetWordList = async (db: FirebaseFirestore.Firestore) => {
  const doc = await wordListRef(db).get();
  const data = doc.data();
  return data;
};

export const firebaseAddWord = async (
  db: FirebaseFirestore.Firestore,
  word: string
) => {
  try {
    const ref = wordListRef(db);
    const update = {};
    const increment = admin.firestore.FieldValue.increment(1);
    update[word] = increment;
    console.log(update);
    const res = ref.update(update);

    // await db.runTransaction(async (t) => {
    //   //https://firebase.google.com/docs/firestore/manage-data/transactions
    //   const doc = await t.get(wordListRef);
    // });
  } catch (err) {
    console.error(err);
  }
};
