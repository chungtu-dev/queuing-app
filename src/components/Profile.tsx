import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";

import routes from '../common/helper/routes'
import { Row, Col } from 'react-bootstrap';
import { useDisclosure, Container, Icon } from '@chakra-ui/react';
import NavbarTop from '../common/Navbar'
import '../App.css'
import Sidebar from '../common/Sidebar'
import IconBox from '../common/helper/icons/IconBox'
import { BsFillCameraFill } from 'react-icons/bs'

// import {getAllUser} from '../store/actions/authActions'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

export interface RoutesType {
    name: string;
    layout: string;
    // component: () => JSX.Element;
    icon: JSX.Element | string;
    path: string;
    // secondary?: boolean;
}

const Profile = (props: { [x: string]: any }) => {

    // #region function navbar
    const { onOpen } = useDisclosure();
    const [fixed] = useState(false);
    const { ...rest } = props;

    const [userEmail, setUserEmail] = useState([] as any[]);
    const [userName, setUserName] = useState([] as any[]);
    const [userPassword, setUserPassword] = useState([] as any[]);
    const [userImgProfile, setUserImgProfile] = useState([] as any[]);
    const [userPhoneNumber, setUserPhoneNumber] = useState([] as any[]);
    const [userRole, setUserRole] = useState([] as any[]);

    const db = getFirestore()
    const colRef = collection(db, 'users')

    const getAllUser = async () => {
        const docsSnap = await getDocs(colRef);
        docsSnap.forEach(doc => {
            setUserEmail(Object.assign(doc.data()).user.email)
            setUserName(Object.assign(doc.data()).user.firstName)
            setUserPassword(Object.assign(doc.data()).user.password)
            setUserImgProfile(Object.assign(doc.data()).user.imgProfile)
            setUserPhoneNumber(Object.assign(doc.data()).user.phone)
            setUserRole(Object.assign(doc.data()).user.role)

            console.log('role', userRole);
        })
    }

    useEffect(() => {
        const auth = getAuth();
        return onAuthStateChanged(auth, (user) => {
            try {
                if (user) {
                    // setUserEmail(user)
                    // setUserData((user.email) as string);
                    getAllUser()
                }
            } catch (error) {
                console.log(error);
            }
        });
    }, [])

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
                <Row className="row-l-sidebar">
                    <Col>
                        <Sidebar routes={routes} />
                    </Col>
                </Row>
            </Row>

            <Container className="container-table-data">
                <div className='profile-info-box'>
                    <Container className='profile-info-img'>
                        <IconBox
                            className="upload-img"
                            icon={<Icon className="upload-img-icon" as={BsFillCameraFill} />}
                        />
                        <img src={userImgProfile as any} alt="" className='profile-info-img' />
                        <span className='profile-info-name'>{userName}</span>
                    </Container>

                    <Container>
                        <div className='profile-info'>
                            <Row>
                                <label htmlFor="">Tên người dùng</label>
                                <span className='profile-info-item'>{userName}</span>
                                <label htmlFor="">Email</label>
                                <span className='profile-info-item'>{userEmail}</span>
                                <label htmlFor="">Mật khẩu</label>
                                <span className='profile-info-item'>{userPassword}</span>
                            </Row>
                            <Row>
                                <label htmlFor="">Tên đăng nhập</label>
                                <span className='profile-info-item'>{userEmail}</span>
                                <label htmlFor="">Số điện thoại</label>
                                <span className='profile-info-item'>{userPhoneNumber}</span>
                                <label htmlFor="">Vai trò</label>
                                <span className='profile-info-item'>{userRole}</span>
                            </Row>
                        </div>
                    </Container>
                </div>
            </Container>
        </>
    )
}

export default Profile