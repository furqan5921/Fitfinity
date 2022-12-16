import {Doughnut} from "react-chartjs-2"
import {Chart, ArcElement, Tooltip, Legend} from 'chart.js'
import { Box, Flex, Text } from "@chakra-ui/react"
Chart.register(ArcElement, Tooltip, Legend)



export default function Chart1({datas,bgc,sz}) {


    return (
        <Box w={sz} h={sz} position="relative">
            <Doughnut data={{
                labels: [],
                datasets: [{
                    data: datas,
                    backgroundColor: bgc
                }],
                borderWidth: 1,
                }}                
            />
            <Flex position="absolute" top="5px" zIndex="1" w="100%" h="100%" alignItems="center" justifyContent="center" flexDirection="column" fontSize="12px">
            <Text>1000</Text>
            <Text>kcal</Text>
            </Flex>
        </Box>
    )
}