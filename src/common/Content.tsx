import React from 'react'
import { Box, Flex, Stack } from '@chakra-ui/react';

import Brand from './Brand'
import Links from './Links'

export interface RoutesType {
    name: string;
    layout: string;
    // component: () => JSX.Element;
    icon: JSX.Element | string;
    path: string;
    secondary?: boolean;
}

const Content = (props: { routes: RoutesType[] }) => {
    const { routes } = props;
    return (
        <Flex direction='column' height='100%' pt='25px' borderRadius='30px'>
            <Brand />
            <Stack direction='column' mt='8px' mb='auto'>
                <Box pe={{ lg: '16px', '2xl': '16px' }}>
                    <Links routes={routes} />
                </Box>
            </Stack>
        </Flex>
    )
}

export default Content