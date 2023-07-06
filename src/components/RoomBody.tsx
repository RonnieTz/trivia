import { Box } from "@mui/material";
import PlayersList from "./PlayersList";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Quiz from "./Quiz";

const RoomBody = () => {
  const { gameStarting } = useSelector((state: RootState) => state.option);
  return <Box height={"100%"}>{gameStarting ? <Quiz /> : <PlayersList />}</Box>;
};

export default RoomBody;
