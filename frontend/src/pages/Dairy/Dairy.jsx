import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Box,Heading,HStack, Button, CircularProgress, CircularProgressLabel, Flex, Grid, Image, Input, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs"
import {TiTick} from "react-icons/ti"
import {IoReorderThreeSharp} from "react-icons/io5"
import Chart1 from "./charts/chart1";
import Bar1 from "./charts/bar1";
import Submenu from "./charts/submenu";
import { SidebarContent } from "../../components/SidebarContent";
import { MobileNav } from "../../components/Siderbar";
import { getdata } from "../../redux/datareducer/action";
import DashList from "../../components/DashBoard/DashList";
import { FoodModal } from "../../components/DashBoard/FoodModal";
import { ExerciseModal } from "../../components/DashBoard/ExerciseModal";
import { BiometricModal } from "../../components/DashBoard/BiometricModal";
import { NotesModal } from "../../components/DashBoard/NotesModal";

export default function Dairy() {
    const dispatch = useDispatch();
    let [model, setmodel] = useState(false)
    const { loading, datas } = useSelector(el => el.data)

    // useEffect(()=>{
    //     dispatch(getdata())
    // },[])

    // console.log(datas,loading)
    // if (loading==true) {
    //     return <h1>Loading...</h1>
    // }

    const [isFoodModalVisible, setIsFoodModalVisible] = useState(false);
  const [isExerciseModalVisible, setIsExerciseModalVisible] = useState(false);
  const [isBiometricModalVisible, setIsBiometricModalVisible] = useState(false);
  const [isNotesModalVisible, setIsNotesModalVisible] = useState(false);

  const FoodModalClick = () => {
    setIsFoodModalVisible(true);
    // onClose();
  };
  const ExerciseModalClick = () => {
    setIsExerciseModalVisible(true);
    // onClose();
  };

  const BioModalClick = () => {
    setIsBiometricModalVisible(true);
  };

    return (
        <Box w="100vw">
        <SidebarContent display={{base:"none",md:"block"}}/>
        <Box backgroundColor="rgb(255,252,246)" fontFamily="Work Sans,sans-serif" w={{base:"100%",md:"70%",lg:"80%"}} ml={{base:"0px",md:"30%",lg:"20%"}}>
          <MobileNav/>
            <Flex mt="20px" gap={{base:"10px",md:"30px",lg:"30px"}} flexDirection={{base:"column", md:"column",lg:"row"}}>
                <Flex bgColor="white" boxShadow='md' borderRadius="15px" w={{base:"100%", md:"100%",lg:"50%"}} p="10px" fontSize="22px" alignItems="center" justifyContent="space-between">
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
                <Flex bgColor="white" boxShadow='md' borderRadius="15px" w={{base:"100%", md:"100%",lg:"50%"}} p="10px" alignItems="center">
                    <IoReorderThreeSharp style={{fontSize:"25px"}}/>
                    <Flex flexDirection="column">
                        <Text fontSize="16px" as="b" margin="0px">DAILY TARGET EDITOR</Text>
                        <Text fontSize="14px" margin="0px">Thu-Default Macronutrient Targets</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Box w="100%" margin="auto" marginTop="30px" bgColor="white" boxShadow='md' borderRadius="15px" p="15px">
                {/* <Flex gap="10px">
                    <Button backgroundColor="white" fontSize={{base:"12px",md:"16px"}}>
                        <Image h={{base:"16px",md:"20px"}} src="https://cdn1.cronometer.com/brand/svg/add-food-icon.svg"/>
                        FOOD
                    </Button>
                    <Button backgroundColor="white" fontSize={{base:"12px",md:"16px"}}>
                        <Image h={{base:"16px",md:"20px"}} src="https://cdn1.cronometer.com/brand/svg/add-exercise-icon.svg"/>
                        EXERCISE
                    </Button>
                    <Button backgroundColor="white" fontSize={{base:"12px",md:"16px"}}>
                        <Image h={{base:"16px",md:"20px"}} src="https://cdn1.cronometer.com/brand/svg/add-biometric-icon.svg"/>
                        BIOMETRIC
                    </Button>
                    <Button backgroundColor="white" fontSize={{base:"12px",md:"16px"}}>
                        <Image h={{base:"16px",md:"20px"}} src="https://cdn1.cronometer.com/brand/svg/add-note-icon.svg"/>
                        NOTE
                    </Button>
                </Flex> */}
                 <HStack
                    spacing={20}
                    p={3}
                    flexWrap="wrap"
                    borderRadius="1rem"
                    bgColor="white"
                >
                    <DashList
                    src="https://cdn1.cronometer.com/brand/svg/add-food-icon.svg"
                    title="Food"
                    onClick={FoodModalClick}
                    />
                    {isFoodModalVisible && (
                    <FoodModal
                        isModalVisible={isFoodModalVisible}
                        setIsModalVisible={setIsFoodModalVisible}
                    />
                    )}
                    <DashList
                    src="https://cdn1.cronometer.com/brand/svg/add-exercise-icon.svg"
                    title="Exercise"
                    onClick={ExerciseModalClick}
                    />
                    {isExerciseModalVisible && (
                    <ExerciseModal
                        isModalVisible={isExerciseModalVisible}
                        setIsModalVisible={setIsExerciseModalVisible}
                    />
                    )}

                    <DashList
                    src="https://cdn1.cronometer.com/brand/svg/add-biometric-icon.svg"
                    title="Biometric"
                    onClick={BioModalClick}
                    />
                    {isBiometricModalVisible && (
                    <BiometricModal
                        isModalVisible={isBiometricModalVisible}
                        setIsModalVisible={setIsBiometricModalVisible}
                    />
                    )}

                    <DashList
                    src="https://cdn1.cronometer.com/brand/svg/add-note-icon.svg"
                    title="Notes"
                    onClick={() => {
                        setIsNotesModalVisible(true);
                    }}
                    />
                    {isNotesModalVisible && (
                    <NotesModal
                        isModalVisible={isNotesModalVisible}
                        setIsModalVisible={setIsNotesModalVisible}
                    />
                    )}
                </HStack>
                <Box mt="10px" w="100%" h="200px" p="15px" borderRadius="15px" border="1px solid #ccc">
                    <Text as="b">Add food, exercise, biometrics or notes to see them in your dairy.</Text>
                </Box>
            </Box>
            <Flex margin="auto" marginTop="30px" gap={{base:"10px",md:"30px",lg:"30px"}} flexDirection={{base:"column", md:"column",lg:"row"}}>
                <Box bgColor="white" boxShadow='md' borderRadius="15px" w={{base:"100%", md:"100%", lg:"50%"}} p="10px">
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
                <Box bgColor="white" boxShadow='md' borderRadius="15px" w={{base:"100%", md:"100%", lg:"50%"}} p="10px">
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
                        <Flex display={{base:"none",md:"none",lg:"flex"}} boxShadow='md' w="100%" gap="20px" border="1px solid #ccc" borderRadius="15px" p="10px" alignItems="center" justifyContent="center">
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
                    <Grid templateColumns={{base:"repeat(3,1fr)", md:"repeat(4,1fr)",lg:"repeat(8,1fr)"}} w={{base:"100%",md:"90%",lg:"100%"}}>
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
                    <Flex w={{base:"100%",md:"100%",lg:"50%"}} flexDirection="column" gap="10px">
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
                    <Flex w={{base:"100%",md:"100%",lg:"50%"}} flexDirection="column" gap="10px">
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
        </Box>
    )
}