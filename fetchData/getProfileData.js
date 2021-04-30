import admin from "../firebase/nodeApp";

export const getProfileData = async (vehicle) => {
  const db = admin.firestore();
  const vehiclesCollection = db.collection("vehicles");
  const vehicleDoc = await vehiclesCollection.doc(vehicle).get();

  if (!vehicleDoc.exists) {
    return null;
  }

  return vehicleDoc.data();
};
