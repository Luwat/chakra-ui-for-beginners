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
import { CheckIcon } from "../icons/Icon";

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
    <Box mx="6">
      <Box
        w={["auto", "auto", "994px"]}
        mx="auto"
        mt="-256px"
        borderRadius="2xl"
        overflow="hidden"
        boxShadow={"0px 4px 12px rgba(0, 0, 0, 0.1)"}
      >
        <Flex direction={["column", "column", "row"]}>
          <Box bg="#F0EAFB" p="16" textAlign={"center"}>
            <Text fontSize={["3xl", "3xl", "4xl"]} fontWeight="extrabold">
              Premium PRO
            </Text>
            <Heading
              as="h3"
              fontSize={["5xl", "5xl", "6xl"]}
              fontWeight="extrabold"
              mt="8"
            >
              $329
            </Heading>
            <Text color="#171923" fontSize="lg" fontWeight="medium" mt="4">
              Billed just Once
            </Text>
              <Button
                colorPalette="purple"
                size="lg"
                px={["12", "16", "20"]}
                mt="6"
                alignSelf={"center"}
              >
                Get Started
              </Button>
          </Box>
          <Box p="16" bg="white">
            <Text textAlign="left">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" gap="5" mt="6">
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Pricing;
