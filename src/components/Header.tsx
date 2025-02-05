import { Box, Heading, Text } from '@chakra-ui/react'

const Header = () => {
  return (
    <Box color={"#F7FAFC"} bg={"#6B46C1"} textAlign={"center"} pt={"90px"} pb={"198px"}>
        <Heading fontSize={"48px"} fontWeight={800}>Simple pricing for your business</Heading>
        <Text fontSize={"24px"} fontWeight={500}>Plans that are carefully crafted to suit your business.</Text>
    </Box>
  )
}

export default Header
