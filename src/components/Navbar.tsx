import { AppBar, Box, Button, Toolbar } from "@mui/material";
import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { joinLobby } from "../redux/optionSlice";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { lobby, room } = useSelector((state: RootState) => state.option);
  const onJoinLobby = () => {
    dispatch(joinLobby(!lobby));
  };
  return (
    <>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Box margin={"0 auto"}>
            {!lobby && !room && (
              <Button
                onClick={onJoinLobby}
                size="large"
                variant="text"
                color="inherit"
              >
                JOIN LOBBY
              </Button>
            )}
          </Box>
          <User />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
