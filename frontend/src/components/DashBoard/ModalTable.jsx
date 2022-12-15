import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
}
from '@chakra-ui/react'

export default function ModalTable({data}){
    return <TableContainer height='50vh' overflowY={'scroll'}   css={{
     '&::-webkit-scrollbar': {
       width: '12px',
     },
     '&::-webkit-scrollbar-track': {
       width: '6px',
       borderRadius: '2rem',
       border:'1px solid grey',
     },
     '&::-webkit-scrollbar-thumb': {
       background: 'grey',
       borderRadius: '2rem',
     },
   }}>
     <Table variant='striped' colorScheme='gray'>
       <Thead>
         <Tr>
           <Th width={'80%'}>Description</Th>
           <Th>Source</Th>
         </Tr>
       </Thead>
       <Tbody>
         {
             data.map((el,i)=>
             <Tr key={el.desc+i}>
                 <Td>{el.desc}</Td>
                 <Td>{el.source}</Td>
             </Tr>)
         }
         {/* <Tr>
           <Td>inches</Td>
           <Td>millimetres (mm)</Td>
         </Tr>
         <Tr>
           <Td>feet</Td>
           <Td>centimetres (cm)</Td>
         </Tr>
         <Tr>
           <Td>yards</Td>
           <Td>metres (m)</Td>
         </Tr>
         <Tr>
           <Td>yards</Td>
           <Td>metres (m)</Td>
         </Tr>        <Tr>
           <Td>yards</Td>
           <Td>metres (m)</Td>
         </Tr>        <Tr>
           <Td>yards</Td>
           <Td>metres (m)</Td>
         </Tr>        <Tr>
           <Td>yards</Td>
           <Td>metres (m)</Td>
         </Tr>        <Tr>
           <Td>yards</Td>
           <Td>metres (m)</Td>
         </Tr>        <Tr>
           <Td>yards</Td>
           <Td>metres (m)</Td>
         </Tr>        <Tr>
           <Td>yards</Td>
           <Td>metres (m)</Td>
         </Tr>        <Tr>
           <Td>yards</Td>
           <Td>metres (m)</Td>
         </Tr>        <Tr>
           <Td>yards</Td>
           <Td>metres (m)</Td>
         </Tr> */}
       </Tbody>
     </Table>
   </TableContainer>
   }