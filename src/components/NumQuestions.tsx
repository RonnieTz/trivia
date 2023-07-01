import { Box, FormControl, FormLabel, Slider, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { changeNumber } from "../redux/options";

const NumQuestions = () => {
  const numOfQuestions = useSelector(
    (state: RootState) => state.options.numberOfQuestions
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Box
      width={"80%"}
      marginTop={1}
      border={"0.1px solid blue"}
      padding={2}
      borderRadius={2}
    >
      <FormControl fullWidth>
        <FormLabel>
          Number of questions:{" "}
          <Typography display={"inline"} variant="h6">
            {numOfQuestions}
          </Typography>
        </FormLabel>

        <Slider
          sx={{ width: "96%", marginLeft: 1 }}
          size="small"
          min={1}
          max={50}
          value={numOfQuestions}
          onChange={(e: any) => dispatch(changeNumber(e.target.value))}
          step={1}
          // valueLabelDisplay="auto"
          color="secondary"
        />
      </FormControl>
    </Box>
  );
};

export default NumQuestions;
