import { Container, Flex, Text, Button, HStack, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";

const Navbar = function () {
  const{ colorMode, toogleColorMode} = useColorMode();
  return ( 
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize="2xl"
          fontWeight="bold"
          bgGradient="linear(to-r, purple.400, pink.400)"
          bgClip="text"
          textTransform={"uppercase"}
          textAlign={"center"}
        >
          <Link to={"/"}>Product Store</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <CiSquarePlus fontSize={20} />
            </Button>
          </Link>
          <Button onClick ={toogleColorMode}>{colorMode === "light"? "🌙" : "☀️"}
              
            </Button>
        </HStack>
      </Flex>
    </Container>
  );
}

export default Navbar;