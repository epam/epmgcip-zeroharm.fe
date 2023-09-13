import { FC } from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    //HStack,
    //Text,
    //Icon as ChakraIcon,
    //Flex,
    useDisclosure,
    HStack,
    Text
    //Center
} from "@chakra-ui/react";
//import { useTranslation } from "react-i18next";
// import { useDataStore } from "@Store/useDataStore";
// import { Icon } from "@UI";
import { useDetectWidth } from "@Hooks";
// import { resolveTranslationPath } from "@Helpers";
// import { languagesData } from "@Constants";
// import { ReactComponent as LeftArrowIcon } from "@Assets/icons/stroke/harm-arrow-left.svg";
// import { ReactComponent as ArrowDownIcon } from "@Assets/icons/stroke/harm-arrow-down.svg";
//import { ReactComponent as ArrowUpIcon } from "@Assets/icons/stroke/harm-arrow-up.svg";
import { ReactComponent as IconMapPoint } from "@Assets/icons/stroke/harm-local-two.svg";

export const LocationMenu: FC = () => {
    //const { setLanguage } = useDataStore();

    const { isOpen, onOpen, onClose } = useDisclosure();

    //const { t } = useTranslation();

    const { isLargerThan600 } = useDetectWidth();
    const isMobileWidth = !isLargerThan600;
    const isOpenOnMobile = isOpen && isMobileWidth;

    //const languagesOptions = languagesData.map((languageData) => resolveTranslationPath(languageData));

    return (
        <Menu
            autoSelect={false}
            closeOnBlur={!isMobileWidth}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
        >
             <MenuButton
                borderRadius="8px"
                border="1px solid var(--dark-base-colors-600, #606266)"
                background="var(--dark-base-colors-700, #48494D)"
                padding="16px"
                height="56px"
                zIndex="1"
                pos={isOpenOnMobile ? "fixed" : "initial"}
            >
                <HStack>
                    <IconMapPoint fontSize={20} />
                    <Text
                        display={{ base: "none", lg: "initial" }}
                    >
                        { "Tashkent, 8 Furkata str." }
                    </Text>
                </HStack>
            </MenuButton>
            <MenuList>
                <MenuItem>Пункт меню 1</MenuItem>
                <MenuItem>Пункт меню 2</MenuItem>
                <MenuItem>Пункт меню 3</MenuItem>
            </MenuList>
        </Menu>
    );
};
