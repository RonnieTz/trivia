import { Box, Button } from "@mui/material";

const LobbyFooter = () => {
  return (
    <Box
      width={"100%"}
      height={"2.5rem"}
      bgcolor={"orange"}
      display={"flex"}
      justifyContent={"space-around"}
    >
      <Button
        sx={{ borderTop: "0.1px solid black", borderRadius: 0 }}
        fullWidth
        variant="text"
      >
        CREATE ROOM
      </Button>
    </Box>
  );
};

export default LobbyFooter;
