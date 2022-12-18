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
import { useSelector,useDispatch } from "react-redux";
import { adddata } from "../../redux/userdatareducer/action";


export function FoodModal({ isModalVisible, setIsModalVisible }) {
  const dispatch = useDispatch();
  const [food, setFood]= useState({});
  const data = useSelector(el=>el.data.datas)


  const addFood = (data) => {
    setFood(data);
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
              </TabList>

              <TabPanels>
                <TabPanel>
                  {" "}
                  <ModalTable
                    data={data}
                    addFood={addFood}
                    collapse={food.name === undefined ? false : true}
                    flag=""
                  />
                  <Box p="rem" display={food.name === undefined ? "none" : "block"}>
                    <HStack>
                      <Text w="90%" align={"center"} as="p">
                        {" "}
                        <IconButton
                          variant="ghost"
                          icon={<AiOutlineStar size={"20px"} />}
                        />
                        {food.name}
                      </Text>
                      <Button onClick={() => setFood({})} rounded={true}>
                        clear
                      </Button>
                    </HStack>
                    Hello this is box for details
                    <HStack spacing={20}>
                      <HStack>
                        <FoodChart
                          datas={food.name!==undefined && [food.protein.split("-")[0],food.carbs.split("-")[0],food.fat.split("-")[0]]}
                          bgc={["yellow", "red", "green"]}
                          cal={food?.energy}
                          size={"35"}
                          sz={{ base: "100px", md: "100px" }}
                        />
                        <VStack alignItems={"left"}>
                          <HStack>
                            <Bullet />{" "}
                            <Text>
                              Protein: {food.name!==undefined && food.protein.split("-")[1]}g ({" "}
                              <Text as="span" color={"green"}>
                                {food.name!==undefined && food.protein.split("-")[0]}% {" "}
                              </Text>
                              ){" "}
                            </Text>{" "}
                          </HStack>
                          <HStack>
                            <Bullet />
                            <Text>
                              {" "}
                              Net carbs: {food.name!==undefined && food.carbs.split("-")[1]}g (
                              <Text as="span" color={"red"}>
                                {food.name!==undefined && food.carbs.split("-")[0]}% {" "}
                              </Text>
                              ){" "}
                            </Text>
                          </HStack>
                          <HStack>
                            {" "}
                            <Bullet />
                            <Text>
                              Fat: {food.name!==undefined && food.fat.split("-")[1]}g (
                              <Text as="span" color={"black"}>
                                {food.name!==undefined && food.fat.split("-")[0]}%{" "}
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
                      <Button colorScheme={"green"} borderEndRadius={"2px"} onClick={()=>dispatch(adddata(food))}>
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
                    collapse={food.name === undefined ? false : true}
                    flag="all"
                  />

                  {/* details */}
                  <Box p="rem" display={food.name === undefined ? "none" : "block"}>
                    <HStack>
                      <Text w="90%" align={"center"} as="p">
                        {" "}
                        <IconButton
                          variant="ghost"
                          icon={<AiOutlineStar size={"20px"} />}
                        />
                        {food.name}
                      </Text>
                      <Button onClick={() => setFood({})} rounded={true}>
                        clear
                      </Button>
                    </HStack>
                    Hello this is box for details
                    <HStack spacing={20}>
                      <HStack>
                        <FoodChart
                          datas={food.name!==undefined && [food.protein.split("-")[0],food.carbs.split("-")[0],food.fat.split("-")[0]]}
                          bgc={["yellow", "red", "green"]}
                          cal={food?.energy}
                          size={"35"}
                          sz={{ base: "100px", md: "100px" }}
                        />
                        <VStack alignItems={"left"}>
                          <HStack>
                            <Bullet />{" "}
                            <Text>
                              Protein: {food.name!==undefined && food.protein.split("-")[1]}g ({" "}
                              <Text as="span" color={"green"}>
                                {food.name!==undefined && food.protein.split("-")[0]}% {" "}
                              </Text>
                              ){" "}
                            </Text>{" "}
                          </HStack>
                          <HStack>
                            <Bullet />
                            <Text>
                              {" "}
                              Net carbs: {food.name!==undefined && food.carbs.split("-")[1]}g (
                              <Text as="span" color={"red"}>
                                {food.name!==undefined && food.carbs.split("-")[0]}% {" "}
                              </Text>
                              ){" "}
                            </Text>
                          </HStack>
                          <HStack>
                            {" "}
                            <Bullet />
                            <Text>
                              Fat: {food.name!==undefined && food.fat.split("-")[1]}g (
                              <Text as="span" color={"black"}>
                                {food.name!==undefined && food.fat.split("-")[0]}%{" "}
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
                    collapse={food.name === undefined ? false : true}
                    flag="supli"
                  />

                  {/* details */}
                  <Box p="rem" display={food.name === undefined ? "none" : "block"}>
                    <HStack>
                      <Text w="90%" align={"center"} as="p">
                        {" "}
                        <IconButton
                          variant="ghost"
                          icon={<AiOutlineStar size={"20px"} />}
                        />
                        {food.name}{" "}
                      </Text>
                      <Button onClick={() => setFood({})} rounded={true}>
                        clear
                      </Button>
                    </HStack>
                    Hello this is box for details
                    <HStack spacing={20}>
                      <HStack>
                        <FoodChart
                          datas={food.name!==undefined && [food.protein.split("-")[0],food.carbs.split("-")[0],food.fat.split("-")[0]]}
                          bgc={["yellow", "red", "green"]}
                          cal={food?.energy}
                          size={"35"}
                          sz={{ base: "100px", md: "100px" }}
                        />
                        <VStack alignItems={"left"}>
                          <HStack>
                            <Bullet />{" "}
                            <Text>
                              Protein: {food.name!==undefined && food.protein.split("-")[1]}g ({" "}
                              <Text as="span" color={"green"}>
                                {food.name!==undefined && food.protein.split("-")[0]}% {" "}
                              </Text>
                              ){" "}
                            </Text>{" "}
                          </HStack>
                          <HStack>
                            <Bullet />
                            <Text>
                              {" "}
                              Net carbs: {food.name!==undefined && food.carbs.split("-")[1]}g (
                              <Text as="span" color={"red"}>
                                {food.name!==undefined && food.carbs.split("-")[0]}% {" "}
                              </Text>
                              ){" "}
                            </Text>
                          </HStack>
                          <HStack>
                            {" "}
                            <Bullet />
                            <Text>
                              Fat: {food.name!==undefined && food.fat.split("-")[1]}g (
                              <Text as="span" color={"black"}>
                                {food.name!==undefined && food.fat.split("-")[0]}%{" "}
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
                    collapse={food.name === undefined ? false : true}
                    flag="brands"
                  />

                  {/* details */}
                  <Box p="rem" display={food.name === undefined ? "none" : "block"}>
                    <HStack>
                      <Text w="90%" align={"center"} as="p">
                        {" "}
                        <IconButton
                          variant="ghost"
                          icon={<AiOutlineStar size={"20px"} />}
                        />
                        {food.name}
                      </Text>
                      <Button onClick={() => setFood({})} rounded={true}>
                        clear
                      </Button>
                    </HStack>
                    Hello this is box for details
                    <HStack spacing={20}>
                      <HStack>
                        <FoodChart
                          datas={food.name!==undefined && [food.protein.split("-")[0],food.carbs.split("-")[0],food.fat.split("-")[0]]}
                          bgc={["yellow", "red", "green"]}
                          cal={food?.energy}
                          size={"35"}
                          sz={{ base: "100px", md: "100px" }}
                        />
                        <VStack alignItems={"left"}>
                          <HStack>
                            <Bullet />{" "}
                            <Text>
                              Protein: {food.name!==undefined && food.protein.split("-")[1]}g ({" "}
                              <Text as="span" color={"green"}>
                                {food.name!==undefined && food.protein.split("-")[0]}% {" "}
                              </Text>
                              ){" "}
                            </Text>{" "}
                          </HStack>
                          <HStack>
                            <Bullet />
                            <Text>
                              {" "}
                              Net carbs: {food.name!==undefined && food.carbs.split("-")[1]}g (
                              <Text as="span" color={"red"}>
                                {food.name!==undefined && food.carbs.split("-")[0]}% {" "}
                              </Text>
                              ){" "}
                            </Text>
                          </HStack>
                          <HStack>
                            {" "}
                            <Bullet />
                            <Text>
                              Fat: {food.name!==undefined && food.fat.split("-")[1]}g (
                              <Text as="span" color={"black"}>
                                {food.name!==undefined && food.fat.split("-")[0]}%{" "}
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
                    collapse={food.name === undefined ? false : true}
                    flag="rest"
                  />

                  {/* details */}
                  <Box p="rem" display={food.name === undefined ? "none" : "block"}>
                    <HStack>
                      <Text w="90%" align={"center"} as="p">
                        {" "}
                        <IconButton
                          variant="ghost"
                          icon={<AiOutlineStar size={"20px"} />}
                        />
                        {food.name}{" "}
                      </Text>
                      <Button onClick={() => setFood({})} rounded={true}>
                        clear
                      </Button>
                    </HStack>
                    Hello this is box for details
                    <HStack spacing={20}>
                      <HStack>
                        <FoodChart
                          datas={food.name!==undefined && [food.protein.split("-")[0],food.carbs.split("-")[0],food.fat.split("-")[0]]}
                          bgc={["yellow", "red", "green"]}
                          cal={food?.energy}
                          size={"35"}
                          sz={{ base: "100px", md: "100px" }}
                        />
                        <VStack alignItems={"left"}>
                          <HStack>
                            <Bullet />{" "}
                            <Text>
                              Protein: {food.name!==undefined && food.protein.split("-")[1]}g ({" "}
                              <Text as="span" color={"green"}>
                                {food.name!==undefined && food.protein.split("-")[0]}% {" "}
                              </Text>
                              ){" "}
                            </Text>{" "}
                          </HStack>
                          <HStack>
                            <Bullet />
                            <Text>
                              {" "}
                              Net carbs: {food.name!==undefined && food.carbs.split("-")[1]}g (
                              <Text as="span" color={"red"}>
                                {food.name!==undefined && food.carbs.split("-")[0]}% {" "}
                              </Text>
                              ){" "}
                            </Text>
                          </HStack>
                          <HStack>
                            {" "}
                            <Bullet />
                            <Text>
                              Fat: {food.name!==undefined && food.fat.split("-")[1]}g (
                              <Text as="span" color={"black"}>
                                {food.name!==undefined && food.fat.split("-")[0]}%{" "}
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
