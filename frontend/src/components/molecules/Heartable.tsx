import { ActionIcon, Flex, Text } from "@mantine/core";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faCoffee,
  faTable,
  faStore,
  faSuitcase,
  faSpa,
  faSearch,
  faRobot,
  faPlug,
  faPhone,
  faPaste,
  faPager,
  faOtter,
  faMountain,
  faMobile,
  faLaptop,
  faLeaf,
  faImage,
  faFolder,
  faCrow,
  faFrog,
  faKiwiBird,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCheckSquare,
  faCoffee,
  faTable,
  faStore,
  faSuitcase,
  faSpa,
  faSearch,
  faRobot,
  faPlug,
  faPhone,
  faPaste,
  faPager,
  faOtter,
  faMountain,
  faMobile,
  faLaptop,
  faLeaf,
  faImage,
  faFolder,
  faCrow,
  faFrog,
  faKiwiBird
);

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faCoffee,
  faTable,
  faStore,
  faSuitcase,
  faSpa,
  faSearch,
  faRobot,
  faPlug,
  faPhone,
  faPaste,
  faPager,
  faOtter,
  faMountain,
  faMobile,
  faLaptop,
  faLeaf,
  faImage,
  faFolder,
  faCrow,
  faFrog,
  faKiwiBird,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCheckSquare,
  faCoffee,
  faTable,
  faStore,
  faSuitcase,
  faSpa,
  faSearch,
  faRobot,
  faPlug,
  faPhone,
  faPaste,
  faPager,
  faOtter,
  faMountain,
  faMobile,
  faLaptop,
  faLeaf,
  faImage,
  faFolder,
  faCrow,
  faFrog,
  faKiwiBird
);

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faTable, faStore,faSuitcase, faSpa, faSearch, faRobot,
faPlug, faPhone, faPaste, faPager, faOtter, faMountain, faMobile, faLaptop, faLeaf,
faImage, faFolder, faCrow,faFrog, faKiwiBird} from '@fortawesome/free-solid-svg-icons'
      
library.add(fab,  faCheckSquare, faCoffee, faTable, faStore,faSuitcase, faSpa, faSearch, faRobot,
  faPlug, faPhone, faPaste, faPager, faOtter, faMountain, faMobile, faLaptop, faLeaf,
  faImage, faFolder,faCrow, faFrog, faKiwiBird)

const Heartable = ({
  id,
  iconName,
  selected,
  handleSelect,
}: {
  id: string;
  iconName: any;
  selected: string[];
  handleSelect: () => void;
}) => {

  console.log(id)
  console.log(iconName)
  return (
    <Flex
      direction="column"
      justify="space-between"
      align="center"
      gap="20px"
      sx={{
        background: "#F3F4F8",
        borderRadius: "5px",
        padding: "12px",
        cursor: "pointer",
        height: "100px",
      }}
      onClick={
        handleSelect
      }
    >
      <Flex justify="flex-end" sx={{ width: "100%" }}>
        <ActionIcon size="xs">
          {selected.includes(id) ? (
            <IconHeartFilled style={{ color: "E75480" }} />
          ) : (
            <IconHeart />
          )}
        </ActionIcon>
      </Flex>

      <FontAwesomeIcon icon={iconName} transform="up-10" />

      <Text
        fz="xs"
        color="#414141"
        sx={{ textAlign: "center", position: "relative", bottom: "20px" }}
      >
        {id}
      </Text>
    </Flex>
  );
};

export default Heartable;
