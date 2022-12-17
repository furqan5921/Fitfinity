import { Box, Button, CircularProgress, CircularProgressLabel, Flex, Grid, Image, Text } from "@chakra-ui/react";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs"
import {TiTick} from "react-icons/ti"
import {IoReorderThreeSharp} from "react-icons/io5"
import Chart1 from "./charts/chart1";
import Bar1 from "./charts/bar1";

import Submenu from "./charts/submenu";

import { SidebarContent } from "../../components/SidebarContent";
import { MobileNav } from "../../components/Siderbar";



export default function Dairy() {


    return (
        <>
        <SidebarContent/>
        <Box backgroundColor="rgb(255,252,246)" fontFamily="Work Sans,sans-serif" w={{base:"100%",md:"80%"}} ml={{md:'20%'}} border="1px solid">
          <MobileNav />
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
                                <Bar1 barval={20} barpercent={"ssfd"} clr={"gray"} spl={0}/>
                                <Bar1 barval={50} barpercent={"ssfd"} clr={"green"} spl={0}/>
                                <Bar1 barval={10} barpercent={"ssfd"} clr={"blue"} spl={0}/>
                                <Bar1 barval={80} barpercent={"ssfd"} clr={"red"} spl={0}/>
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
                        <CircularProgress value={40} color='pink.600' size='90px' thickness='6px'>
                            <CircularProgressLabel>40%</CircularProgressLabel>
                        </CircularProgress>
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
                    <Grid templateColumns={{base:"repeat(3,1fr)", md:"repeat(4,1fr)",lg:"repeat(8,1fr)"}}>
                        <Flex flexDirection="column" alignItems="center">
                            <CircularProgress value={40} color='yellow.400' size='90px' thickness='6px'>
                                <CircularProgressLabel>40%</CircularProgressLabel>
                            </CircularProgress>
                            <Text fontSize="14px">Fiber</Text>
                        </Flex>
                        <Flex flexDirection="column" alignItems="center">
                            <CircularProgress value={40} color='yellow.400' size='90px' thickness='6px'>
                                <CircularProgressLabel>40%</CircularProgressLabel>
                            </CircularProgress>
                            <Text fontSize="14px">Iron</Text>
                        </Flex>
                        <Flex flexDirection="column" alignItems="center">
                            <CircularProgress value={40} color='yellow.400' size='90px' thickness='6px'>
                                <CircularProgressLabel>40%</CircularProgressLabel>
                            </CircularProgress>
                            <Text fontSize="14px">Calcium</Text>
                        </Flex>
                        <Flex flexDirection="column" alignItems="center">
                            <CircularProgress value={40} color='yellow.400' size='90px' thickness='6px'>
                                <CircularProgressLabel>40%</CircularProgressLabel>
                            </CircularProgress>
                            <Text fontSize="14px">Vit.A</Text>
                        </Flex>
                        <Flex flexDirection="column" alignItems="center">
                            <CircularProgress value={40} color='yellow.400' size='90px' thickness='6px'>
                                <CircularProgressLabel>40%</CircularProgressLabel>
                            </CircularProgress>
                            <Text fontSize="14px">Vit.C</Text>
                        </Flex>
                        <Flex flexDirection="column" alignItems="center">
                            <CircularProgress value={40} color='yellow.400' size='90px' thickness='6px'>
                                <CircularProgressLabel>40%</CircularProgressLabel>
                            </CircularProgress>
                            <Text fontSize="14px">Vit.B12</Text>
                        </Flex>
                        <Flex flexDirection="column" alignItems="center">
                            <CircularProgress value={40} color='yellow.400' size='90px' thickness='6px'>
                                <CircularProgressLabel>40%</CircularProgressLabel>
                            </CircularProgress>
                            <Text fontSize="14px">Folate</Text>
                        </Flex>
                        <Flex flexDirection="column" alignItems="center">
                            <CircularProgress value={40} color='yellow.400' size='90px' thickness='6px'>
                                <CircularProgressLabel>40%</CircularProgressLabel>
                            </CircularProgress>
                            <Text fontSize="14px">Potassium</Text>
                        </Flex>
                    </Grid>
                </Box>
                <Flex w="100%" mt="20px" gap="20px" flexDirection={{base:"column", md:"column", lg:"row"}}>
                    <Flex w="50%" flexDirection="column" gap="10px">
                        <Box w="100%" border="1px solid #ccc" borderRadius="15px" h="fit-content">
                            <Text bgColor="#ccc" borderRadius="15px 15px 0px 0px" padding="5px 15px">General</Text>
                            <Box padding="0px 15px">
                                <Submenu data={["Energy","Alcohol","Caffiene","Water"]} flag={2} para={"g"}/>
                            </Box>
                        </Box>
                        <Box w="100%" border="1px solid #ccc" borderRadius="15px" h="fit-content">
                            <Text bgColor="#ccc" borderRadius="15px 15px 0px 0px" padding="5px 15px">Carbohydrates</Text>
                            <Box padding="0px 15px">
                                <Submenu data={["Carbs","Fiber","Starch","Sugars","Net Carbs"]} flag={2} para={"g"}/>
                            </Box>
                        </Box>
                        <Box w="100%" border="1px solid #ccc" borderRadius="15px" h="fit-content">
                            <Text bgColor="#ccc" borderRadius="15px 15px 0px 0px" padding="5px 15px">Lipids</Text>
                            <Box padding="0px 15px">
                                <Submenu data={["Fat","Monounsaturated","Polyunsaturated","Omega-3","Omega-6","Saturated","Trans-Fats","Cholesterol"]} flag={2} para={"g"}/>
                            </Box>
                        </Box>
                        <Box w="100%" border="1px solid #ccc" borderRadius="15px" h="fit-content">
                            <Text bgColor="#ccc" borderRadius="15px 15px 0px 0px" padding="5px 15px">Protein</Text>
                            <Box padding="0px 15px">
                                <Submenu data={["Protein","Cystine","Histedine","Isoleucine","Leucine","Lysine","Methionine","Phenylalanine","Threonine","Tryptophan","Tyrosine","Valine"]} flag={2} para={"g"}/>
                            </Box>
                        </Box>
                    </Flex>
                    <Flex w="50%" flexDirection="column" gap="10px">
                        <Box w="100%" border="1px solid #ccc" borderRadius="15px" h="fit-content">
                            <Text bgColor="#ccc" borderRadius="15px 15px 0px 0px" padding="5px 15px">Vitamins</Text>
                            <Box padding="0px 15px">
                                <Submenu data={["B1 (Thiamine)","B2 (Riboflavin)","B3 (Niacin)","B5 (Pantothenic)","B6 (Pyridoxine)", "B12 (Cobalamin)", "Folate", "Vitamin A", "Vitamin C", "Vitamin C", "Vitamin E", "Vitamin K"]} flag={0} para={"mg"}/>
                            </Box>
                        </Box>
                        <Box w="100%" border="1px solid #ccc" borderRadius="15px" h="fit-content">
                            <Text bgColor="#ccc" borderRadius="15px 15px 0px 0px" padding="5px 15px">Minerals</Text>
                            <Box padding="0px 15px">
                                <Submenu data={["Calcium","Copper","Iron","Magnesium","Manganese", "Phosphorus", "Potassium", "Selenium", "Sodium", "Zinc"]} flag={1} para={"mg"}/>
                            </Box>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </Box>
        </>
    )
}