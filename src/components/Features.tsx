import { HStack, Icon, Text, StackProps, Box, Stack } from "@chakra-ui/react";
import { ElementType } from "react";
import {
  HassleFreeIcon,
  MoneyBackGuaranteeIcon,
  MonthlySubscriptionIcon,
} from "../icons/Icon";

interface FeaturesProps extends StackProps {
  icon: ElementType;
}

const Feature = (props: FeaturesProps) => {
  const { icon, children, ...rest } = props;

  return (
    <HStack {...rest} gap="6">
      <Icon as={icon} boxSize={["8", "8", "12"]} />
      <Text textAlign="left" fontSize={["small", "sm", "lg"]} fontWeight="bold" w='56'>
        {children}
      </Text>
    </HStack>
  );
};

const Features = () => {
  return (
    <Box maxW="1024px" m='auto' pt="16" pb='8'>
      <Stack direction={["column", "column", "row"]} align={'center'} px="12" gap='6'>
        <Feature icon={MoneyBackGuaranteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={HassleFreeIcon}>
          No setup fees100% hassle-free
        </Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
};

export default Features;
