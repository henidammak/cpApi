import React from "react";
import "./TvCard.css";
const TvCrad = () => {
  return (
    <div id="tv">
      <h1 className="title">PSG TV :</h1>

      <div id="tv" className="d-flex justify-content-around flex-wrap">
        <iframe
          className="video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6KTmp_VTwFQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="mvideo"
          width="250"
          height="315"
          src="https://www.youtube.com/embed/5RptO4eXGFk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="mvideo"
          width="250"
          height="315"
          src="https://www.youtube.com/embed/wv0OqdBuxyk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="moyvideo"
          width="350"
          height="315"
          src="https://www.youtube.com/embed/zg0R90FKj58"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="moyvideo"
          width="700"
          height="315"
          src="https://www.youtube.com/embed/b2Wbgex1CEc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default TvCrad;
