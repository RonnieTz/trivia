import { Box } from "@mui/material";
import Amount from "./Amount";
import Category from "./Category";
import Difficulty from "./Difficulty";
import Name from "./Name";

const CreateRoom = () => {
  return (
    <Box width={"100%"} height={"100%"} bgcolor={"lightblue"}>
      <Name />
      <Amount />
      <Category />
      <Difficulty />
    </Box>
  );
};

export default CreateRoom;
