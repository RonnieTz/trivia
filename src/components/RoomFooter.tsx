import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { startGame, gameReady } from "../redux/optionSlice";

const RoomFooter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onStartGame = () => {
    dispatch(startGame(true));
    setTimeout(() => {
      dispatch(gameReady(true));
    }, 3000);
  };
  return (
    <Box
      width={"100%"}
      height={"2.5rem"}
      bgcolor={"royalblue"}
      display={"flex"}
      justifyContent={"space-around"}
    >
      <Button
        onClick={onStartGame}
        sx={{
          borderTop: "0.1px solid black",
          borderRadius: 0,
          color: "whitesmoke",
        }}
        fullWidth
        variant="text"
      >
        START GAME
      </Button>
    </Box>
  );
};

export default RoomFooter;
