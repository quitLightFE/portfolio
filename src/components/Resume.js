import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import bg3 from "../assets/bg/v1016-b-09_1.jpg";
import { Element } from "react-scroll";

export default function Resume() {
  return (
    <Element name="resume">
      <Box
        component={"section"}
        px={[2, 5]}
        py={7}
        sx={{
          backgroundImage: `url(${bg3})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          bgcolor: "#00000090",
          backgroundBlendMode: "darken",
        }}
      >
        <Container>
          <Typography
            sx={{ textShadow: "0 0 70px #fd4829" }}
            variant="h2"
            fontWeight={"bold"}
            color="warning"
          >
            Resume
          </Typography>
          <Grid container>
            <Grid size={{ lg: 6, xs: 12 }}>
              <Box display={"flex"} color={"white"}>
                <VerticalDivider />
                <Box py={2.5}>
                  <Box>
                    <Typography variant="h6" sx={{ color: "#fff" }}>
                      Hard Skills
                    </Typography>
                    <Typography variant="overline">
                      <ul style={{ paddingLeft: 20 }}>
                        <li>
                          <b>Advanced: </b> HTML5, CSS3, Flexbox, Grid, JS (ES7+)
                        </li>
                        <li>
                          <b>Intermediate: </b> React, Node.js
                        </li>
                        <li>
                          <b>Basic/Familiar: </b> React Native, Python
                        </li>
                      </ul>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ab ratione provident obcaecati nemo eum quisquam totam,
                      suscipit impedit et aliquid neque velit dolorem accusamus
                      harum earum esse fugiat consectetur quibusdam.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box display={"flex"} color={"white"}>
                <VerticalDivider />
                <Box py={2.5}>
                  <Box>
                    <Typography variant="h6" sx={{ color: "#fff" }}>
                      Tools & Workflow
                    </Typography>
                    <Typography variant="overline">
                      <ul style={{ paddingLeft: 20 }}>
                        <li>Git, GitHub workflow</li>
                        <li>Webpack/Vite </li>
                        <li>CI/CD</li>
                        <li>Figma</li>
                      </ul>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ab ratione provident obcaecati nemo eum quisquam totam,
                      suscipit impedit et aliquid neque velit dolorem accusamus
                      harum earum esse fugiat consectetur quibusdam.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
               <Grid size={{ lg: 6, xs: 12 }}>
              <Box display={"flex"} color={"white"}>
                <VerticalDivider />
                <Box py={2.5}>
                  <Box>
                    <Typography variant="h6" sx={{ color: "#fff" }}>
                      Experience
                    </Typography>
                    <Typography variant="overline">
                      <ul style={{ paddingLeft: 20 }}>
                        <li>
                          React Redux, Form Validation
                        </li>
                        <li>
                          Chart.js Mui-Chart
                        </li>
                        <li>
                          Animations, React-animation-reveal, Framer-Motion
                        </li>
                      </ul>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ab ratione provident obcaecati nemo eum quisquam totam,
                      suscipit impedit et aliquid neque velit dolorem accusamus
                      harum earum esse fugiat consectetur quibusdam.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box display={"flex"} color={"white"}>
                <VerticalDivider />
                <Box py={2.5}>
                  <Box>
                    <Typography variant="h6" sx={{ color: "#fff" }}>
                      Learning/Study
                    </Typography>
                    <Typography variant="overline">
                      <ul style={{ paddingLeft: 20 }}>
                        <li>PDP Academy </li>
                        <li>Youtube Courses</li>
                        <li>Landing Pages</li>
                        <li>Working React Apps</li>
                      </ul>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ab ratione provident obcaecati nemo eum quisquam totam,
                      suscipit impedit et aliquid neque velit dolorem accusamus
                      harum earum esse fugiat consectetur quibusdam.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Element>
  );
}

function VerticalDivider({ color, size = 12 }) {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      mr={2}
    >
      <Box
        sx={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          filter: "drop-shadow(0 0 5px red)",
          bgcolor: "error.dark",
        }}
      />
      <Box
        sx={{
          flexGrow: 1,
          width: 2,
          bgcolor: "error.main",
          opacity: 0.4,
        }}
      />
    </Box>
  );
}
