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

export default function ModalTable({data,collapse,searcheck}){
  const datacheck=(val)=>{
    searcheck(val)
    
    // console.log(val,"print")
  }
    return <TableContainer height={collapse?'20vh':'50vh'} overflowY={'scroll'}   css={{
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
                 <Td onClick={()=>{datacheck(el.desc)}}>{el.desc}</Td>
                 <Td>{el.source}</Td>
             </Tr>)
         }
       </Tbody>
     </Table>
   </TableContainer>
   }