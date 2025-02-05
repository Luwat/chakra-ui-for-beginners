import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import CheckIcon from "../icons/icon";

const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;

  return (
    <HStack as="li" gap="20px" {...rest}>
      <Icon as={CheckIcon} w="22px" h="22px" />
      <Text>{children}</Text>
    </HStack>
  );
};

const Pricing = () => {
  return (
    <Box
      w="994px"
      mx="auto"
      mt="-256px"
      borderRadius="12px"
      overflow="hidden"
      boxShadow={"0px 4px 12px rgba(0, 0, 0, 0.1)"}
    >
      <Flex>
        <Box bg="#F0EAFB" p="60px">
          <Text fontSize="24px" fontWeight={800}>
            Premium PRO
          </Text>
          <Heading as="h3" fontSize="60px" fontWeight={800} mt="32px">
            $329
          </Heading>
          <Text color="#171923" fontSize="18px" fontWeight="500" mt="16px">
            Billed just Once
          </Text>
          <Button colorPalette="purple" size="lg" w="282px" mt="24px">
            Get Started
          </Button>
        </Box>
        <Box p="60px" bg="white">
          <Text textAlign="left">
            Access these features when you get this pricing package for your
            business.
          </Text>
          <Stack as="ul" gap="20px" mt="24px">
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>Additional phone numbers</ListItem>
            <ListItem>Automated messages via Zapier</ListItem>
            <ListItem>24/7 support and consulting</ListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Pricing;
