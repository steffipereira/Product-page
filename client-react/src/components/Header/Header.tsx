import { Container, Flex, Image } from "@chakra-ui/react"
import basket from '../../assets/basket.svg';
import logo from '../../assets/octopus-logo.svg';
import { Outlet } from "react-router-dom";
import { PropsWithChildren } from "react";

export const Header = ({ children }: PropsWithChildren) => {
  return (
    <Container maxW="5xl" py={6}>
      <Flex justifyContent="space-between">
        <Flex
          backgroundImage={logo}
          width="200px"
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
          alignItems="flex-start"
        />
        <Flex gap="1" alignItems="center">
          {children}
          <Image
            alt=""
            src={basket}
            boxSize={6}
          />
        </Flex>
      </Flex>
      <Outlet />
    </Container>
  )
}