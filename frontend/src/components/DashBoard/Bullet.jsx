import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Bullet() {
  return (
    <Box
    as="div"
    h="12px"
    w="12px"
    position="relative"
    bgColor={'green'}
    borderRadius="50%"
  />
  )
}

