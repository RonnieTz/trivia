import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Box, IconButton, Tooltip } from "@mui/material";

const User = () => {
  const { user, isAuthenticated, logout, loginWithPopup } = useAuth0();
  const onClick = () => {
    if (isAuthenticated) {
      logout();
    } else {
      loginWithPopup();
    }
  };
  return (
    <Box position={"absolute"} right={10}>
      <Tooltip title={!isAuthenticated && "Log in"} onClick={onClick}>
        <IconButton size="small" edge={"start"}>
          <Avatar src={user?.picture}></Avatar>
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default User;
