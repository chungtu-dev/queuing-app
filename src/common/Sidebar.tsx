import React from 'react'

// chakra imports
import {
    Box,
    Flex,
    useColorModeValue,
} from '@chakra-ui/react';

import { renderThumb, renderTrack, renderView } from './Scrollbar'
import { Scrollbars } from 'react-custom-scrollbars-2';

import Content from './Content'

// Assets
import { IoMenuOutline } from 'react-icons/io5';

export interface RoutesType {
    name: string;
    layout: string;
    // component: () => JSX.Element;
    icon: JSX.Element | string;
    path: string;
    secondary?: boolean;
}

function Sidebar(props: { routes: RoutesType[]; [x: string]: any }) {
	const { routes } = props;

	let variantChange = '0.2s linear';
	let shadow = useColorModeValue('14px 17px 40px 4px rgba(112, 144, 176, 0.08)', 'unset');
	// Chakra Color Mode
	let sidebarBg = useColorModeValue('white', 'navy.800');
	let sidebarMargins = '0px';

	// SIDEBAR
	return (
		<Box display={{ sm: 'none', xl: 'block' }} position='fixed' minH='100%'>
			<Box
				bg={sidebarBg}
				transition={variantChange}
				w='300px'
				h='100vh'
				m={sidebarMargins}
				minH='100%'
				overflowX='hidden'
				boxShadow={shadow}>
				<Scrollbars
					autoHide
					renderTrackVertical={renderTrack}
					renderThumbVertical={renderThumb}
					renderView={renderView}>
					<Content routes={routes} />
				</Scrollbars>
			</Box>
		</Box>
	);
}

export default Sidebar