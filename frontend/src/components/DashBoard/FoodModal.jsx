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
} from "@chakra-ui/react";
import ModalTable from "./ModalTable";

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
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const onClose = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      {/*<Button onClick={onOpen}>Open Modal</Button>*/}

      <Modal isOpen={isModalVisible} onClose={onClose} size="4xl"  >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Food To Diary</ModalHeader>
          <ModalCloseButton />
          <ModalBody w={"100%"} fontSize='md' >
            <Tabs size='lg'>
              <TabList>
                <Tab _selected={{ color: 'teal.500', borderBottomColor:'red'  }}  >All</Tab>
                <Tab _selected={{ color: 'teal.500', borderBottomColor:'red' }}  >Favourites</Tab>
                <Tab _selected={{ color: 'teal.500', borderBottomColor:'red' }}  >Common Foods</Tab>
                <Tab _selected={{ color: 'teal.500', borderBottomColor:'red' }}  >Supplements</Tab>
                <Tab _selected={{ color: 'teal.500', borderBottomColor:'red' }}  >Brands</Tab>
                <Tab _selected={{ color: 'teal.500', borderBottomColor:'red' }}  >Restaurants</Tab>
                <Tab _selected={{ color: 'teal.500', borderBottomColor:'red' }}  >Custom</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  {" "}
                  <ModalTable data={data} collapse={true} />
                </TabPanel>
                <TabPanel>
                  <ModalTable data={data} />
                </TabPanel>
                <TabPanel>
                  <ModalTable data={data} />
                </TabPanel>
                <TabPanel>
                  <ModalTable data={data} />
                </TabPanel>
                <TabPanel>
                  <ModalTable data={data} />
                </TabPanel>
                <TabPanel>
                  <ModalTable data={data} />
                </TabPanel>
                <TabPanel>
                  <ModalTable data={data} />
                </TabPanel>
              </TabPanels>
            </Tabs>
            <Box h="30vh">
             Hello this is box for details
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
