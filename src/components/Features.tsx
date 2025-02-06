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
    <HStack {...rest} gap="24px" h='48px'>
      <Icon as={icon} boxSize="48px" />
      <Text textAlign="left" fontSize="18px" fontWeight="700" w='220px'>
        {children}
      </Text>
    </HStack>
  );
};

const Features = () => {
  return (
    <Box maxW="1024px" m='auto' pt="60px" pb='32px'>
      <HStack px="48px" gap='24px'>
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
