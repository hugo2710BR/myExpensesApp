import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebase";

export const createHousehold = async (userId: string, householdName: string) => {
  const docRef = await addDoc(collection(db, "households"), {
    name: householdName,
    members: [userId],
    createdAt: new Date(),
  });
  return docRef.id;
};