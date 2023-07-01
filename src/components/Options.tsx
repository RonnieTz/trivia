import { Box, Button } from "@mui/material";
import NumQuestions from "./NumQuestions";
import Difficulty from "./Difficulty";
import Category from "./Category";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { changeGameStarted } from "../redux/options";
import { fetchData } from "../redux/questions";

const Options = () => {
  const { difficulty, category, numberOfQuestions } = useSelector(
    (state: RootState) => state.options
  );
  const dispatch = useDispatch<AppDispatch>();

  const onClick = () => {
    dispatch(fetchData({ difficulty, category, amount: numberOfQuestions }));
    dispatch(changeGameStarted(true));
  };
  return (
    <Box
      bgcolor={"rgb(0,190,255)"}
      width={"80%"}
      height={"80%"}
      marginTop={5}
      borderRadius={1}
      display={"flex"}
      justifyContent={"space-around"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <NumQuestions />
      <Difficulty />
      <Category />
      <Button onClick={onClick} variant="contained">
        Start Game
      </Button>
    </Box>
  );
};

export default Options;
