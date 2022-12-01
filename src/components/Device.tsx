import React, { useState } from 'react'
import DeviceTable from './DeviceTable'
import { Flex, useDisclosure, Icon, Box, Container } from '@chakra-ui/react';
import NavbarTop from '../common/Navbar'
import Sidebar from '../common/Sidebar'
import routes from '../common/helper/routes'
import { Col, Row } from 'react-bootstrap';
import '../App.css'

export interface RoutesType {
    name: string;
    layout: string;
    // component: () => JSX.Element;
    icon: JSX.Element | string;
    path: string;
    // secondary?: boolean;
}

const Device = (props: { [x: string]: any }) => {
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
                <DeviceTable />
            </Container>
        </>
    )
}

export default Device