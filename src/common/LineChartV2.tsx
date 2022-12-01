import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { Button, Icon } from '@chakra-ui/react';
import { MdOutlineCalendarToday } from 'react-icons/md';
import '../App.css'

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const LineChartV2 = () => {
  return (
    <>
    {/* <span className="title_area-line-chart">Biểu đồ cấp số</span> */}
      <div className="box-area-chart">

        <div className="box-area-chart_content">

          <div className="box-area-chart_title">
            <span>Bảng thống kê theo ngày</span>
            <span>tháng 11/2022</span>
          </div>

          <div className="box-area-chart_datetime">
            <Button fontSize='sm' fontWeight='500' borderRadius='7px' className='box-area-chart_datetime_button'>
              <Icon as={MdOutlineCalendarToday} me='4px' className='box-area-chart_datetime_text' />
              This month
            </Button>
          </div>

        </div>

        <AreaChart width={770} height={350} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }} className="areaChart">
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip wrapperStyle={{ top: 300, left: 260 }} />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </div>
    </>
  )
}

export default LineChartV2