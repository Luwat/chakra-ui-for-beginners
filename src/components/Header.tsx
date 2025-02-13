import { Box, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as={"section"} pb='28'>
    <Box
      color={"gray.50"}
      bg={"purple.600"}
      textAlign={["left", "left", "center"]}
      pt={"90px"}
      pb={"198px"}
      px="8"
    >
      <Heading fontSize={["3xl", "3xl", "5xl"]} fontWeight={'extrabold'} pb="4">
        Simple pricing for your business
      </Heading>
      <Text fontSize={["lg", "lg", "2xl"]} fontWeight={'medium'} pt="4">
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
    </Box>
  );
};

export default Header;
