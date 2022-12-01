import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
// chakra imports
import { Box, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import '../App.css'

export interface RoutesType {
    name: string;
    layout: string;
    // component: () => JSX.Element;
    icon: JSX.Element | string;
    path: string;
    secondary?: boolean;
}

const Links = (props: { routes: RoutesType[] }) => {

    let location = useLocation();
    let activeColor = useColorModeValue('gray.700', 'white');
    let inactiveColor = useColorModeValue('secondaryGray.600', 'secondaryGray.600');
    let activeIcon = useColorModeValue('brand.500', 'white');
    let textColor = useColorModeValue('secondaryGray.500', 'white');
    let brandColor = useColorModeValue('brand.500', 'brand.400');

    const { routes } = props;

    const activeRoute = (routeName: string) => {
        return location.pathname.includes(routeName);
    };

    const createLinks = (
        routes: RoutesType[],
    ) => {
        return routes.map(
            (
                route: RoutesType,
                index: number
            ) => {
                if (route.layout === '/admin' || route.layout === '/auth' || route.layout === '/rtl') {
                    return (
                        <NavLink key={index} to={route.layout + route.path}>
                            <Box>
                                <HStack
                                    spacing={activeRoute(route.path.toLowerCase()) ? '22px' : '26px'}
                                    py='5px'
                                    // ps='10px'
                                    >
                                    <Flex w='100%' className='sidebar-item'>
                                        <Box
                                            color={activeRoute(route.path.toLowerCase()) ? activeIcon : textColor}
                                            me='18px'>
                                            {route.icon}
                                        </Box>
                                        <Text
                                            className='text-link-sidebar'
                                            me='auto'
                                            color={activeRoute(route.path.toLowerCase()) ? activeColor : textColor}
                                            fontWeight={activeRoute(route.path.toLowerCase()) ? 'bold' : 'normal'}>
                                            {route.name}
                                        </Text>
                                    </Flex>
                                </HStack>
                            </Box>
                        </NavLink>
                    );
                }
            },
        );
    };
    //  BRAND
    return <>{createLinks(routes)}</>
}

export default Links