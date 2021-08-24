import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import "./UserCard.css";
import { Tooltip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: "30px 30px",
  },
  avatar: {
    backgroundColor: red[600],
  },
}));

export default function UserCard({ userData }) {
  const classes = useStyles();

  const generateAvatarSymbol = () => {
    if (userData.guest_name) {
      return userData.guest_name.charAt(0).toUpperCase();
    } else {
      return "U";
    }
  };

  const generateGuestName = () => {
    if (userData.guest_name) {
      return userData.guest_name;
    } else {
      return "User";
    }
  };

  const generateCreationDate = () => {
    const creationDate = new Date(userData.creation_date);

    const formattedDate = creationDate.toDateString();
    const creationTime = creationDate.toLocaleTimeString();

    const outputDate = formattedDate + " " + creationTime;

    return outputDate;
  };

  return (
    <div className="user-container">
      <Card className={classes.root}>
        <div className="card-header">
          <CardHeader
            avatar={
              <Tooltip title={userData.guest_email}>
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {generateAvatarSymbol()}
                </Avatar>
              </Tooltip>
            }
            title={generateGuestName()}
            subheader={generateCreationDate()}
          />
          <Box
            className="ratingBox"
            component="fieldset"
            borderColor="transparent"
          >
            <Rating name="read-only" value={userData.overall_score} readOnly />
          </Box>
        </div>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
