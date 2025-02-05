import { Box, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as={"section"} pb='112px'>
    <Box
      
      color={"#F7FAFC"}
      bg={"#6B46C1"}
      textAlign={"center"}
      pt={"90px"}
      pb={"198px"}
      px="32px"
    >
      <Heading fontSize={"48px"} fontWeight={800} pb="16px">
        Simple pricing for your business
      </Heading>
      <Text fontSize={"24px"} fontWeight={500} pt="16px">
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
    </Box>
  );
};

export default Header;
