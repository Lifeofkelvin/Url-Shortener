import { Box, Flex, Heading, Image, List, ListItem } from "@chakra-ui/react";

import Facebook from "../../../public/assets/images/icon-facebook.svg";
import FooterLogo from "../../../public/assets/images/logo.svg";
import Twitter from "../../../public/assets/images/icon-twitter.svg";
import Pinterest from "../../../public/assets/images/icon-pinterest.svg";
import Instagram from "../../../public/assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        w={"100%"}
        color={"#d3cdcd"}
        bgColor={"hsl(260, 8%, 14%)"}
        p={"30px 15px"}
      >
        <Flex
          alignItems={{ base: "center", md: "flex-start" }}
          flexDir={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          w={"90%"}
        >
          <Box mb={{ base: "2rem", md: "0px" }}>
            <Image src={FooterLogo} filter="invert(1)" />
          </Box>
          <Flex
            w={"60%"}
            alignItems={{ base: "center", md: "flex-start" }}
            flexDir={{ base: "column", md: "row" }}
            justifyContent={"space-between"}
            gap={{ base: "20px", md: "0px" }}
          >
            <Box
              display={"flex"}
              flexDir={"column"}
              alignItems={{ base: "center", md: "flex-start" }}
              gap={{ base: "10px", md: "25px" }}
            >
              <Heading fontSize={{ base: "15px", md: "20px" }}>
                Features
              </Heading>
              <List
                display={"flex"}
                flexDir={"column"}
                alignItems={{ base: "center", md: "flex-start" }}
                gap={{ base: "5px", md: "10px" }}
              >
                <ListItem
                  cursor={"pointer"}
                  fontSize={{ base: "10px", md: "15px" }}
                  fontWeight={"600"}
                >
                  Link Shortening
                </ListItem>
                <ListItem
                  cursor={"pointer"}
                  fontSize={{ base: "10px", md: "15px" }}
                  fontWeight={"600"}
                >
                  Branded Links
                </ListItem>
                <ListItem
                  cursor={"pointer"}
                  fontSize={{ base: "10px", md: "15px" }}
                  fontWeight={"600"}
                >
                  Analytics
                </ListItem>
              </List>
            </Box>
            <Box
              display={"flex"}
              flexDir={"column"}
              alignItems={{ base: "center", md: "flex-start" }}
              gap={{ base: "10px", md: "25px" }}
            >
              <Heading fontSize={{ base: "15px", md: "20px" }}>
                Resources
              </Heading>
              <List
                display={"flex"}
                flexDir={"column"}
                alignItems={{ base: "center", md: "flex-start" }}
                gap={{ base: "5px", md: "10px" }}
              >
                <ListItem
                  cursor={"pointer"}
                  fontSize={{ base: "10px", md: "15px" }}
                  fontWeight={"600"}
                >
                  Blog
                </ListItem>
                <ListItem
                  cursor={"pointer"}
                  fontSize={{ base: "10px", md: "15px" }}
                  fontWeight={"600"}
                >
                  Developers
                </ListItem>
                <ListItem
                  cursor={"pointer"}
                  fontSize={{ base: "10px", md: "15px" }}
                  fontWeight={"600"}
                >
                  Support
                </ListItem>
              </List>
            </Box>
            <Box
              display={"flex"}
              flexDir={"column"}
              alignItems={{ base: "center", md: "flex-start" }}
              gap={{ base: "10px", md: "25px" }}
            >
              <Heading fontSize={{ base: "15px", md: "20px" }}>Company</Heading>
              <List
                display={"flex"}
                flexDir={"column"}
                alignItems={{ base: "center", md: "flex-start" }}
                gap={{ base: "5px", md: "10px" }}
              >
                <ListItem
                  cursor={"pointer"}
                  fontSize={{ base: "10px", md: "15px" }}
                  fontWeight={"600"}
                >
                  About
                </ListItem>
                <ListItem
                  cursor={"pointer"}
                  fontSize={{ base: "10px", md: "15px" }}
                  fontWeight={"600"}
                >
                  Our Team
                </ListItem>
                <ListItem
                  cursor={"pointer"}
                  fontSize={{ base: "10px", md: "15px" }}
                  fontWeight={"600"}
                >
                  Career
                </ListItem>
                <ListItem
                  cursor={"pointer"}
                  fontSize={{ base: "10px", md: "15px" }}
                  fontWeight={"600"}
                >
                  Contact
                </ListItem>
              </List>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={"15px"}>
              <Image src={Facebook} w={{ base: "15px", md: "25px" }} />
              <Image src={Twitter} w={{ base: "15px", md: "25px" }} />
              <Image src={Pinterest} w={{ base: "15px", md: "25px" }} />
              <Image src={Instagram} w={{ base: "15px", md: "25px" }} />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
