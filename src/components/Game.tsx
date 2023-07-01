import { Box } from "@mui/material";
import Options from "./Options";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import Questions from "./Questions";

const Game = () => {
  const { gameStarted } = useSelector((state: RootState) => state.options);
  return (
    <Box
      bgcolor="aquamarine"
      display={"flex"}
      height={"100vh"}
      width={"100vw"}
      justifyContent={"center"}
    >
      {!gameStarted && <Options />}
      {gameStarted && <Questions />}
    </Box>
  );
};

export default Game;
