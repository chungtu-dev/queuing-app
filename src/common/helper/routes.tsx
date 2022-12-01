import { Icon } from '@chakra-ui/react';

import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {AiFillWechat, AiFillSetting, AiOutlineLogout} from 'react-icons/ai'
import {SiDatabricks} from 'react-icons/si'
import {RiFileChartLine} from 'react-icons/ri'
import {MdOutlineDashboard} from 'react-icons/md'
import {BsFillInfoCircleFill} from 'react-icons/bs'

import '../../App.css'
// Admin Imports
// import MainDashboard from 'views/admin/default';
// import NFTMarketplace from 'views/admin/marketplace';
// import Profile from 'views/admin/profile';
// import DataTables from 'views/admin/dataTables';
// import RTL from 'views/admin/rtl';

// // Auth Imports
// import SignInCentered from 'views/auth/signIn';

const routes = [
	{
		name: 'Dashboard',
		layout: '/admin',
		path: '/dashboard',
		icon: <Icon as={MdOutlineDashboard} width='20px' height='20px' color='inherit' className='sidebar-icon-item'/>,
		// component: MainDashboard
	},
	{
		name: 'Thiết bị',
		layout: '/admin',
		path: '/thiet-bi',
		icon: <Icon as={HiOutlineDesktopComputer} width='20px' height='20px' color='inherit' className='sidebar-icon-item'/>,
		// component: NFTMarketplace,
		secondary: true
	},
	{
		name: 'Dịch vụ',
		layout: '/admin',
		path: '/service',
		icon: <Icon as={AiFillWechat} width='20px' height='20px' color='inherit' className='sidebar-icon-item'/>,
		// component: DataTables
	},
	{
		name: 'Cấp số',
		layout: '/admin',
		path: '/cap-so',
		icon: <Icon as={SiDatabricks} width='20px' height='20px' color='inherit' className='sidebar-icon-item'/>,
		// component: Profile
	},
	{
		name: 'Báo cáo',
		layout: '/auth',
		path: '/sign-in',
		icon: <Icon as={RiFileChartLine} width='20px' height='20px' color='inherit' className='sidebar-icon-item'/>,
		// component: SignInCentered
	},
	{
		name: 'Cài đặt hệ thống',
		layout: '/admin',
		path: '/setting',
		icon: <Icon as={AiFillSetting} width='20px' height='20px' color='inherit' className='sidebar-icon-item'/>,
		// component: RTL
	},
	{
		name: 'Cá nhân',
		layout: '/auth',
		path: '/profile',
		icon: <Icon as={BsFillInfoCircleFill} width='20px' height='20px' color='inherit' className='sidebar-icon-item'/>,
		// component: RTL
	},
	{
		name: 'Đăng xuất',
		layout: '/auth',
		path: '/login',
		icon: <Icon as={AiOutlineLogout} width='20px' height='20px' color='inherit' className='sidebar-icon-item'/>,
		// component: RTL
	}
];

export default routes;
