import { VercelRequest, VercelResponse } from "@vercel/node";
import {
  firebaseAddWord,
  firebaseGetFirebase,
  firebaseGetWordList,
} from "./firebase";

const wish = async (req: VercelRequest, res: VercelResponse) => {
  try {
    switch (req.method) {
      case "POST":
        await postWish(req, res);
        break;

      case "GET":
        await getWish(req, res);
        break;
      default:
        res.status(404).send(null);
    }
  } catch (err) {
    res.send(`Error: ${err}`);
  }
};

const postWish = async (req: VercelRequest, res: VercelResponse) => {
  const payload = req.body;
  if (payload) {
    const wish = payload.wish;
    const words = wish.split(/ +/);
    const db = firebaseGetFirebase();
    words.forEach(async (w) => {
      await firebaseAddWord(db, w);
    });
    res.send("ok");
  } else {
    res.status(400).send("");
  }
};

const getWish = async (req: VercelRequest, res: VercelResponse) => {
  const db = firebaseGetFirebase();
  const data = await firebaseGetWordList(db);
  res.json(data);
};

const getWish_ = async (req: VercelRequest, res: VercelResponse) => {
  const db = firebaseGetFirebase();
  const snapshot = await db.collection("PROD/d/wish").get();
  const data = [];
  snapshot.forEach((doc) => {
    data.push(doc.data());
  });
  res.json(data);
};

export default wish;
