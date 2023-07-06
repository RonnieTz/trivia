import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { onCreateRoom } from "../redux/optionSlice";

const LobbyFooter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { createRoom } = useSelector((state: RootState) => state.option);

  const openCreateOptions = () => {
    dispatch(onCreateRoom(true));
  };
  const createConfirm = () => {
    dispatch(onCreateRoom(false));
  };
  return (
    <Box
      width={"100%"}
      height={"2.5rem"}
      bgcolor={"orange"}
      display={"flex"}
      justifyContent={"space-around"}
    >
      <Button
        onClick={createRoom ? createConfirm : openCreateOptions}
        sx={{ borderTop: "0.1px solid black", borderRadius: 0 }}
        fullWidth
        variant="text"
      >
        {createRoom ? "CONFIRM" : "CREATE ROOM"}
      </Button>
    </Box>
  );
};

export default LobbyFooter;
