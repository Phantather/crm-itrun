import React, {useState} from 'react';
import {Button, Tab, Table, TableContainer, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Tr} from "@chakra-ui/react";
import TheadC from "../../components/Chakra/Thead/TheadC";
import {Link} from "react-router-dom";
import TrC from "../../components/Chakra/Tr/TrC";
import {ReactComponent as Plus} from "../../assets/vector/plus.svg";
import {ReactComponent as Back} from "../../assets/vector/back.svg";
import {ReactComponent as Next} from "../../assets/vector/next.svg";


const SingleGroup = () => {
    const [active,setActive] = useState<string>("a")

    return (
        <section className="singleGroup groups">
            <div className="container__main">
                <Tabs>
                    <Button padding={"20px"} background={"var(--orange-80, rgba(237, 73, 40, 0.80))"} color={"white"} className="groups__add">
                        <Plus/>
                        <span>
                            Редактировать
                        </span>

                    </Button>
                    <TabList>
                        <Tab onClick={() => setActive("a")} color={`${active === "a" ? "var(--orange-80, rgba(237, 73, 40, 0.80))" : ""}`}>Посещаемость</Tab>
                        <Tab onClick={() => setActive("b")} color={`${active === "b" ? "var(--orange-80, rgba(237, 73, 40, 0.80))" : ""}`}>Оценки</Tab>
                        <Tab onClick={() => setActive("c")} color={`${active === "c" ? "var(--orange-80, rgba(237, 73, 40, 0.80))" : ""}`}>Задание</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel padding={"20px 0"}>
                            <table className='singleGroup__table'>
                                <tr>
                                    <td className="singleGroup__table-tab">
                                        №
                                    </td>
                                    <th className="singleGroup__table-name">
                                        ФИО
                                    </th>
                                    <td className="singleGroup__table-tab">
                                        18.06
                                        <br/>
                                        пн
                                    </td>
                                    <td className="singleGroup__table-tab">
                                        18.06
                                        <br/>
                                        пн
                                    </td>
                                    <td className="singleGroup__table-tab">
                                        18.06
                                        <br/>
                                        пн
                                    </td>
                                    <td className="singleGroup__table-tab">
                                        18.06
                                        <br/>
                                        пн
                                    </td>
                                    <td className="singleGroup__table-tab">
                                        18.06
                                        <br/>
                                        пн
                                    </td>
                                    <td className="singleGroup__table-tab">
                                        18.06
                                        <br/>
                                        пн
                                    </td>
                                    <td className="singleGroup__table-tab">
                                        18.06
                                        <br/>
                                        пн
                                    </td>
                                    <td className="singleGroup__table-tab">
                                        18.06
                                        <br/>
                                        пн
                                    </td>
                                    <td className="singleGroup__table-tab">
                                        18.06
                                        <br/>
                                        пн
                                    </td>
                                    <td className="singleGroup__table-tab">
                                        18.06
                                        <br/>
                                        пн
                                    </td>
                                    <td className="singleGroup__table-tab">
                                        18.06
                                        <br/>
                                        пн
                                    </td>

                                    <td className="singleGroup__table-tab">
                                        Итог
                                    </td>
                                </tr>
                                <tr>
                                    <td className='singleGroup__table-tab'>
                                        1
                                    </td>
                                    <th className="singleGroup__table-name">
                                        Исмаилов Азамат
                                    </th>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>
                                        0
                                    </td>
                                </tr>
                                <tr>
                                    <td className='singleGroup__table-tab'>
                                        1
                                    </td>
                                    <th className="singleGroup__table-name">
                                        Исмаилов Азамат
                                    </th>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>
                                        0
                                    </td>
                                </tr>
                                <tr>
                                    <td className='singleGroup__table-tab'>
                                        1
                                    </td>
                                    <th className="singleGroup__table-name">
                                        Исмаилов Азамат
                                    </th>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>
                                        0
                                    </td>
                                </tr>
                                <tr>
                                    <td className='singleGroup__table-tab'>
                                        1
                                    </td>
                                    <th className="singleGroup__table-name">
                                        Исмаилов Азамат
                                    </th>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>
                                        0
                                    </td>
                                </tr>
                                <tr>
                                    <td className='singleGroup__table-tab'>
                                        1
                                    </td>
                                    <th className="singleGroup__table-name">
                                        Исмаилов Азамат
                                    </th>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>
                                        0
                                    </td>
                                </tr>
                                <tr>
                                    <td className='singleGroup__table-tab'>
                                        1
                                    </td>
                                    <th className="singleGroup__table-name">
                                        Исмаилов Азамат
                                    </th>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>
                                        0
                                    </td>
                                </tr>
                            </table>
                        </TabPanel>
                        <TabPanel padding={"20px 0"}>
                            <table className='singleGroup__table'>
                                <tr>
                                    <td className="singleGroup__table-tab">
                                        №
                                    </td>
                                    <th className="singleGroup__table-name">
                                        ФИО
                                    </th>
                                    <td className="singleGroup__table-tab">
                                        Тест
                                        <br/>
                                        1
                                    </td>
                                    <td className="singleGroup__table-tab">
                                        Тест
                                        <br/>
                                        1
                                    </td>
                                    <td className="singleGroup__table-tab">
                                        Тест
                                        <br/>
                                        1
                                    </td>
                                    <td className="singleGroup__table-tab">
                                        Тест
                                        <br/>
                                        1
                                    </td>
                                    <td className="singleGroup__table-tab">
                                        Тест
                                        <br/>
                                        1
                                    </td>
                                    <td className="singleGroup__table-tab">
                                        Тест
                                        <br/>
                                        1
                                    </td>
                                    <td className="singleGroup__table-tab">
                                        Тест
                                        <br/>
                                        1
                                    </td>
                                    <td className="singleGroup__table-tab">
                                        Тест
                                        <br/>
                                        1
                                    </td>
                                    <td className="singleGroup__table-tab">
                                        Тест
                                        <br/>
                                        1
                                    </td>
                                    <td className="singleGroup__table-tab">
                                        Тест
                                        <br/>
                                        1
                                    </td>
                                    <td className="singleGroup__table-tab">
                                        Тест
                                        <br/>
                                        1
                                    </td>
                                    <td className="singleGroup__table-tab">
                                        Итог
                                    </td>
                                </tr>
                                <tr>
                                    <td className='singleGroup__table-tab'>
                                        1
                                    </td>
                                    <th className="singleGroup__table-name">
                                        Исмаилов Азамат
                                    </th>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>
                                        0
                                    </td>
                                </tr>
                                <tr>
                                    <td className='singleGroup__table-tab'>
                                        1
                                    </td>
                                    <th className="singleGroup__table-name">
                                        Исмаилов Азамат
                                    </th>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>
                                        0
                                    </td>
                                </tr>
                                <tr>
                                    <td className='singleGroup__table-tab'>
                                        1
                                    </td>
                                    <th className="singleGroup__table-name">
                                        Исмаилов Азамат
                                    </th>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>
                                        0
                                    </td>
                                </tr>
                                <tr>
                                    <td className='singleGroup__table-tab'>
                                        1
                                    </td>
                                    <th className="singleGroup__table-name">
                                        Исмаилов Азамат
                                    </th>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>
                                        0
                                    </td>
                                </tr>
                                <tr>
                                    <td className='singleGroup__table-tab'>
                                        1
                                    </td>
                                    <th className="singleGroup__table-name">
                                        Исмаилов Азамат
                                    </th>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>
                                        0
                                    </td>
                                </tr>
                                <tr>
                                    <td className='singleGroup__table-tab'>
                                        1
                                    </td>
                                    <th className="singleGroup__table-name">
                                        Исмаилов Азамат
                                    </th>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>

                                    </td>
                                    <td className='singleGroup__table-tab'>
                                        0
                                    </td>
                                </tr>
                            </table>
                        </TabPanel>
                        <TabPanel padding={0} className={'groups__table'}>
                            <TableContainer>
                                <Table variant='simple' >
                                    <TheadC/>
                                    <Tbody>
                                        <TrC/>
                                    </Tbody>
                                </Table>

                            </TableContainer>

                        </TabPanel>
                    </TabPanels>

                </Tabs>
            </div>
        </section>
    );
};

export default SingleGroup;