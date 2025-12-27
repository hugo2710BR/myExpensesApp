import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

export const fetchUserAndHouseHoldName = async () => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User não autenticado");
  }

  // Buscar user
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    throw new Error("User não encontrado");
  }

  const userData = userSnap.data();

  // Buscar household
  const householdRef = doc(db, "households", userData.householdId);
  const householdSnap = await getDoc(householdRef);

  if (!householdSnap.exists()) {
    throw new Error("Household não encontrado");
  }

  return {
    userName: userData.name,
    householdName: householdSnap.data().name,
  };
};
