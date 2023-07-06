import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { setDifficulty } from "../redux/optionSlice";

const Difficulty = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { difficulty } = useSelector((state: RootState) => state.option);

  return (
    <Box width={"100%"} height={"25%"}>
      <FormControl sx={{ marginLeft: "25%" }}>
        <RadioGroup
          row
          value={difficulty}
          onChange={(e) => dispatch(setDifficulty(e.target.value))}
          name="difficulty"
        >
          <FormControlLabel value={"easy"} control={<Radio />} label="Easy" />
          <FormControlLabel
            value={"medium"}
            control={<Radio />}
            label="Medium"
          />
          <FormControlLabel value={"hard"} control={<Radio />} label="Hard" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default Difficulty;
