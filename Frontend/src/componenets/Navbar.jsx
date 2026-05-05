import {Container } from "@chakra-ui/react";

function Navbar() {
  return <Container maxh={"1140px"} px={4}>
    <Flex 
    h={16}
    alignItems={"center"}
    justifyContent= {"space-between"}
    flexdir= {{
      base:"column",
      sm: "row"
    }}
    >
    </Flex>
  </Container>;
};

export default Navbar;