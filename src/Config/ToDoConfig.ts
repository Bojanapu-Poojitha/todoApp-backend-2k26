import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const servicePath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;

if (!servicePath) {
  throw new Error("FIREBASE_SERVICE_ACCOUNT_PATH is not set");
}

// const serviceAccount = JSON.parse(
//   fs.readFileSync(servicePath, "utf-8")
// );
const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_JSON as string
);


initializeApp({
  credential: cert(serviceAccount),
});

export const db = getFirestore();
export const tasksCollection = db.collection("toDoTasks");
