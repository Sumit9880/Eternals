import React from "react";

const TeamCard = ({ name, position, image, bio }) => {
  return (
    <div className="team-card bg-white shadow-md hover:shadow-lg p-4 text-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-sm text-gray-500 mb-4">{position}</p>
      <p className="text-gray-600">{bio}</p>
    </div>
  );
};

export default TeamCard;
