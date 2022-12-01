import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";

import routes from '../common/helper/routes'
import { Row } from 'react-bootstrap';
import { useDisclosure} from '@chakra-ui/react';
import NavbarTop from '../common/Navbar'

import '../App.css'

import ContentOnDashboard from '../common/ContentOnDashboard';

// import {db} from '../firebase/config'
// import {
//   getDoc,
//   doc,
// } from "firebase/firestore";

export interface RoutesType {
  name: string;
  layout: string;
  // component: () => JSX.Element;
  icon: JSX.Element | string;
  path: string;
  // secondary?: boolean;
}

const Dashboard = (props: { [x: string]: any }) => {

  const [userEmail, setUserEmail] = useState({});
  const [userData, setUserData] = useState("")

  useEffect(() => {
    const auth = getAuth();
    return onAuthStateChanged(auth, (user) => {
      try {
        if (user) {
          // console.log('user-info', user.providerData)
          // const a = Object.assign({}, user.providerData)
          setUserEmail(user)
          // const arr = [];
          // const pushitem = arr.push(userEmail)
          // console.log('a', user.email)
          // console.log('b', userEmail)
          // console.log('c', pushitem)
        }
      } catch (error) {
        console.log(error);
      }
    });
  }, [])

  // #region function navbar
  const { onOpen } = useDisclosure();
  const [fixed] = useState(false);
  const { ...rest } = props;

  const getActiveRoute = (routes: RoutesType[]): string => {
    let activeRoute = 'Dashboard';
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (routes: RoutesType[]): boolean => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return true;
      }
    }
    return activeNavbar;
  };
  const getActiveNavbarText = (routes: RoutesType[]): string | boolean => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return activeNavbar;
  };
  // #endregion

  return (
    <>
      <NavbarTop onOpen={onOpen}
        logoText={'Alta Media'}
        brandText={getActiveRoute(routes)}
        secondary={getActiveNavbar(routes)}
        message={getActiveNavbarText(routes)}
        fixed={fixed}
        {...rest}
      />

      <Row>
        <ContentOnDashboard/>
      </Row>
    </>
  )
}

export default Dashboard