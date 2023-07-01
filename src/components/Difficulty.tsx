import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { changeDifficulty } from "../redux/options";

const Difficulty = () => {
  const dispatch = useDispatch<AppDispatch>();
  const difficulty = useSelector(
    (state: RootState) => state.options.difficulty
  );
  return (
    <Box
      width={"80%"}
      marginTop={3}
      border={"0.1px solid blue"}
      padding={2}
      borderRadius={2}
    >
      <FormControl>
        <FormLabel>Difficulty</FormLabel>

        <RadioGroup
          value={difficulty}
          onChange={(e: any) => dispatch(changeDifficulty(e.target.value))}
          name="difficulty"
        >
          <FormControlLabel
            value={"easy"}
            control={<Radio color="success" />}
            label="Easy"
          />
          <FormControlLabel
            value={"medium"}
            control={<Radio color="success" />}
            label="Medium"
          />
          <FormControlLabel
            value={"hard"}
            control={<Radio color="success" />}
            label="Hard"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default Difficulty;
