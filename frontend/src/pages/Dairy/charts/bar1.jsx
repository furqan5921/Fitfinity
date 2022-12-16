import { Box, Flex, Progress, Text } from "@chakra-ui/react";




export default function Bar1({barval,barpercent,clr}) {


    return (
        <Box w="100%" position="relative">
            <Progress colorScheme={clr} size='lg' value={barval} borderRadius="10px"/>
            <Flex position="absolute" top="0" w="100%" justifyContent="center">
                <Text fontSize="12px">{barpercent}</Text>
            </Flex>
        </Box>
    )
}