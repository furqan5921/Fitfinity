import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs"
import {TiTick} from "react-icons/ti"
import {IoReorderThreeSharp} from "react-icons/io5"
import Chart1 from "./charts/chart1";
import Bar1 from "./charts/bar1";


export default function Dairy() {


    return (
        <Box backgroundColor="rgb(255,252,246)" fontFamily="Work Sans,sans-serif" w={{base:"100%",md:"80%"}} border="1px solid">
            <Flex gap={{base:"10px",md:"30px",lg:"30px"}} flexDirection={{base:"column", md:"row"}}>
                <Flex bgColor="white" boxShadow='md' borderRadius="15px" w={{base:"100%", md:"50%"}} p="10px" fontSize="22px" alignItems="center" justifyContent="space-between">
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
                <Flex bgColor="white" boxShadow='md' borderRadius="15px" w={{base:"100%", md:"50%"}} p="10px" alignItems="center">
                    <IoReorderThreeSharp style={{fontSize:"25px"}}/>
                    <Flex flexDirection="column">
                        <Text fontSize="16px" as="b" margin="0px">DAILY TARGET EDITOR</Text>
                        <Text fontSize="14px" margin="0px">Thu-Default Macronutrient Targets</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Box></Box>
            <Flex margin="auto" marginTop="30px" gap={{base:"10px",md:"30px",lg:"30px"}} flexDirection={{base:"column", md:"row"}}>
                <Box bgColor="white" boxShadow='md' borderRadius="15px" w={{base:"100%", md:"50%"}} p="10px">
                    <Text fontSize="20px" fontWeight="700">Energy Summary</Text>
                    <Flex justifyContent="center" gap={{base:"0",md:"10px"}}>
                        <Flex flexDirection="column" alignItems="center">
                            <Chart1 datas={[40,60]} bgc={["grey", "yellow"]} sz={{base:"90px",md:"100px"}}/>
                            <Text>Consumed</Text>
                        </Flex>
                        <Flex flexDirection="column" alignItems="center">
                            <Chart1 datas={[10,90]} bgc={["grey", "yellow"]} sz={{base:"90px",md:"100px"}}/>
                            <Text>Burned</Text>
                        </Flex>
                        <Flex flexDirection="column" alignItems="center">
                            <Chart1 datas={[70,30]} bgc={["grey", "yellow"]} sz={{base:"90px",md:"100px"}}/>
                            <Text>Remaining</Text>
                        </Flex>
                    </Flex>
                </Box>
                <Box bgColor="white" boxShadow='md' borderRadius="15px" w={{base:"100%", md:"50%"}} p="10px">
                    <Text fontSize="20px" as="b">Macronutrient Targets</Text>
                    <Flex marginTop="10px">
                        <Flex flexDirection="column" as="b">
                            <Text>Energy</Text>
                            <Text>Protin</Text>
                            <Text>Cet Carbs</Text>
                            <Text>Fat</Text>
                        </Flex>
                        <Flex w="50%" mt="5px" flexDirection="column" justifyContent="space-between" marginLeft="20px">
                                <Bar1 barval={20} barpercent={"ssfd"} clr={"yellow"}/>
                                <Bar1 barval={50} barpercent={"ssfd"} clr={"green"}/>
                                <Bar1 barval={10} barpercent={"ssfd"} clr={"blue"}/>
                                <Bar1 barval={80} barpercent={"ssfd"} clr={"red"}/>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
            <Box bgColor="white" boxShadow='md' borderRadius="15px" p="10px" w="100%" mt="30px">
                <Text fontSize="20px" fontWeight="700">Nutrient Targets</Text>
                <Box mt="20px">
                    <Text fontSize="18px" fontWeight="600">Nutrition Scores</Text>
                    <Flex gap="20px">
                        <Flex flexDirection="column" alignItems="center">
                            <Chart1 datas={[10,90]} bgc={["grey", "yellow"]} sz={{base:"90px",md:"100px"}}/>
                            <Text fontSize="14px">All Targets</Text>
                        </Flex>
                        <Flex display={{base:"none",md:"flex"}} boxShadow='md' w="100%" gap="20px" border="1px solid #ccc" borderRadius="15px" p="10px" alignItems="center" justifyContent="center">
                            <Image src="https://cronometer.com/img/nutrition-scores.svg"/>
                            <Flex flexDirection="column">
                                <Text fontWeight="600">Get more with Cronometer Gold</Text>
                                <Text>Upgrade to view full set of nutrition scores representing well researched health concepts</Text>
                            </Flex>
                            <Button w="150px" color="white" bgColor="black" _hover={{boxShadow:'dark-lg'}}>UPGRADE</Button>
                        </Flex>
                    </Flex>
                </Box>
                <Box mt="20px">
                    <Text fontSize="18px" fontWeight="600">Highlighted Nutrients</Text>
                    <Grid>
                        <Flex flexDirection="column" alignItems="center">
                            <Chart1 datas={[10,90]} bgc={["grey", "yellow"]} sz={{base:"90px",md:"100px"}}/>
                            <Text fontSize="14px">All Targets</Text>
                        </Flex>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}