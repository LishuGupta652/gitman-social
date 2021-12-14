import React from "react";

const CloseFriend = ({ user }) => {
  return (
    <div>
      <li className="friendListItem">
        <img src={user.profilePicture} className="friendImage" alt="" />
        <span className="friendName">{user.username}</span>
      </li>
    </div>
  );
};

export default CloseFriend;
