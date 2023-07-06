import { Box, Button, Tooltip, Typography } from "@mui/material";
import GroupWorkRoundedIcon from "@mui/icons-material/GroupWorkRounded";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { joinRoom } from "../redux/optionSlice";

const LobbyBody = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onJoinRoom = () => {
    dispatch(joinRoom(true));
  };
  return (
    <Box
      display={"flex"}
      flexWrap={"wrap"}
      bgcolor={"lightgrey"}
      width={"100%"}
      height={"100%"}
      justifyContent={"center"}
      paddingTop={2}
      gap={1}
      overflow={"auto"}
    >
      <Box
        width={"45%"}
        height={"5rem"}
        border={"0.1px solid grey"}
        borderRadius={2}
      >
        <Tooltip title="created by ronis.tzol">
          <Button
            onClick={onJoinRoom}
            sx={{ height: "100%" }}
            fullWidth
            size="large"
            variant="contained"
          >
            <Typography variant="h4" marginRight={10}>
              Room 1
            </Typography>
            <GroupWorkRoundedIcon fontSize="large" />
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default LobbyBody;
