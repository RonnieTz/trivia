import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { joinRoom, startGame } from "../redux/optionSlice";

const RoomTitle = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onClose = () => {
    dispatch(joinRoom(false));
    dispatch(startGame(false));
  };
  return (
    <Box
      position={"relative"}
      bgcolor={"green"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Typography
        display={"inline"}
        textAlign={"center"}
        variant="h5"
        color={"white"}
      >
        Room 1
      </Typography>
      <IconButton
        onClick={onClose}
        sx={{ position: "absolute", right: 0, bottom: -5 }}
      >
        <CloseIcon color="inherit" />
      </IconButton>
    </Box>
  );
};

export default RoomTitle;
