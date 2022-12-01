import { Flex, Table, Progress, Icon, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table';
import '../App.css'

// Custom components
import Card from './Card';

// Assets
import { MdCheckCircle, MdCancel, MdOutlineError } from 'react-icons/md';
export default function ColumnsTable(props: { columnsData: any; tableData: any }) {
    const { columnsData, tableData } = props;

    const columns = useMemo(() => columnsData, [columnsData]);
    const data = useMemo(() => tableData, [tableData]);

    const tableInstance = useTable(
        {
            columns,
            data
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, initialState }: any = tableInstance;
    initialState.pageSize = 5;

    const textColor = useColorModeValue('secondaryGray.900', 'white');
    const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
    return (
        <Card flexDirection='column' w='100%' px='0px' overflowX={{ sm: 'scroll', lg: 'hidden' }}>
            <Flex px='0px' justify='space-between' mb='0px' align='center'>
                <Text color={'#FF7506'} fontSize='22px' fontWeight='700' lineHeight='100%'>
                    Quản lý dịch vụ
                </Text>
            </Flex>
            <Table {...getTableProps()} variant='simple' color='gray.500' mb='24px' className='table-service-container'>
                <Thead>
                    {headerGroups.map((headerGroup: any, index: any) => (
                        <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
                            {headerGroup.headers.map((column: any, index: any) => (
                                <Th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    pe='10px'
                                    key={index}
                                    borderColor={borderColor}>
                                    <Flex
                                    className="service-header-item"
                                        justify='space-between'
                                        align='center'
                                        fontSize={{ sm: '10px', lg: '12px' }}
                                        color='gray.400'>
                                        {column.render('Header')}
                                    </Flex>
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </Thead>
                <Tbody {...getTableBodyProps()}>
                    {page.map((row: any, index: any) => {
                        prepareRow(row);
                        return (
                            <Tr {...row.getRowProps()} key={index}>
                                {row.cells.map((cell: any, index: any) => {
                                    let data;
                                    if(cell.column.Header === 'Mã dịch vụ'){
                                        data = (
                                            <Text color={textColor} fontSize='sm' fontWeight='700'>
                                                {cell.value}
                                            </Text>
                                        );
                                    }
                                    else if (cell.column.Header === 'Tên dịch vụ') {
                                        data = (
                                            <Text color={textColor} fontSize='sm' fontWeight='700'>
                                                {cell.value}
                                            </Text>
                                        );
                                    } else if (cell.column.Header === 'Mô tả') {
                                        data = (
                                            <Flex align='center'>
                                                <Icon
                                                    w='24px'
                                                    h='24px'
                                                    me='5px'
                                                    color={
                                                        cell.value === 'Approved' ? (
                                                            'green'
                                                        ) : cell.value === 'Disable' ? (
                                                            'red'
                                                        ) : cell.value === 'Error' ? (
                                                            'orange'
                                                        ) : undefined
                                                    }
                                                    as={
                                                        cell.value === 'Approved' ? (
                                                            MdCheckCircle
                                                        ) : cell.value === 'Disable' ? (
                                                            MdCancel
                                                        ) : cell.value === 'Error' ? (
                                                            MdOutlineError
                                                        ) : undefined
                                                    }
                                                />
                                                <Text color={textColor} fontSize='sm' fontWeight='700' className='service-status'>
                                                    {cell.value}
                                                </Text>
                                            </Flex>
                                        );
                                    } 
                                    // else if (cell.column.Header === 'Trạng thái hoạt động') {
                                    //     data = (
                                    //         <Text color={textColor} fontSize='sm' fontWeight='700'>
                                    //             {cell.value}
                                    //         </Text>
                                    //     );
                                    // }
                                    else if (cell.column.Header === 'Ngày') {
                                        data = (
                                            <Text color={textColor} fontSize='sm' fontWeight='700'>
                                                {cell.value}
                                            </Text>
                                        );
                                    } 
                                    // else if (cell.column.Header === 'Xử lý') {
                                    //     data = (
                                    //         <Flex align='center' className='service-process'>
                                    //             <Text color={textColor} fontSize='sm' fontWeight='700'>
                                    //                 {cell.value}
                                    //             </Text>
                                    //         </Flex>
                                    //     );
                                    // }
                                    return (
                                        <Td className='service-data-table'
                                            {...cell.getCellProps()}
                                            key={index}
                                            fontSize={{ sm: '14px' }}
                                            minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                                            borderColor='transparent'>
                                            {data}
                                        </Td>
                                    );
                                })}
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </Card>
    );
}
