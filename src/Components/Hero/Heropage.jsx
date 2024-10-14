import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Image,
  Input,
  Text,
  Toast,
  useToast,
} from "@chakra-ui/react";
import HeroImage from "../../../public/assets/images/illustration-working.svg";
import MobileBgImage from "../../../public/assets/images/bg-shorten-mobile.svg";
import DesktopBgImage from "../../../public/assets/images/bg-shorten-desktop.svg";

import { useState } from "react";
import axios from "axios";

const Heropage = () => {
  const [link, setLink] = useState("");
  const [error, setError] = useState(null);
  const [shortLink, setShortLink] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!link) {
      setError("Please add a link");
    } else {
      setError(null);
      setLoading(true);
      try {
        const response = await axios.post(
          "https://cleanuri.com/api/v1/shorten",
          {
            url: link,
          }
        );
        setShortLink(response.data.result_url);
        setLoading(false);
        toast({
          title: "Link shortened successfully!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } catch (error) {
        setLoading(false);
        setError("Failed to shorten link. Please try again.");
      }
    }
  };

  return (
    <>
     
      <Flex
        flexDirection={{ base: "column-reverse", md: "row" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        w={{ base: "100%", md: "95%" }}
        p={"20px"}
        mt={"2rem"}
        gap={{ base: "35px", md: "0px" }}
      >
        
        <Box
          w={{ base: "300px", md: "450px" }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={{ base: "center", md: "left" }}
          gap={{ base: "15px", md: "30px" }}
        >
          
          <Box textAlign={{ base: "center", md: "left" }}>
            <Heading
              fontSize={{ base: "30px", md: "50px" }}
              fontWeight={"bold"}
              letterSpacing={"2px"}
            >
              More than just shorter links
            </Heading>
            <Text
              color={"hsl(257, 7%, 63%)"}
              fontSize={{ base: "15px", md: "18px" }}
            >
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </Text>
          </Box>

          <Button
            display={"flex"}
            alignSelf={{ base: "center", md: "flex-start" }}
            justifyContent={{ base: "center", md: "center" }}
            textAlign={"center"}
            w={{ base: "70%", md: "40%" }}
            color={"white"}
            backgroundColor={"hsl(180, 66%, 49%)"}
            borderRadius={"30px"}
            _hover={{
              backgroundColor: "hsl(180, 66%, 70%)",
              color: "black",
            }}
          >
            Get Started
          </Button>
        </Box>

        
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Image
            src={HeroImage}
            alt="hero-img"
            w={{ base: "300px", md: "500px" }}
          />
        </Box>
      </Flex>

    
      <Box
        mt={"30px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        w={{ base: "80%", md: "60%" }}
        p={{ base: "20px 15px", md: "30px" }}
        h={{base: '200px', md:'100px'}}
        borderRadius={"10px"}
        bgImage={{
          base: `url(${MobileBgImage})`,
          md: `url(${DesktopBgImage})`,
        }}
        bgColor={"hsl(257, 27%, 26%)"}
        bgSize={"cover"}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
      >
        <FormControl
          display={"flex"}
          gap={"30px"}
          flexDirection={{ base: "column", md: "row" }}
          isInvalid={error}
        >
          <Box w={"full"}>
            <Input
              type="text"
              placeholder={
                error ? "Add a link please..." : "Shorten a link here..."
              }
              bgColor={"white"}
              border={error ? "3px solid hsl(0, 87%, 67%)" : "none"}
              outline={"none"}
              p={"10px"}
              value={link}
              onChange={(event) => setLink(event.target.value)}
              _focus={{
                borderColor: error ? "hsl(0, 87%, 67%)" : "transparent",
                boxShadow: "none",
              }}
              _active={{
                borderColor: error ? "hsl(0, 87%, 67%)" : "transparent",
                boxShadow: "none",
              }}
              _placeholder={{ color: error ? "hsl(0, 87%, 67%)" : "gray.400" }}
            />

            <FormErrorMessage>{error}</FormErrorMessage>
          </Box>

          <Button
            w={{ base: "100%", md: "30%" }}
            color={"white"}
            backgroundColor={"hsl(180, 66%, 49%)"}
            onClick={handleSubmit}
            isLoading={loading}
          >
            Shorten it!
          </Button>

          {shortLink && (
            <Box mt={"20px"}>
              <Text>Shortened Link:</Text>
              <Input
                type="text"
                value={shortLink}
                readOnly
                bgColor={"white"}
                border={"1px solid gray"}
                outline={"none"}
                p={"10px"}
              />
            </Box>
          )}
        </FormControl>
      </Box>
    </>
  );
};

export default Heropage;
