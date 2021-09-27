import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { API_YOUTUBE_URL, API_YOUTUBE_HOST_URL } from "../../../utils/apies";
import { Loader } from "../../../elements/Loader";

import { PlayerContainer, LoaderWrapper } from "./Player.style";

export const Player = (props) => {
  const [readyTrailer, setReadyTrailer] = useState(false);
  const { id } = props;
  let player;

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = API_YOUTUBE_URL;

      window.onYouTubeIframeAPIReady = loadVideo;

      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      loadVideo();
    }
  }, [id]);

  const loadVideo = () => {
    player = new window.YT.Player(`player-${id}`, {
      videoId: id,
      width: "100%",
      height: "100%",
      host: API_YOUTUBE_HOST_URL,
      playerVars: {
        origin: document.location.origin,
        iv_load_policy: 3,
        // autoplay,
        enablejsapi: 1,
        loop: 1,
        playlist: id,
        modestbranding: 1,
        showinfo: 0,
        rel: 0,
      },
      events: {
        onReady: onPlayerReady,
      },
    });
  };

  const onPlayerReady = () => {
    setReadyTrailer(true);
  };

  return (
    <PlayerContainer>
      <div id={`player-${id}`} />
      {!readyTrailer && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
    </PlayerContainer>
  );
};

Player.propTypes = {
  id: PropTypes.string.isRequired,
};
