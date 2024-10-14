import { Box, Button, Heading } from "@chakra-ui/react";
import DesktopBoost from "../../../public/assets/images/bg-boost-desktop.svg";
import MobileBoost from "../../../public/assets/images/bg-boost-mobile.svg";

const Boost = () => {
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        bgImage={{
          base: `url(${MobileBoost})`,
          md: `url(${DesktopBoost})`,
        }}
        bgColor={"hsl(257, 27%, 26%)"}
        bgSize={"cover"}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        w={"100%"}
        p={'30px 10px'}
        gap={'20px'}
        h={'200px'}
      >
        <Heading color={'#fff'} fontSize={{base:'20px',md: '35px'}}>Boost your links today</Heading>
        <Button
          display={"flex"}
          justifyContent={"center"}
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
    </>
  );
};

export default Boost;
