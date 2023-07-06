import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const PlayersList = () => {
  const { joinedRoom } = useSelector((state: RootState) => state.room);
  return (
    <List
      sx={{
        paddingLeft: 3,
        width: "100%",
        display: "grid",
        gridTemplateColumns: { sm: " 1fr 1fr", md: "1fr 1fr 1fr", xs: "1fr" },
      }}
    >
      {joinedRoom.users.map((user) => (
        <ListItem key={user.id}>
          <ListItemAvatar>
            <Avatar src={user.picture} />
          </ListItemAvatar>
          <ListItemText
            primary={user.name}
            secondary={user.startPressed ? "READY" : "waiting"}
          ></ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default PlayersList;
