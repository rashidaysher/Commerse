import { Container, Flex, Text, Button, HStack, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import {IoMoon } from "react-icons/io5";
import {LuSun } from "react-icons/lu";

function Navbar () {
  const{ colorMode, toogleColorMode} = useColorModeValue("gray.100", "gray.900");
  return ( 
    <Container maxW={"1140px"} px={4.2}>
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
          <Button onClick ={toogleColorMode}>
            {colorMode === "light" ? <IoMoon/> : <LuSun size="20"/>}
              
            </Button>
        </HStack>
      </Flex>
    </Container>
  );
}

export default Navbar;