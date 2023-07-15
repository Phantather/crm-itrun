import React from 'react';
import {Th, Tr,Thead} from "@chakra-ui/react";

const TheadC = () => {
    return (
        <Thead>
            <Tr>
                <Th className={"simbl"}>НАЗВАНИЕ</Th>
                <Th>МЕНТОР</Th>
                <Th isNumeric>САППОРТ</Th>
                <Th isNumeric>КОЛ-ВО СТУДЕНТОВ</Th>
                <Th isNumeric>РАСПИСАНИЕ</Th>
            </Tr>
        </Thead>
    );
};

export default TheadC;