import { SignUpData, SignInData, User } from '../types';
import { Dispatch } from 'redux';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { getFirestore, doc, getDoc, addDoc, collection, serverTimestamp, getDocs } from 'firebase/firestore'
import { SET_ERROR, SET_USER, SIGN_OUT } from '../model';

const db = getFirestore()
const colRef = collection(db, 'users')

//#region Đăng kí
export const signup = async (data: SignUpData) => {
    const res = await createUserWithEmailAndPassword(auth, data.email, data.password)
    try {
        if (res.user) {
            const userData: User = {
                email: data.email,
                firstName: data.firstName,
                password: data.password,
                id: res.user.uid,
                createdAt: serverTimestamp(),
            }
            await addDoc(colRef, {
                user: userData
            })
            return (dispatch: Dispatch) => {
                dispatch({
                    type: SET_USER,
                    payload: userData
                })
            }
        }
    } catch (error) {
        console.log(error);
        return (dispatch: Dispatch) => {
            dispatch({
                type: SET_ERROR,
                payload: error
            })
        }
    }
}
//#endregion

//#region Đăng nhập
export const login = async (data: SignInData) => {
    try {
        await signInWithEmailAndPassword(auth, data.email, data.password)
    } catch (error) {
        console.log(error);
    }
}
//#endregion

//#region Đăng xuất
export const signout = async () => {
    try {
        await signOut(auth)
        return (dispatch: Dispatch)=>{
            dispatch({
                type: SIGN_OUT,
            })
        }
    } catch (error) {
        console.log(error);
    }
}
//#endregion

//#region get User by id
export const getUserById = (id: string) => {
    try {
        const userData = doc(db, 'users', id)
        console.log("userData", userData);
        return getDoc(userData)
    } catch (error) {
        console.log(error);
    }
}
//#endregion

export const getAllUser = async () =>{
    // return getDocs(colRef)
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach(doc => {
        // doc.data()
        const arrData = Object.assign({}, doc.data())
        console.log('doc-data', arrData.user);
        return arrData.user
    })
}