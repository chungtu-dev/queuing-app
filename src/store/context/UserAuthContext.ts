import { createContext, useContext, useEffect, useState } from "react";
import { login, signup, signout } from '../actions/authActions'

// import {
//     onAuthStateChanged,
// } from "firebase/auth";
// import { auth } from "../../firebase/config";

interface AuthContextProps {
    children: React.ReactNode
}

interface User {
    email: string,
    password: string
}

interface UserDefault {
    userData: User[];
}

const userContextDefaultData = {
    userData: []
}
