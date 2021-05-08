import firebase from "../firebase/clientApp";

export const getVehicle = async (vehicleId) => {
  const db = firebase.firestore();
  const vehicleRef = db.collection("vehicles").doc(vehicleId);
  const vehicle = await vehicleRef.get();

  return vehicle.data();
};
