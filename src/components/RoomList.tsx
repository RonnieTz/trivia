import { Box, Tooltip, Button, Typography, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { joinRoom } from "../redux/optionSlice";

const RoomList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { roomList } = useSelector((state: RootState) => state.room);
  const onJoinRoom = () => {
    dispatch(joinRoom(true));
  };
  return (
    <>
      {roomList.map((room) => (
        <Box
          key={room.id}
          width={"90%"}
          marginLeft={"5%"}
          marginBottom={1}
          height={"5rem"}
          border={"0.1px solid grey"}
          borderRadius={2}
        >
          <Tooltip
            describeChild
            arrow
            enterDelay={300}
            followCursor
            enterNextDelay={300}
            key={room.id}
            title={`created by ${room.creator}`}
          >
            <Button
              onClick={onJoinRoom}
              sx={{ height: "100%" }}
              fullWidth
              size="large"
              variant="contained"
            >
              <Typography
                fontFamily={"cursive"}
                fontStyle={"italic"}
                variant="h6"
              >
                {room.name}
              </Typography>
            </Button>
          </Tooltip>
        </Box>
      ))}
    </>
  );
};

export default RoomList;
