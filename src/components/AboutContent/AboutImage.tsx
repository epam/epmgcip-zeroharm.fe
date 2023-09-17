import { FC } from "react";
import { Image } from "@chakra-ui/react";
import aboutImage from "@Assets/images/about-full.jpeg";

export const AboutImage: FC = () => {
  return (
    <Image
      h={{ base: "165px", md: "116px", lg: "236px" }}
      src={aboutImage}
      width="100%"
      objectFit="cover"
      alt="polluted_air"
      filter="saturate(0)"
    />
  );
};
