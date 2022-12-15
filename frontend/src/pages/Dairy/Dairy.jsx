import { Box, Flex, Text } from "@chakra-ui/react";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs"
import {TiTick} from "react-icons/ti"
import {IoReorderThreeSharp} from "react-icons/io5"



export default function Dairy() {


    return (
        <Box backgroundColor="rgb(255,252,246)" fontFamily="Work Sans,sans-serif" w="80%" border="1px solid">
            <Flex gap={{sm:"10px",md:"30px",lg:"30px"}} flexDirection={{sm:"column",md:"row"}}>
                <Flex bgColor="white" boxShadow='md' borderRadius="15px" w="50%" p="10px" fontSize="22px" alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center">
                        <BsChevronLeft/>
                        <Box w="30px" h="30px" border="1px solid"></Box>
                        <Text as="b" fontSize="18px">Today</Text>
                        <BsChevronRight/>
                    </Flex>
                    <Box>
                        <TiTick style={{padding:"2px",border:"1px solid", borderRadius:"25px",}}/>
                    </Box>
                </Flex>
                <Flex bgColor="white" boxShadow='md' borderRadius="15px" w="50%" p="10px" alignItems="center">
                    <IoReorderThreeSharp style={{fontSize:"25px"}}/>
                    <Flex flexDirection="column">
                        <Text fontSize="16px" as="b" margin="0px">DAILY TARGET EDITOR</Text>
                        <Text fontSize="14px" margin="0px">Thu-Default Macronutrient Targets</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Box></Box>
            <Flex>
                <Box>
                    <Text fontSize="20px" as="b">Energy Summary</Text>
                </Box>
            </Flex>
        </Box>
    )
}