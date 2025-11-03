import React, {useState} from "react";
import { Grid, Box } from "@mui/material";
import ReactPlayer from "react-player";

const AboutUsVideo = () => {
  const [isReady, setisReady] = useState(false);

  return (
    <Grid
      container
      spacing={0}
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        pointerEvents:'none'
      }}
    >
      <Grid size={{xs:12}}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=BAc1tQpchPY"
            controls={false}
            width="100%"
            height="100%"
            style={{ position: "absolute",
                            top: 0,
                            left: 0,
                             
                            
                  }}
            playing={true}
            loop={true}
            muted={true}
            onStart={()=>setisReady(true)}
            config={{
              youtube: {
                playerVars: {
                  modestbranding: 1, 
                  showinfo: 0,  
                  rel: 0,     
                  controls: 0, 
                  disablekb: 1, 
                },
              },
            }}

          />
           {!isReady && (
        <Box
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "black",
                        transition: "opacity 0.8s ease-in-out",
            opacity: isReady ? 0 : 1,
            zIndex: 2,

          }}
        />
      )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutUsVideo;
