import Sidebar from '../common/Sidebar'
import routes from '../common/helper/routes'
import { Col, Row } from 'react-bootstrap';
import { Flex, Icon, Box } from '@chakra-ui/react';

import '../App.css'
import LineChartV2 from '../common/LineChartV2';
import PieChartCircle from '../common/PieChartCircle'

import MiniStatistics from '../common/MiniStatistics'
import IconBox from '../common/helper/icons/IconBox'
import { BsCalendar, BsCalendarCheck, BsTagsFill } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineArrowUp, AiOutlineArrowDown, AiFillWechat } from 'react-icons/ai'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { SiDatabricks } from 'react-icons/si'
import MiniCalendar from '../common/MiniCalendar';

export interface RoutesType {
  name: string;
  layout: string;
  // component: () => JSX.Element;
  icon: JSX.Element | string;
  path: string;
  // secondary?: boolean;
}

const ContentOnDashboard = (props: { [x: string]: any }) => {

  return (
    <>
      <Row>
        <Row className="row-l-sidebar">
          <Col>
            <Sidebar routes={routes} />
          </Col>
        </Row>

        <Flex className="area-line-chart">
          <Col className="line-chart">

            <Flex w='90%' ml="350px" mb="10px" flexDirection={{ base: 'column', lg: 'row' }}>
              <span className="title_area-line-chart">Biểu đồ cấp số</span>
              <div className="ministatics">
                <div className="static_item">
                  <MiniStatistics

                    startContent={
                      <IconBox
                        className="static_item-icon static_item-calendar"
                        icon={<Icon className="icon-BsCalendar" w='20px' h='20px' as={BsCalendar} />}
                      />
                    }
                    name='Số thứ tự
                  đã cấp'
                    value='4.221'
                    subContent={
                      <span className="static_item-subContent static_item-subContent-up">
                        <IconBox
                          icon={<Icon className="static_item-subContent-icon static_item-subContent-icon-up" w='15px' h='15px' as={AiOutlineArrowUp} />}
                        />
                        32,41%
                      </span>
                    }
                  />
                </div>

                <div className="static_item">
                  <MiniStatistics
                    startContent={
                      <IconBox
                        className="static_item-icon static_item-calendarCheck"
                        icon={<Icon className="icon-BsCalendarCheck" w='20px' h='20px' as={BsCalendarCheck} />}
                      />
                    }
                    name='Số thứ tự
                  đã sử dụng'
                    value='3.721'
                    subContent={
                      <span className="static_item-subContent">
                        <IconBox
                          className="static_item-subContent-icon"
                          icon={<Icon className="static_item-subContent-icon static_item-subContent-icon-down" w='15px' h='15px' as={AiOutlineArrowDown} />}
                        />
                        32,41%
                      </span>
                    }
                  />
                </div>

                <div className="static_item">
                  <MiniStatistics
                    startContent={
                      <IconBox
                        className="static_item-icon static_item-User"
                        icon={<Icon className="icon-FiUsers" w='20px' h='20px' as={FiUsers} />}
                      />
                    }
                    name='Số thứ tự
                  đang chờ'
                    value='3.721'
                    subContent={
                      <span className="static_item-subContent static_item-subContent-up">
                        <IconBox
                          className="static_item-subContent-icon"
                          icon={<Icon className="static_item-subContent-icon static_item-subContent-icon-up" w='15px' h='15px' as={AiOutlineArrowUp} />}
                        />
                        32,41%
                      </span>
                    }
                  />
                </div>

                <div className="static_item">
                  <MiniStatistics
                    startContent={
                      <IconBox
                        className="static_item-icon static_item-Tags"
                        icon={<Icon className="icon-BsTagsFill" w='20px' h='20px' as={BsTagsFill} />}
                      />
                    }
                    name='Số thứ tự
                  đã bỏ qua'
                    value='32'
                    subContent={
                      <span className="static_item-subContent">
                        <IconBox
                          className="static_item-subContent-icon"
                          icon={<Icon className="static_item-subContent-icon static_item-subContent-icon-down" w='15px' h='15px' as={AiOutlineArrowDown} />}
                        />
                        32,41%
                      </span>
                    }
                  />
                </div>

              </div>
            </Flex>

            <Flex maxW="75%" w='90%' ml="350px" mb="10px" flexDirection={{ base: 'column', lg: 'row' }}>
              <LineChartV2 />
            </Flex>
          </Col>
        </Flex>

        <Row className='r-sidebar'>
          <Flex className="r-sidebar-container">
            <h3>Tổng quan</h3>

            <div className="r-sidebar-item">
              <Flex className="r-sidebar-pieChart">
                <PieChartCircle />
                <Box className='r-sidebar-pieChart_info'>
                  <span>4.221</span>
                  <span className='r-sidebar-pieChart_info-device-info'>
                    <IconBox
                      className=""
                      icon={<Icon className="r-sidebar-pieChart_info-device" w='15px' h='15px' as={HiOutlineDesktopComputer} />}
                    />
                    Thiết bị</span>
                </Box>
                <Box>
                  <div className='r-sidebar-pieChart_info-device-status'>
                    <ul>
                      <li>Đang hoạt động <span>3.799</span></li>
                      <li>Ngưng hoạt động <span>422</span></li>
                    </ul>
                  </div>
                </Box>
              </Flex>
            </div>

            <div className="r-sidebar-item">
              <Flex className="r-sidebar-pieChart">
                <PieChartCircle />
                <Box className='r-sidebar-pieChart_info'>
                  <span>276</span>
                  <span className="r-sidebar-pieChart_info-service">
                    <IconBox
                      icon={<Icon className="r-sidebar-pieChart_info-service-icon" w='15px' h='15px' as={AiFillWechat} />}
                    />
                    Dịch vụ</span>
                </Box>
                <Box>
                  <div className='r-sidebar-pieChart_info-service-status'>
                    <ul>
                      <li>Đang hoạt động <span>210</span></li>
                      <li>Ngưng hoạt động <span>66</span></li>
                    </ul>
                  </div>
                </Box>
              </Flex>
            </div>

            <div className="r-sidebar-item">
              <Flex className="r-sidebar-pieChart">
                <PieChartCircle />
                <Box className='r-sidebar-pieChart_info'>
                  <span>4.221</span>
                  <span className="r-sidebar-pieChart_info-device-number">
                    <IconBox
                      icon={<Icon className="r-sidebar-pieChart_info-device-number-icon" w='15px' h='15px' as={SiDatabricks} />}
                    />
                    Cấp số</span>
                </Box>
                <Box>
                  <div className='r-sidebar-pieChart_info-device-number-status'>
                    <ul>
                      <li>Đang hoạt động <span>3.721</span></li>
                      <li>Ngưng hoạt động <span>486</span></li>
                      <li>Bỏ qua <span>32</span></li>
                    </ul>
                  </div>
                </Box>
              </Flex>
            </div>

            <div className='miniCalendar'>
              <MiniCalendar h='100%' minW='100%' selectRange={false} />
              {/* {
                userEmail.map((item) =>{
                  return(
                    <span></span>
                  )
                })
              } */}
            </div>
          </Flex>
        </Row>

      </Row>
    </>
  )
}

export default ContentOnDashboard