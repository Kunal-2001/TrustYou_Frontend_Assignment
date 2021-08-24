import React from "react";
import Dialog from "@material-ui/core/Dialog";
import "./ReviewCard.css";
import UserCard from "./UserCard";

function ReviewCard({ setShowReviews, showReviews, data }) {
  const handleClose = () => {
    setShowReviews(false);
  };

  const UserReviews = () => {
    var totalUserReviews = [];
    data.forEach((element) => {
      totalUserReviews.push(<UserCard userData={element} />);
    });
    return totalUserReviews;
  };

  return (
    <div>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={true}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <div className="review-dialog">{UserReviews()}</div>
      </Dialog>
    </div>
  );
}

export default ReviewCard;
