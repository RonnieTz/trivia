import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

import RoomList from "./RoomList";
import CreateRoom from "./CreateRoom";

const LobbyBody = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { createRoom } = useSelector((state: RootState) => state.option);
  return (
    <>
      {!createRoom ? (
        <Box
          display={"grid"}
          bgcolor={"lightgrey"}
          width={"100%"}
          height={"100%"}
          gridTemplateColumns={"1fr 1fr"}
          paddingTop={2}
          overflow={"auto"}
        >
          <RoomList />
        </Box>
      ) : (
        <CreateRoom />
      )}
    </>
  );
};

export default LobbyBody;
