import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../services/firebase";

export const createUser = async (
  userId: string,
  name: string,
  email: string,
  householdId: string
) => {
  await setDoc(doc(db, "users", userId), {
    name,
    email,
    householdId,
    createdAt: new Date(),
  });
};
