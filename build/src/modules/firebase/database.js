"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as admin from "firebase-admin";
const admin = require("firebase-admin");
const { removeNullKeys, sanitizePath } = require("./firebase.js");
const setUserSubscribed = async (phoneNumber) => {
    const db = admin.database();
    const ref = db.ref(sanitizePath(`/app/user/${phoneNumber}`));
    try {
        const snap = await ref.once("value");
        if (snap.exists()) {
            const userDetails = snap.val();
            await ref.set(removeNullKeys({ ...userDetails, subscribed: true }));
            console.log("successfully saved user details ", phoneNumber);
        }
        else
            console.log("user not subscribed");
    }
    catch (err) {
        console.log("error while getUserDetails", err);
    }
    return {};
};
const getUserDetails = async (phoneNumber) => {
    const db = admin.database();
    const ref = db.ref(sanitizePath(`/app/user/${phoneNumber}`));
    try {
        const snap = await ref.once("value");
        if (snap.exists()) {
            return snap.val();
        }
    }
    catch (err) {
        console.log("error while getUserDetails", err);
    }
    return {};
};
const getAllUserDetails = async () => {
    const db = admin.database();
    const ref = db.ref(sanitizePath(`/app/user/`));
    try {
        const snap = await ref.once("value");
        if (snap.exists()) {
            return Object.values(snap.val());
        }
    }
    catch (err) {
        console.log("error while getUserDetails", err);
    }
    return [];
};
const setUserDetails = async (user) => {
    const db = admin.database();
    const ref = db.ref(sanitizePath(`/app/user/${user.phoneNumber}`));
    try {
        await ref.set(removeNullKeys(user));
        console.log("successfully saved user details ", user.phoneNumber);
    }
    catch (err) {
        console.log("error while getUserDetails", err);
    }
};
const getUserSavedState = async (phoneNumber) => {
    const db = admin.database();
    const ref = db.ref(sanitizePath(`/app/user/${phoneNumber}/state`));
    try {
        const snap = await ref.once("value");
        if (snap.exists()) {
            return snap.val();
        }
    }
    catch (err) {
        console.log("error while getUserDetails", err);
    }
    return {};
};
const getAllRecentUser = async (ts) => {
    const db = admin.database();
    const ref = db.ref(sanitizePath(`/app/user/`));
    try {
        const snap = await ref
            .orderByChild("createdAt")
            .startAfter(ts)
            .once("value");
        if (snap.exists()) {
            return Object.values(snap.val());
        }
    }
    catch (err) {
        console.log("error while getUserDetails", err);
    }
    return [];
};
const saveUserState = async (phoneNumber, state) => {
    const db = admin.database();
    const ref = db.ref(sanitizePath(`/app/user/${phoneNumber}/state`));
    try {
        await ref.set(removeNullKeys(state));
        console.log("successfully saved user details ", phoneNumber);
    }
    catch (err) {
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
//# sourceMappingURL=database.js.map