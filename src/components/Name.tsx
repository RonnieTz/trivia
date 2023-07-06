import { Box, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { setName } from "../redux/optionSlice";

const Name = () => {
  const { name } = useSelector((state: RootState) => state.option);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Box width={"100%"} height={"15%"}>
      <TextField
        value={name}
        onChange={(e) => dispatch(setName(e.target.value))}
        sx={{
          width: "70%",
          marginLeft: "15%",
          fontStyle: "italic",
          fontFamily: "sans-serif",
        }}
        placeholder="room name..."
        variant="filled"
      />
    </Box>
  );
};

export default Name;
