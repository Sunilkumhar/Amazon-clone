import React from "react";
import "../css/Stars.css";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function Stars({ star }) {
  return (
    <div>
      {star >= 0 && star < 0.5 ? (
        <div className="star">
          <StarBorderIcon style={{ color: "orange" }} />
          <StarBorderIcon style={{ color: "orange" }} />
          <StarBorderIcon style={{ color: "orange" }} />
          <StarBorderIcon style={{ color: "orange" }} />
          <StarBorderIcon style={{ color: "orange" }} />
        </div>
      ) : null}
      {star >= 0.5 && star < 1 ? (
        <div className="star">
          <StarHalfIcon style={{ color: "orange" }} />
          <StarBorderIcon style={{ color: "orange" }} />
          <StarBorderIcon style={{ color: "orange" }} />
          <StarBorderIcon style={{ color: "orange" }} />
          <StarBorderIcon style={{ color: "orange" }} />
        </div>
      ) : null}
      {star >= 1 && star < 1.5 ? (
        <div className="star">
          <StarIcon style={{ color: "orange" }} />
          <StarBorderIcon style={{ color: "orange" }} />
          <StarBorderIcon style={{ color: "orange" }} />
          <StarBorderIcon style={{ color: "orange" }} />
          <StarBorderIcon style={{ color: "orange" }} />
        </div>
      ) : null}
      {star >= 2 && star < 2.5 ? (
        <div className="star">
          <StarIcon style={{ color: "orange" }} />
          <StarIcon style={{ color: "orange" }} />
          <StarBorderIcon style={{ color: "orange" }} />
          <StarBorderIcon style={{ color: "orange" }} />
          <StarBorderIcon style={{ color: "orange" }} />
        </div>
      ) : null}
      {star >= 3 && star < 3.5 ? (
        <div className="star">
          <StarIcon style={{ color: "orange" }} />
          <StarIcon style={{ color: "orange" }} />
          <StarIcon style={{ color: "orange" }} />
          <StarBorderIcon style={{ color: "orange" }} />
          <StarBorderIcon style={{ color: "orange" }} />
        </div>
      ) : null}
      {star >= 4 && star < 4.5 ? (
        <div className="star">
          <StarIcon style={{ color: "orange" }} />
          <StarIcon style={{ color: "orange" }} />
          <StarIcon style={{ color: "orange" }} />
          <StarIcon style={{ color: "orange" }} />
          <StarBorderIcon style={{ color: "orange" }} />
        </div>
      ) : null}
      {star === 5 ? (
        <div className="star">
          <StarIcon style={{ color: "orange" }} />
          <StarIcon style={{ color: "orange" }} />
          <StarIcon style={{ color: "orange" }} />
          <StarIcon style={{ color: "orange" }} />
          <StarIcon style={{ color: "orange" }} />
        </div>
      ) : null}
      {star >= 1.5 && star < 2 ? (
        <div className="star">
          <StarIcon style={{ color: "orange" }} />
          <StarHalfIcon style={{ color: "orange" }} />
          <StarBorderIcon style={{ color: "orange" }} />
          <StarBorderIcon style={{ color: "orange" }} />
          <StarBorderIcon style={{ color: "orange" }} />
        </div>
      ) : null}
      {star >= 2.5 && star < 3 ? (
        <div className="star">
          <StarIcon style={{ color: "orange" }} />
          <StarIcon style={{ color: "orange" }} />
          <StarHalfIcon style={{ color: "orange" }} />
          <StarBorderIcon style={{ color: "orange" }} />
          <StarBorderIcon style={{ color: "orange" }} />
        </div>
      ) : null}
      {star >= 3.5 && star < 4 ? (
        <div className="star">
          <StarIcon style={{ color: "orange" }} />
          <StarIcon style={{ color: "orange" }} />
          <StarIcon style={{ color: "orange" }} />
          <StarHalfIcon style={{ color: "orange" }} />
          <StarBorderIcon style={{ color: "orange" }} />
        </div>
      ) : null}
      {star >= 4.5 && star < 5 ? (
        <div className="star">
          <StarIcon style={{ color: "orange" }} />
          <StarIcon style={{ color: "orange" }} />
          <StarIcon style={{ color: "orange" }} />
          <StarIcon style={{ color: "orange" }} />
          <StarHalfIcon style={{ color: "orange" }} />
        </div>
      ) : null}
    </div>
  );
}

export default Stars;
