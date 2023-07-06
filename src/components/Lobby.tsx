import { Box } from "@mui/material";
import LobbyTitle from "./LobbyTitle";
import LobbyBody from "./LobbyBody";
import LobbyFooter from "./LobbyFooter";

const Lobby = () => {
  return (
    <Box
      height={"70%"}
      width={"60%"}
      border={"1px solid grey"}
      margin={"60px auto"}
      borderRadius={0.5}
      display={"flex"}
      flexDirection={"column"}
    >
      <LobbyTitle />
      <LobbyBody />
      <LobbyFooter />
    </Box>
  );
};

export default Lobby;
