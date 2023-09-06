import { FC } from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { routesData } from "@Constants";
import { resolveTranslationPath } from "@Helpers";

type NavbarProps = {
  onClick?: () => void;
}

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
          <Link
            key={routePath}
            to={routePath}
            onClick={onClick}
          >
            { routeName }
          </Link>
        ))
      }
    </Flex>
  );
};
