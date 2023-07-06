import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { joinLobby } from "../redux/optionSlice";

const LobbyTitle = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onClose = () => {
    dispatch(joinLobby(false));
  };
  return (
    <Box
      position={"relative"}
      bgcolor={"red"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Typography
        display={"inline"}
        textAlign={"center"}
        variant="h5"
        color={"white"}
      >
        Rooms
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

export default LobbyTitle;
