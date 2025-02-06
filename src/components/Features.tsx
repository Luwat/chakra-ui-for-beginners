import { HStack, Icon, Text, StackProps, Box } from "@chakra-ui/react";
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
    <HStack {...rest} gap="6" h='12'>
      <Icon as={icon} boxSize="12" />
      <Text textAlign="left" fontSize="lg" fontWeight="bold" w='56'>
        {children}
      </Text>
    </HStack>
  );
};

const Features = () => {
  return (
    <Box maxW="1024px" m='auto' pt="16" pb='8'>
      <HStack px="12" gap='6'>
        <Feature icon={MoneyBackGuaranteeIcon}>
          30 days money back <br />
          Guarantee
        </Feature>
        <Feature icon={HassleFreeIcon}>
          No setup fees100% <br />
          hassle-free
        </Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription <br />
          Pay once and for all
        </Feature>
      </HStack>
    </Box>
  );
};

export default Features;
