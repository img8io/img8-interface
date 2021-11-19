import { Flex, Stack, Box, Center, Image } from "@chakra-ui/react";
import Partner1 from "../../assets/partner-1.png";
import Partner2 from "../../assets/partner-2.png";


const Partners = () => {
  return (
    <Flex
      align="center"
      justify="center"
      h="100%"
      w="100%"
      maxW="1600"
      px={["10", "10", "20", "20"]}
      m="0 auto"
      my={["50","50","50","50"]}
      bg="white"
      color={["white", "white", "primary.700", "primary.700"]}
    >
      <Stack
        direction={["column", "column", "column", "row"]}
        width={["100%"]}
        align="center"
      >
        <Box w="100%" mb={["10", "10", "30", "0"]}>
          <Center>
            <Image src={Partner1} boxSize={["80%", "80%", "60%", "70%"]} />
          </Center>
        </Box>
        <Box w="100%" mb={["10", "10", "30", "0"]}>
          <Center>
            <Image src={Partner2} boxSize={["80%", "80%", "60%", "70%"]} />
          </Center>
        </Box>
        <Box color="black" fontSize={'3xl'} w="100%" mb={["10", "10", "30", "0"]}>
          <Center>
            MyAvatar.link
          </Center>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Partners