import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const fetchServices = async () => {
  const querySnapshot = await getDocs(collection(db, "services"));
  const services = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return services;
};