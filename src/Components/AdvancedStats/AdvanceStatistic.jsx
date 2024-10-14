import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Brand from "../../../public/assets/images/icon-brand-recognition.svg";
import Details from "../../../public/assets/images/icon-detailed-records.svg";
import Customized from "../../../public/assets/images/icon-fully-customizable.svg";

const AdvanceStatistic = () => {
  return (
    <Box
      bgColor={"hsla(0, 0.00%, 74.90%, 0.63)"}
      display={"flex"}
      flexDirection={"column"}
      w={{ base: "100%", md: "100%" }}
      gap={{ base: "30px", md: "50px" }}
      alignItems={"center"}
      p={{ base: "20px 10px", md: "40px 20px" }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDir={"column"}
        gap={{ base: "20px", md: "22px" }}
        w={{ base: "80%", md: "400px" }}
      >
        <Heading fontSize={"25px"}>Advanced Statistics</Heading>
        <Text
          color={"hsl(255, 11%, 22%)"}
          textAlign={"center"}
          fontSize={{ base: "12px", md: "18px" }}
        >
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Text>
      </Box>
      <Flex
        alignItems={"center"}
        justifyContent={{ base: "center", md: "space-around" }}
        flexDir={{ base: "column", md: "row" }}
        gap={{ base: "40px", md: "0px" }}
        w={"100%"}
        mt={{ base: "20px", md: "30px" }}
        pos={"relative"}
      >
        {[{ left: "50%", top: "50%" }].map((connector, index) => (
          <Box
            key={index}
            position={"absolute"}
            left={connector.left}
            top={connector.top}
            transform={"translate(-50%, -50%)"}
            height={{ base: "100%", md: "8px" }}
            w={{ base: "8px", md: "80%" }}
            bgColor={"hsl(180, 66%, 49%)"}
            borderRadius={"10px"}
            zIndex={1}
          />
        ))}
        <Box
          bgColor={"white"}
          position={"relative"}
          p={"10px"}
          w={{ base: "90%", md: "350px" }}
          mb={{ base: "0px", md: "2rem" }}
          borderRadius={"15px"}
          zIndex={1}
        >
          <Box
            pos={"absolute"}
            top={{ base: "-10%", md: "-15%" }}
            left={{ base: "50%", md: "10%" }}
            transform={{
              base: "translate(-50%, 0%)",
              md: "translate(0%, 0%)",
            }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            bgColor={"hsl(257, 27%, 26%)"}
            p={"10px"}
            borderRadius={"50%"}
            w={{ base: "50px", md: "70px" }}
            h={{ base: "50px", md: "70px" }}
          >
            <Image src={Brand} />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            textAlign={{ base: "center", md: "left" }}
            gap={{ base: "10px", md: "20px" }}
            mt={{ base: "30px", md: "40px" }}
            p={{ base: "10px", md: "20px" }}
          >
            <Heading fontSize={{ base: "18px", md: "20px" }}>
              Branding Recognition
            </Heading>
            <Text
              fontSize={{ base: "14px", md: "16px" }}
              color={"hsl(257, 7%, 63%)"}
            >
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your content
            </Text>
          </Box>
        </Box>
        <Box
          bgColor={"white"}
          position={"relative"}
          p={"10px"}
          w={{ base: "90%", md: "350px" }}
          borderRadius={"15px"}
          mt={{ base: "0px", md: "3rem" }}
          zIndex={1}
        >
          <Box
            pos={"absolute"}
            top={{ base: "-10%", md: "-15%" }}
            left={{ base: "50%", md: "10%" }}
            transform={{
              base: "translate(-50%, 0%)",
              md: "translate(0%, 0%)",
            }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            bgColor={"hsl(257, 27%, 26%)"}
            p={"10px"}
            borderRadius={"50%"}
            w={{ base: "50px", md: "70px" }}
            h={{ base: "50px", md: "70px" }}
          >
            <Image src={Details} />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            textAlign={{ base: "center", md: "left" }}
            gap={{ base: "10px", md: "20px" }}
            mt={{ base: "30px", md: "40px" }}
            p={{ base: "10px", md: "20px" }}
          >
            <Heading fontSize={{ base: "18px", md: "20px" }}>
              Detailed Records
            </Heading>
            <Text
              fontSize={{ base: "14px", md: "16px" }}
              color={"hsl(257, 7%, 63%)"}
            >
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions
            </Text>
          </Box>
        </Box>
        <Box
          bgColor={"white"}
          position={"relative"}
          p={"10px"}
          w={{ base: "90%", md: "350px" }}
          borderRadius={"15px"}
          mb={{ base: "0px", md: "-6rem" }}
          zIndex={1}
        >
          <Box
            pos={"absolute"}
            top={{ base: "-10%", md: "-15%" }}
            left={{ base: "50%", md: "10%" }}
            transform={{
              base: "translate(-50%, 0%)",
              md: "translate(0%, 0%)",
            }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            bgColor={"hsl(257, 27%, 26%)"}
            p={"10px"}
            borderRadius={"50%"}
            w={{ base: "50px", md: "70px" }}
            h={{ base: "50px", md: "70px" }}
          >
            <Image src={Customized} />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            textAlign={{ base: "center", md: "left" }}
            gap={{ base: "10px", md: "20px" }}
            mt={{ base: "30px", md: "40px" }}
            p={{ base: "10px", md: "20px" }}
          >
            <Heading fontSize={{ base: "18px", md: "20px" }}>
              Fully Customizable
            </Heading>
            <Text
              fontSize={{ base: "14px", md: "16px" }}
              color={"hsl(257, 7%, 63%)"}
            >
              Improve brand awareness and customer engagement with customizable
              links, and more!
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default AdvanceStatistic;
