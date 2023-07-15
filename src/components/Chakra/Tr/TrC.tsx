import React from 'react';
import {Td, Tr} from "@chakra-ui/react";

const TrC = () => {
    return (
        <Tr>
            <Td>Питон</Td>
            <Td>Султан</Td>
            <Td isNumeric>Aman</Td>
            <Td isNumeric>12</Td>
            <Td isNumeric>20:00 - 22:00 (пн-ср-пт)</Td>
        </Tr>
    );
};

export default TrC;