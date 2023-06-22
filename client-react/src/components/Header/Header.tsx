import { Container, Flex, Image } from "@chakra-ui/react"
import basket from '../../assets/basket.svg';
import logo from '../../assets/octopus-logo.svg';
import { Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <Container maxW={'5xl'} py={12}>
      <Flex justifyContent="space-between">
        <Flex
          backgroundImage={logo}
          width="200px"
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
          alignItems="flex-start"
        />
        <Flex gap="1" alignItems="center">
          1
          <Image
            alt=""
            src={basket}
            boxSize="6"
          />
        </Flex>
      </Flex>
      <Outlet />
    </Container>
  )
}