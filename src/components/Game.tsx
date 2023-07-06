import { Box } from "@mui/material";
import Lobby from "./Lobby";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Room from "./Room";

const Game = () => {
  const { lobby, room } = useSelector((state: RootState) => state.option);
  return (
    <Box
      position="fixed"
      sx={{
        boxSizing: "border-box",
        backgroundColor: "lightgrey",
        width: "100%",
        height: "100%",
      }}
    >
      {lobby && !room && <Lobby />}
      {room && <Room />}
    </Box>
  );
};

export default Game;
