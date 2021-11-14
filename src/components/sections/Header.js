import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { Box, Flex, Text } from "@chakra-ui/react"
import Logo from "../ui/Logo"
import { debounce } from "../../utils/helpers";



const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text
      mb={{ base: 8, sm: 0 }}
      mr={{ base: 0, sm: 8 }}
      display="block"
      _hover={{ color: "orange.300" }}
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const Header = (props) => {

  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);


  //#region Start Navigation 
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, 1);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  //#endregion End Navigation

  const CloseIcon = () => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" cursor="pointer">
      <title>Close</title>
      <path
        fill={visible ? "white" : "primary.500"}
        d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
      />
    </svg>
  );

  const MenuIcon = () => (
    <svg
      width="24px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill={visible ? "white" : "primary.500"}
      cursor="pointer"
    >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  );


  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      maxW="1600"
      mb={0}
      p={4}
      px={["10", "10", "20", "20"]}
      boxShadow="lg"
      color={visible ? "white" : "gray.800"}
      bgGradient={visible ? "linear(to-r, blue.100, blue.500)" : "linear(to-r, white, white)"}
      position="fixed"
      top="0"
      transition="0.3s"
      zIndex="999"
    >
      <Box>
        <Logo w="100px" color={["white", "white", "primary.500", "primary.500"]} />
      </Box>
      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>
      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem fontWeight="bold" to="/">Home</MenuItem>
          <MenuItem fontWeight="bold" to="/preview">Preview </MenuItem>
          <MenuItem fontWeight="bold" to="/preview">Features </MenuItem>
          <MenuItem fontWeight="bold" to="/preview">About Us </MenuItem>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
