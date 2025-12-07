import { Box, Container, Typography } from "@mui/material";
import React from "react";
import bgImage from "../assets/bg/top-view-desk-concept-with-laptop.jpg";
import { Element } from "react-scroll";
import Typewriter from "typewriter-effect";

export default function Landing() {
  return (
    <Element
      name="home"
      style={{
        width: "100%",
        height: "min(100dvh, 1500px)",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000000a4",
        backgroundBlendMode: "darken",
        backgroundPosition: "70%",
      }}
    >
      <Box
        color={"white"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        p={[2, 5]}
        height={"100%"}
      >
        <Container>
          <Box>
            <Typography
              sx={{
                backgroundImage:
                  "linear-gradient(90deg,rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)",
                backgroundClip: "text",
                color: "transparent",
                display: "inline-block",
                filter: "drop-shadow(0 0 25px #000)",
                textShadow: "0 0 100px #fd4829",
                transition: "font-size 0.5s",
              }}
              fontWeight={"bold"}
              variant="h1"
              fontSize={[48, 72, 96, 112]}
            >
              Namuna Namunaevich
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h4"
              fontSize={[16, 32, 48, 56]}
              sx={{
                "& .Typewriter": {
                  display: "inline-block",
                },
                backgroundImage:
                  "linear-gradient(90deg,rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)",
                backgroundClip: "text",
                color: "transparent",
                display: "inline-block",
                textShadow: "0 0 50px #fd4829",
                transition: "1s",
                "& .Typewriter__cursor": {
                  color: "#fff",
                },
              }}
            >
              Working with{" "}
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("HTML")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("CSS")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Javascript")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("React")
                    .pauseFor(2500)
                    .deleteAll()
                    .start();
                }}
                options={{ loop: true }}
              />
            </Typography>
          </Box>
        </Container>
      </Box>
    </Element>
  );
}
