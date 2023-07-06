import { Box, Slider, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { setAmount } from "../redux/optionSlice";

const Amount = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { amount } = useSelector((state: RootState) => state.option);
  return (
    <Box width={"100%"} height={"15%"} marginTop={"4%"}>
      <Typography variant="h5" align="center">
        {`Questions: ${amount}`}
      </Typography>
      <Slider
        value={amount}
        min={5}
        max={50}
        sx={{ width: "70%", marginLeft: "15%" }}
        onChange={(e: any) => dispatch(setAmount(e.target.value))}
      />
    </Box>
  );
};

export default Amount;
