import { useState } from "react";
import { Box } from "@mui/material";
import ReactPlayer from "react-player";

const AboutUsVideo = () => {
  const [isReady, setIsReady] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "90vh",
        overflow: "hidden",
        backgroundColor: "white", // white background for clean borders
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100vw",
          height: "56.25vw",
          minHeight: "90vh",
          minWidth: "160vh", 
        }}
      >

      {/* ReactPlayer */}
      <ReactPlayer
        url="https://www.youtube.com/watch?v=BAc1tQpchPY"
        width="100%"
        height="100%"
        playing
        muted
        loop
        controls={false}
        style={{
          pointerEvents: "none",
          backgroundColor: "white",
        }}
        onReady={() => setIsReady(true)}
        config={{
          youtube: {
            playerVars: {
              autoplay: 1,
              modestbranding: 1,
              rel: 0,
              controls: 0,
              showinfo: 0,
              disablekb: 1,
              fs: 0,
              iv_load_policy: 3,
              playsinline: 1,
            },
          },
        }}
      />
</Box>
      {!isReady && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "white",
            opacity: isReady ? 0 : 1,
            transition: "opacity 0.05s ease-in-out",
            zIndex: 3,
          }}
        />
      )}
    </Box>
  );
};

export default AboutUsVideo;
