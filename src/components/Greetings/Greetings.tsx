import { Link } from "react-router-dom";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import Card from "@UI/Card/Card";
import { BiRightArrowAlt } from "react-icons/bi";
import { ReactComponent as SadIcon } from "@/assets/icons/forcards/harm-disappointed-face.svg";
import { ReactComponent as Circles } from "@/assets/images/circles.svg";

const Greetings = () => {
  const Body = () => (
    <>
      <Text fontWeight="700">WHY AND WHAT TO DO?</Text>
      <Text>
        Health warnings of emergency conditions. The entire population is more
        likely to be affected.
      </Text>
      <Link to="/map">
        <Flex alignItems="center" justifyContent="flex-end" color="gray.950">
          <Text fontWeight="700">Detailed Information</Text>
          <Icon width="40px" height="30px" as={BiRightArrowAlt} />
        </Flex>
      </Link>
    </>
  );

  return (
    <Flex
      p="140px 80px 0 80px"
      direction="column"
      gap="32px"
      alignItems="flex-end"
      position="relative"
    >
      <Box zIndex="1" position="absolute" top="-25px" right="125px">
        <Circles />
      </Box>
      <Box zIndex="10" maxWidth="400">
        <Card
          color="red"
          subheading="Air Quality tip"
          heading="Very poor air"
          icon="harm-disappointed-face"
        >
          <Body />
        </Card>
      </Box>
    </Flex>
  );
};

export default Greetings;
