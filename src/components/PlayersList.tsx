import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";

const PlayersList = () => {
  return (
    <List
      sx={{
        paddingLeft: 3,
        width: "100%",
        display: "grid",
        gridTemplateColumns: { sm: " 1fr 1fr", md: "1fr 1fr 1fr", xs: "1fr" },
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText primary={"ronis.tzol"} secondary={"READY"} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText primary={"ronis.tzol"} secondary={"waiting..."} />
      </ListItem>
    </List>
  );
};

export default PlayersList;
