import React from "react";

const ShoeCard = ({ imgURL, changeBigShowImage, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShowImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={` border-2 rounded-xl ${
        bigShoeImage === imgURL.bigShoe
          ? "border-blue-400"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div
        className={`${
          bigShoeImage === imgURL.bigShoe
            ? ""
            : "hover:scale-105 transition-all"
        } flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4`}
      >
        <img src={imgURL.thumbnail} alt="shoes" />
      </div>
    </div>
  );
};

export default ShoeCard;
