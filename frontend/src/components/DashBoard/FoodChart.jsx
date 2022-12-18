import {Doughnut} from "react-chartjs-2"
import {Chart, ArcElement, Tooltip, Legend} from 'chart.js'
import { Box, Flex, Text } from "@chakra-ui/react"
Chart.register(ArcElement, Tooltip, Legend)



export default function FoodChart({datas,bgc,sz,size,cal}) {


    return (
        <Box w={sz} h={sz} position="relative">
            <Doughnut data={{
                labels: [],
                datasets: [{
                    data: datas,
                    cutout:size,
                    backgroundColor: bgc
                }],
                borderWidth: 1,
                }}                
            />
            <Flex position="absolute" top="5px" zIndex="1" w="100%" h="100%" alignItems="center" justifyContent="center" flexDirection="column" fontSize="12px">
            <Text>{cal}</Text>
            <Text>kcal</Text>
            </Flex>
        </Box>
    )
}