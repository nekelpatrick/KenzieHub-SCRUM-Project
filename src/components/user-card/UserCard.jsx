import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import { IconButton } from "@material-ui/core";
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
    [theme.breakpoints.down("xs")]: {
      width: 70,
      height: 70,
    },
  },
  username: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem",
    },
  },
  text: {
    textAlign: "left",
  },
  skillContainer: {
    display: "flex",
  },
  skillTitle: {
    flex: "0 0 18%",
  },
  skillContent: {
    flex: "1 0 80%",
  },
}));

export default function UserCard({ user }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  useEffect(() => {
    setExpanded(false);
  }, [user]);

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
          <Typography
            className={classes.username}
            variant="h4"
            color="textPrimary"
            component="p"
          >
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
            {user.techs.length > 0 && (
              <div className={classes.skillContainer}>
                <div className={classes.skillTitle}>Tecnologias: </div>
                <div>
                  {user.techs.map((tech) => {
                    return (
                      <>
                        <div className={classes.skillContent}>
                          {`${tech.title} - ${tech.status}`}
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            )}
          </Typography>
          <Typography className={classes.text} paragraph>
            {user.works.length > 0 && (
              <div className={classes.skillContainer}>
                <div className={classes.skillTitle}>Trabalhos: </div>
                <div>
                  {user.works.map((work) => {
                    return (
                      <>
                        <div className={classes.skillContent}>
                          {work.title} -{" "}
                          <a target="blank" href={work.deploy_url}>
                            link
                          </a>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            )}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
