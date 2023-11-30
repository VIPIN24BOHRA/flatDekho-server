// import * as admin from "firebase-admin";
const admin = require("firebase-admin");

const { removeNullKeys, sanitizePath } = require("./firebase.js");

interface UserDetails {
  phoneNumber: string;
  state: UserState;
  isPremium: false;
  attempts: number;
  createdAt: number;
  updatedAt: number;
}

interface UserState {
  totalAttempts: number;
  getContactAttempts: number;
  state: string;
  lastSeenAt: number;
}

const setUserSubscribed = async (phoneNumber: string) => {
  const db = admin.database();
  const ref = db.ref(sanitizePath(`/app/user/${phoneNumber}`));
  try {
    const snap = await ref.once("value");
    if (snap.exists()) {
      const userDetails: UserDetails = snap.val();
      await ref.set(removeNullKeys({ ...userDetails, subscribed: true }));
      console.log("successfully saved user details ", phoneNumber);
    } else console.log("user not subscribed");
  } catch (err) {
    console.log("error while getUserDetails", err);
  }
  return {} as UserDetails;
};

const getUserDetails = async (phoneNumber: string) => {
  const db = admin.database();
  const ref = db.ref(sanitizePath(`/app/user/${phoneNumber}`));
  try {
    const snap = await ref.once("value");
    if (snap.exists()) {
      return snap.val() as UserDetails;
    }
  } catch (err) {
    console.log("error while getUserDetails", err);
  }
  return {} as UserDetails;
};

const getAllUserDetails = async () => {
  const db = admin.database();
  const ref = db.ref(sanitizePath(`/app/user/`));
  try {
    const snap = await ref.once("value");
    if (snap.exists()) {
      return Object.values(snap.val()) as UserDetails[];
    }
  } catch (err) {
    console.log("error while getUserDetails", err);
  }
  return [] as UserDetails[];
};

const setUserDetails = async (user: UserDetails) => {
  const db = admin.database();
  const ref = db.ref(sanitizePath(`/app/user/${user.phoneNumber}`));
  try {
    await ref.set(removeNullKeys(user));
    console.log("successfully saved user details ", user.phoneNumber);
  } catch (err) {
    console.log("error while getUserDetails", err);
  }
};

const getUserSavedState = async (phoneNumber: string) => {
  const db = admin.database();
  const ref = db.ref(sanitizePath(`/app/user/${phoneNumber}/state`));
  try {
    const snap = await ref.once("value");
    if (snap.exists()) {
      return snap.val() as UserState;
    }
  } catch (err) {
    console.log("error while getUserDetails", err);
  }
  return {} as UserState;
};

const getAllRecentUser = async (ts: number) => {
  const db = admin.database();
  const ref = db.ref(sanitizePath(`/app/user/`));

  try {
    const snap = await ref
      .orderByChild("createdAt")
      .startAfter(ts)
      .once("value");
    if (snap.exists()) {
      return Object.values(snap.val()) as UserDetails[];
    }
  } catch (err) {
    console.log("error while getUserDetails", err);
  }
  return [] as UserDetails[];
};

const saveUserState = async (phoneNumber: string, state: UserState) => {
  const db = admin.database();
  const ref = db.ref(sanitizePath(`/app/user/${phoneNumber}/state`));
  try {
    await ref.set(removeNullKeys(state));
    console.log("successfully saved user details ", phoneNumber);
  } catch (err) {
    console.log("error while getUserDetails", err);
  }
};

module.exports = {
  setUserDetails,
  setUserSubscribed,
  getAllUserDetails,
  getUserDetails,
  getUserSavedState,
  saveUserState,
  getAllRecentUser,
};
