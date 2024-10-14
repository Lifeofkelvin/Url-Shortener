import Logo from "/assets/images/logo.svg";
import { FaBars } from "react-icons/fa";
import {
  Box,
  Button,
  Flex,
  Image,
  List,
  ListItem,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

const Header = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        w={{ base: "100%", md: "90%" }}
        p={"20px"}
      >
        <Image src={Logo} alt="Short" w={{ base: "70px", md: "110px" }} />
        <Box display={{ base: "flex", md: "none" }}>
          <FaBars onClick={onToggle} />
        </Box>
        <Flex
          justifyContent={"space-between"}
          w={"80%"}
          display={{ base: "none", md: "flex" }}
        >
          <List display={"flex"} alignItems={"center"} gap={"20px"}>
            <ListItem
              fontSize={{ base: "12px", md: "15px" }}
              fontWeight={"bold"}
              color={"hsl(257, 7%, 63%)"}
              cursor={"pointer"}
              _hover={{
                color: "hsl(260, 8%, 14%)",
              }}
            >
              Features
            </ListItem>
            <ListItem
              fontSize={{ base: "12px", md: "15px" }}
              fontWeight={"bold"}
              color={"hsl(257, 7%, 63%)"}
              cursor={"pointer"}
              _hover={{
                color: "hsl(260, 8%, 14%)",
              }}
            >
              Pricing
            </ListItem>
            <ListItem
              fontSize={{ base: "12px", md: "15px" }}
              fontWeight={"bold"}
              color={"hsl(257, 7%, 63%)"}
              cursor={"pointer"}
              _hover={{
                color: "hsl(260, 8%, 14%)",
              }}
            >
              Resources
            </ListItem>
          </List>
          <List display={"flex"} alignItems={"center"} gap={"20px"}>
            <Button
              fontSize={{ base: "12px", md: "15px" }}
              fontWeight={"bold"}
              color={"hsl(257, 7%, 63%)"}
              background={"transparent"}
              borderRadius={"25px"}
              _hover={{
                backgroundColor: "hsl(180, 66%, 70%)",
                color: "black",
              }}
            >
              Login
            </Button>
            <Button
              fontSize={{ base: "12px", md: "15px" }}
              fontWeight={"bold"}
              color={"white"}
              backgroundColor={"hsl(180, 66%, 49%)"}
              p={"5px 10px"}
              borderRadius={"25px"}
              _hover={{
                backgroundColor: "hsl(180, 66%, 70%)",
                color: "black",
              }}
            >
              Sign Up
            </Button>
          </List>
        </Flex>
        {isMobile && isOpen && (
          <Box
            position={"absolute"}
            top={"3%"}
            w={"100%"}
            left={"50%"}
            transform={"translate(-50%, 0%)"}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <Box
              w={"80%"}
              background={{ base: "hsla(257, 51.70%, 17.10%, 0.89)", md: "none" }}
              zIndex={1}
              borderRadius={"20px"}
              gap={"20px"}
              p={4}
            >
              <List
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
                gap={4}
                borderBottom={"2px solid gray"}
                pb={"20px"}
              >
                <ListItem
                  fontSize={{ base: "12px", md: "15px" }}
                  fontWeight={"bold"}
                  color={"hsl(257, 7%, 63%)"}
                  cursor={"pointer"}
                  onClick={onClose}
                  _hover={{
                    color: "hsl(260, 8%, 14%)",
                  }}
                >
                  Features
                </ListItem>
                <ListItem
                  fontSize={{ base: "12px", md: "15px" }}
                  fontWeight={"bold"}
                  color={"hsl(257, 7%, 63%)"}
                  cursor={"pointer"}
                  onClick={onClose}
                  _hover={{
                    color: "hsl(260, 8%, 14%)",
                  }}
                >
                  Pricing
                </ListItem>
                <ListItem
                  fontSize={{ base: "12px", md: "15px" }}
                  fontWeight={"bold"}
                  color={"hsl(257, 7%, 63%)"}
                  cursor={"pointer"}
                  onClick={onClose}
                  _hover={{
                    color: "hsl(260, 8%, 14%)",
                  }}
                >
                  Resources
                </ListItem>
              </List>
              <Box display={"flex"} flexDirection={"column"} p={"10px"}>
                <Button
                  fontSize={{ base: "12px", md: "15px" }}
                  fontWeight={"bold"}
                  color={"hsl(257, 7%, 63%)"}
                  background={"transparent"}
                  borderRadius={"25px"}
                  onClick={onClose}
                >
                  Login
                </Button>
                <Button
                  fontSize={{ base: "12px", md: "15px" }}
                  fontWeight={"bold"}
                  color={"white"}
                  background={"transparent"}
                  p={"5px 10px"}
                  borderRadius={"25px"}
                  onClick={onClose}
                >
                  Sign Up
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Header;
