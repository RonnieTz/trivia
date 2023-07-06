import { Box, Typography } from "@mui/material";
import RoomTitle from "./RoomTitle";
import RoomFooter from "./RoomFooter";
import RoomBody from "./RoomBody";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Room = () => {
  const { startPressed, gameStarting } = useSelector(
    (state: RootState) => state.option
  );
  return (
    <Box
      height={"70%"}
      width={"60%"}
      border={"1px solid grey"}
      margin={"60px auto"}
      borderRadius={0.5}
      display={"flex"}
      flexDirection={"column"}
    >
      <RoomTitle />
      <RoomBody />
      {!startPressed && <RoomFooter />}
      {startPressed && !gameStarting && (
        <Typography align="center">Game is starting soon...</Typography>
      )}
    </Box>
  );
};

export default Room;
