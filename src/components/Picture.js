import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        這邊下載圖片
        <a target="_blank" href={data.src.large}>
          按此處
        </a>
      </p>
    </div>
  );
};

export default Picture;
