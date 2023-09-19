import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Flex, Link as ChakraLink } from "@chakra-ui/react";
import { routesData } from "@Constants";
import { resolveTranslationPath } from "@Helpers";

type NavbarProps = {
  onClick?: () => void;
};

export const Navbar: FC<NavbarProps> = ({ onClick }) => {
  const routes = routesData.map((routeData) => resolveTranslationPath(routeData));

  return (
    <Flex
      as="nav"
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      gap={{ base: "40px", md: "28px", lg: "32px" }}
      fontWeight="bold"
    >
      {
        routes.map(({ routePath, routeName }) => (
          <ChakraLink
            as={NavLink}
            key={routePath}
            to={routePath}
            onClick={onClick}
            _hover={{ textDecoration: "none" }}
            _activeLink={{ color: "linkHoverAndActiveColor" }}
          >
            { routeName }
          </ChakraLink>
        ))
      }
    </Flex>
  );
};
