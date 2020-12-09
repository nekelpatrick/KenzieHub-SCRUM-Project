import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: 30,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 30,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#C4C4C4",
    width: 100,
    height: 100,
  },
  text: {
    textAlign: "left",
  },
}));

export default function UserCard({ user }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        avatar={
          <Avatar
            src={user.avatar_url}
            aria-label={user.name}
            className={classes.avatar}
          >
            {user.name[0]}
          </Avatar>
        }
        title={
          <Typography variant="h4" color="textPrimary" component="p">
            {user.name}
          </Typography>
        }
        subheader={user.course_module && user.course_module}
      />
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="p">
          {user.bio}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography className={classes.text} paragraph>
            {user.contact && "Contato : " + user.contact}
          </Typography>
          <Typography className={classes.text} paragraph>
            {user.email && "Email : " + user.email}
          </Typography>
          <Typography className={classes.text} paragraph>
            {user.techs.length > 0 &&
              "Tecnologias : " + user.techs.map((tech) => tech.title + " ")}
          </Typography>
          <Typography className={classes.text} paragraph>
            {user.works.length > 0 &&
              "Trabalhos : " + user.works.map((work) => work.title + " ")}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
