import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Button,
  HStack,
  Text,
  IconButton,
  VStack,
  Checkbox,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import ModalTable from "./ModalTable";
import { AiOutlineStar } from "react-icons/ai";
import FoodChart from "./FoodChart";
import Bullet from "./Bullet";
const data = [
  {
    desc: "banana",
    source: "NCCDB",
  },
  {
    desc: "tomato",
    source: "NCCDB",
  },
  {
    desc: "Alive",
    source: "NCCDB",
  },
  {
    desc: "Avacado",
    source: "NCCDB",
  },
  {
    desc: "Walnuts",
    source: "NCCDB",
  },
  {
    desc: "Tap water",
    source: "NCCDB",
  },
  {
    desc: "Blue berries",
    source: "NCCDB",
  },

  {
    desc: "Strawberies",
    source: "NCCDB",
  },
  {
    desc: "Brocoli",
    source: "NCCDB",
  },
  {
    desc: "Butter",
    source: "NCCDB",
  },
  {
    desc: "Orange",
    source: "NCCDB",
  },
];

export function FoodModal({ isModalVisible, setIsModalVisible }) {
  const [food, setFood] = useState("");
  const [data,setdata]=useState([])
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const addFood = (data) => {
    setFood(data);
    //  console.log(food)
  };
  const onClose = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Modal isOpen={isModalVisible} onClose={onClose} size={{base:'2xl',sm:'2xl',md:'3xl',lg:"4xl"}}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Food To Diary</ModalHeader>
          <ModalCloseButton />
          <ModalBody w={"100%"} fontSize={{base:'sm',md:"md"}}>
            <Tabs size={{base:'sm',md:"md"}}>
              <TabList display='flex' flexWrap='wrap'>
                <Tab
                  _selected={{ color: "teal.500", borderBottomColor: "red" }}
                >
                  All
                </Tab>
                <Tab
                  _selected={{ color: "teal.500", borderBottomColor: "red" }}
                >
                  Favourites
                </Tab>
                <Tab
                  _selected={{ color: "teal.500", borderBottomColor: "red" }}
                >
                  Common Foods
                </Tab>
                <Tab
                  _selected={{ color: "teal.500", borderBottomColor: "red" }}
                >
                  Supplements
                </Tab>
                <Tab
                  _selected={{ color: "teal.500", borderBottomColor: "red" }}
                >
                  Brands
                </Tab>
                <Tab
                  _selected={{ color: "teal.500", borderBottomColor: "red" }}
                >
                  Restaurants
                </Tab>
                <Tab
                  _selected={{ color: "teal.500", borderBottomColor: "red" }}
                >
                  Custom
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  {" "}
                  <ModalTable
                    data={data}
                    addFood={addFood}
                    collapse={food === "" ? false : true}
                  />
                  <Box p="rem" display={food === "" ? "none" : "block"}>
                    <HStack>
                      <Text w="90%" align={"center"} as="p">
                        {" "}
                        <IconButton
                          variant="ghost"
                          icon={<AiOutlineStar size={"20px"} />}
                        />
                        {food}{" "}
                      </Text>
                      <Button onClick={() => setFood("")} rounded={true}>
                        clear
                      </Button>
                    </HStack>
                    Hello this is box for details
                    <HStack spacing={20}>
                      <HStack>
                        <FoodChart
                          datas={[7, 25, 78]}
                          bgc={["yellow", "red", "green"]}
                          cal={89}
                          size={"35"}
                          sz={{ base: "100px", md: "100px" }}
                        />
                        <VStack alignItems={"left"}>
                          <HStack>
                            <Bullet />{" "}
                            <Text>
                              Protein: 14 g ({" "}
                              <Text as="span" color={"green"}>
                                78 %{" "}
                              </Text>
                              ){" "}
                            </Text>{" "}
                          </HStack>
                          <HStack>
                            <Bullet />
                            <Text>
                              {" "}
                              Net carbs: 5 g (
                              <Text as="span" color={"red"}>
                                15 %{" "}
                              </Text>
                              ){" "}
                            </Text>
                          </HStack>
                          <HStack>
                            {" "}
                            <Bullet />
                            <Text>
                              Fat: 0.6 g (
                              <Text as="span" color={"black"}>
                                7%{" "}
                              </Text>
                              )
                            </Text>{" "}
                          </HStack>
                        </VStack>
                      </HStack>
                      <HStack>
                        <VStack alignItems={"left"} spacing={10}>
                          <HStack spacing={10}>
                            {" "}
                            <Text>Time Of Day</Text> <Checkbox size={"lg"} />
                          </HStack>
                          <HStack>
                            {" "}
                            <Text>Serving Size</Text>{" "}
                            <Input
                              type="number"
                              htmlSize={2}
                              width="auto"
                              size="sm"
                              placeholder="1000 g"
                            />{" "}
                          </HStack>
                        </VStack>
                      </HStack>
                    </HStack>
                    <Stack m={5} alignItems={"center"}>
                      <Button colorScheme={"green"} borderEndRadius={"2px"}>
                        ADD TO DIARY
                      </Button>
                    </Stack>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <ModalTable data={data} />
                </TabPanel>
                <TabPanel>
                  <ModalTable
                    data={data}
                    addFood={addFood}
                    collapse={food === "" ? false : true}
                  />

                  {/* details */}
                  <Box p="rem" display={food === "" ? "none" : "block"}>
                    <HStack>
                      <Text w="90%" align={"center"} as="p">
                        {" "}
                        <IconButton
                          variant="ghost"
                          icon={<AiOutlineStar size={"20px"} />}
                        />
                        {food}{" "}
                      </Text>
                      <Button onClick={() => setFood("")} rounded={true}>
                        clear
                      </Button>
                    </HStack>
                    Hello this is box for details
                    <HStack spacing={20}>
                      <HStack>
                        <FoodChart
                          datas={[7, 25, 78]}
                          bgc={["yellow", "red", "green"]}
                          cal={89}
                          size={"35"}
                          sz={{ base: "100px", md: "100px" }}
                        />
                        <VStack alignItems={"left"}>
                          <HStack>
                            <Bullet />{" "}
                            <Text>
                              Protein: 14 g ({" "}
                              <Text as="span" color={"green"}>
                                78 %{" "}
                              </Text>
                              ){" "}
                            </Text>{" "}
                          </HStack>
                          <HStack>
                            <Bullet />
                            <Text>
                              {" "}
                              Net carbs: 5 g (
                              <Text as="span" color={"red"}>
                                15 %{" "}
                              </Text>
                              ){" "}
                            </Text>
                          </HStack>
                          <HStack>
                            {" "}
                            <Bullet />
                            <Text>
                              Fat: 0.6 g (
                              <Text as="span" color={"black"}>
                                7%{" "}
                              </Text>
                              )
                            </Text>{" "}
                          </HStack>
                        </VStack>
                      </HStack>
                      <HStack>
                        <VStack alignItems={"left"} spacing={10}>
                          <HStack spacing={10}>
                            {" "}
                            <Text>Time Of Day</Text> <Checkbox size={"lg"} />
                          </HStack>
                          <HStack>
                            {" "}
                            <Text>Serving Size</Text>{" "}
                            <Input
                              type="number"
                              htmlSize={2}
                              width="auto"
                              size="sm"
                              placeholder="1000 g"
                            />{" "}
                          </HStack>
                        </VStack>
                      </HStack>
                    </HStack>
                    <Stack m={5} alignItems={"center"}>
                      <Button colorScheme={"green"} borderEndRadius={"2px"}>
                        ADD TO DIARY
                      </Button>
                    </Stack>
                  </Box>
                  {/* ///// */}
                </TabPanel>
                <TabPanel>
                  <ModalTable
                    data={data}
                    addFood={addFood}
                    collapse={food === "" ? false : true}
                  />

                  {/* details */}

                  {/* ///// */}
                </TabPanel>
                <TabPanel>
                  <ModalTable
                    data={data}
                    addFood={addFood}
                    collapse={food === "" ? false : true}
                  />

                  {/* details */}
                  <Box p="rem" display={food === "" ? "none" : "block"}>
                    <HStack>
                      <Text w="90%" align={"center"} as="p">
                        {" "}
                        <IconButton
                          variant="ghost"
                          icon={<AiOutlineStar size={"20px"} />}
                        />
                        {food}{" "}
                      </Text>
                      <Button onClick={() => setFood("")} rounded={true}>
                        clear
                      </Button>
                    </HStack>
                    Hello this is box for details
                    <HStack spacing={20}>
                      <HStack>
                        <FoodChart
                          datas={[7, 25, 78]}
                          bgc={["yellow", "red", "green"]}
                          cal={89}
                          size={"35"}
                          sz={{ base: "100px", md: "100px" }}
                        />
                        <VStack alignItems={"left"}>
                          <HStack>
                            <Bullet />{" "}
                            <Text>
                              Protein: 14 g ({" "}
                              <Text as="span" color={"green"}>
                                78 %{" "}
                              </Text>
                              ){" "}
                            </Text>{" "}
                          </HStack>
                          <HStack>
                            <Bullet />
                            <Text>
                              {" "}
                              Net carbs: 5 g (
                              <Text as="span" color={"red"}>
                                15 %{" "}
                              </Text>
                              ){" "}
                            </Text>
                          </HStack>
                          <HStack>
                            {" "}
                            <Bullet />
                            <Text>
                              Fat: 0.6 g (
                              <Text as="span" color={"black"}>
                                7%{" "}
                              </Text>
                              )
                            </Text>{" "}
                          </HStack>
                        </VStack>
                      </HStack>
                      <HStack>
                        <VStack alignItems={"left"} spacing={10}>
                          <HStack spacing={10}>
                            {" "}
                            <Text>Time Of Day</Text> <Checkbox size={"lg"} />
                          </HStack>
                          <HStack>
                            {" "}
                            <Text>Serving Size</Text>{" "}
                            <Input
                              type="number"
                              htmlSize={2}
                              width="auto"
                              size="sm"
                              placeholder="1000 g"
                            />{" "}
                          </HStack>
                        </VStack>
                      </HStack>
                    </HStack>
                    <Stack m={5} alignItems={"center"}>
                      <Button colorScheme={"green"} borderEndRadius={"2px"}>
                        ADD TO DIARY
                      </Button>
                    </Stack>
                  </Box>
                  {/* ///// */}
                </TabPanel>
                <TabPanel>
                  <ModalTable
                    data={data}
                    addFood={addFood}
                    collapse={food === "" ? false : true}
                  />

                  {/* details */}
                  <Box p="rem" display={food === "" ? "none" : "block"}>
                    <HStack>
                      <Text w="90%" align={"center"} as="p">
                        {" "}
                        <IconButton
                          variant="ghost"
                          icon={<AiOutlineStar size={"20px"} />}
                        />
                        {food}{" "}
                      </Text>
                      <Button onClick={() => setFood("")} rounded={true}>
                        clear
                      </Button>
                    </HStack>
                    Hello this is box for details
                    <HStack spacing={20}>
                      <HStack>
                        <FoodChart
                          datas={[7, 25, 78]}
                          bgc={["yellow", "red", "green"]}
                          cal={89}
                          size={"35"}
                          sz={{ base: "100px", md: "100px" }}
                        />
                        <VStack alignItems={"left"}>
                          <HStack>
                            <Bullet />{" "}
                            <Text>
                              Protein: 14 g ({" "}
                              <Text as="span" color={"green"}>
                                78 %{" "}
                              </Text>
                              ){" "}
                            </Text>{" "}
                          </HStack>
                          <HStack>
                            <Bullet />
                            <Text>
                              {" "}
                              Net carbs: 5 g (
                              <Text as="span" color={"red"}>
                                15 %{" "}
                              </Text>
                              ){" "}
                            </Text>
                          </HStack>
                          <HStack>
                            {" "}
                            <Bullet />
                            <Text>
                              Fat: 0.6 g (
                              <Text as="span" color={"black"}>
                                7%{" "}
                              </Text>
                              )
                            </Text>{" "}
                          </HStack>
                        </VStack>
                      </HStack>
                      <HStack>
                        <VStack alignItems={"left"} spacing={10}>
                          <HStack spacing={10}>
                            {" "}
                            <Text>Time Of Day</Text> <Checkbox size={"lg"} />
                          </HStack>
                          <HStack>
                            {" "}
                            <Text>Serving Size</Text>{" "}
                            <Input
                              type="number"
                              htmlSize={2}
                              width="auto"
                              size="sm"
                              placeholder="1000 g"
                            />{" "}
                          </HStack>
                        </VStack>
                      </HStack>
                    </HStack>
                    <Stack m={5} alignItems={"center"}>
                      <Button colorScheme={"green"} borderEndRadius={"2px"}>
                        ADD TO DIARY
                      </Button>
                    </Stack>
                  </Box>
                  {/* ///// */}
                </TabPanel>
                <TabPanel>
                  <ModalTable
                    data={data}
                    addFood={addFood}
                    collapse={food === "" ? false : true}
                  />

                  {/* details */}
                  <Box p="rem" display={food === "" ? "none" : "block"}>
                    <HStack>
                      <Text w="90%" align={"center"} as="p">
                        {" "}
                        <IconButton
                          variant="ghost"
                          icon={<AiOutlineStar size={"20px"} />}
                        />
                        {food}{" "}
                      </Text>
                      <Button onClick={() => setFood("")} rounded={true}>
                        clear
                      </Button>
                    </HStack>
                    Hello this is box for details
                    <HStack spacing={20}>
                      <HStack>
                        <FoodChart
                          datas={[7, 25, 78]}
                          bgc={["yellow", "red", "green"]}
                          cal={89}
                          size={"35"}
                          sz={{ base: "100px", md: "100px" }}
                        />
                        <VStack alignItems={"left"}>
                          <HStack>
                            <Bullet />{" "}
                            <Text>
                              Protein: 14 g ({" "}
                              <Text as="span" color={"green"}>
                                78 %{" "}
                              </Text>
                              ){" "}
                            </Text>{" "}
                          </HStack>
                          <HStack>
                            <Bullet />
                            <Text>
                              {" "}
                              Net carbs: 5 g (
                              <Text as="span" color={"red"}>
                                15 %{" "}
                              </Text>
                              ){" "}
                            </Text>
                          </HStack>
                          <HStack>
                            {" "}
                            <Bullet />
                            <Text>
                              Fat: 0.6 g (
                              <Text as="span" color={"black"}>
                                7%{" "}
                              </Text>
                              )
                            </Text>{" "}
                          </HStack>
                        </VStack>
                      </HStack>
                      <HStack>
                        <VStack alignItems={"left"} spacing={10}>
                          <HStack spacing={10}>
                            {" "}
                            <Text>Time Of Day</Text> <Checkbox size={"lg"} />
                          </HStack>
                          <HStack>
                            {" "}
                            <Text>Serving Size</Text>{" "}
                            <Input
                              type="number"
                              htmlSize={2}
                              width="auto"
                              size="sm"
                              placeholder="1000 g"
                            />{" "}
                          </HStack>
                        </VStack>
                      </HStack>
                    </HStack>
                    <Stack m={5} alignItems={"center"}>
                      <Button colorScheme={"green"} borderEndRadius={"2px"}>
                        ADD TO DIARY
                      </Button>
                    </Stack>
                  </Box>
                  {/* ///// */}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
