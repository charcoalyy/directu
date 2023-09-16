import { Box, Flex, Text } from "@mantine/core";
import CardInfo from "@atoms/CardInfo";
import { useState } from "react";

const Card = () => {
  const [opacity, setOpacity] = useState(1);
  const [clickedOrder, setClickedOrder] = useState<number | null>(null);

  const changeOpacity = (_order: number) => {
    setOpacity((prev) => (prev === 1 ? 0.7 : 1));
    setClickedOrder((prevClickedOrder) =>
      prevClickedOrder === null ? 1 : prevClickedOrder + 1
    );
  };

  return (
    <Box onClick={() => changeOpacity(1)}>
      <Flex
        direction="row"
        gap="30px"
        sx={{
          padding: "40px",
          height: "150px",
          width: "200px",
          border: "1px solid grey",
          borderRadius: "7.5px",
          backgroundColor: "lightgrey",
          opacity: opacity,
        }}
      >
        <CardInfo />
      </Flex>
      <Text> {clickedOrder}</Text>
    </Box>
  );
};

export default Card;
