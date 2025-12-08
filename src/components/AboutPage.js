import {
  Avatar,
  Box,
  Container,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React from "react";
import bg2 from "../assets/bg/89787.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const infos = [
  [
    { Birthday: "1 May 1995" },
    { Website: "www.example.com" },
    { Phone: "+123 456 7890" },
    { City: "New York, USA" },
  ],
  [
    { Age: "30" },
    { Degree: "Master" },
    { Email: "email@example.com" },
    { Freelance: "Available" },
  ],
];

const skills = [
  [{ HTML: 100 }, { CSS: 90 }, { Javascript: 80 }],
  [{ React: 80 }, { Python: 60 }, { MUI: 60 }],
];

export default function AboutPage() {
  return (
    <>
      <Box
        component={"section"}
        px={[2, 5]}
        py={7}
        sx={{
          backgroundImage: `url(${bg2})`,
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
            About
          </Typography>

          <Typography variant="h6" sx={{ color: "white" }} pb={5}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            minus veritatis non quod officiis natus assumenda, excepturi
            recusandae, praesentium exercitationem, adipisci labore dolorum.
            Culpa maiores fugiat voluptates amet, ut quisquam.
          </Typography>

          <Box>
            <Box
              display={"flex"}
              flexDirection={{ xs: "column", lg: "row" }}
              gap={4}
              alignItems={{ xs: "center", lg: "stretch" }}
            >
              <Box width={{ xs: "75%", md: "50%" }}>
                <Avatar
                  variant="square"
                  sx={{
                    width: "min(100%, 600px)",
                    aspectRatio: 1,
                    height: "auto",
                  }}
                  //Border animation kere
                />
              </Box>
              <Box>
                <Typography variant="h5" sx={{ color: "white" }}>
                  React/Frontend Developer
                </Typography>

                <Typography variant="overline" sx={{ color: "white" }} pb={5}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis totam, reprehenderit, neque optio veritatis
                  necessitatibus illo reiciendis
                </Typography>

                <Grid container justifyContent={"space-between"}>
                  {infos.map((row, i) => (
                    <Grid key={i + 50} size={{ md: 6, xs: 12 }}>
                      <List sx={{ color: "white", py: 0 }}>
                        {row.map((info, i) => (
                          <ListItem
                            key={i + 150}
                            sx={{ fontSize: "normal", py: 2, px: 0 }}
                          >
                            <ListItemIcon
                              sx={{ color: "inherit", minWidth: 20, mr: 1 }}
                            >
                              <ArrowForwardIosIcon />
                            </ListItemIcon>
                            <Typography variant="p" fontWeight={"bolder"}>
                              {Object.keys(info)}
                            </Typography>
                            {": " + Object.values(info)}
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                  ))}
                </Grid>

                <Typography variant="overline" sx={{ color: "white" }}>
                  Officiis eligendi itaque labore et dolorum mollitia officiis
                  optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                  accusantium dolor incidunt officia tempore. Et eius omnis.
                  Cupiditate ut dicta maxime officiis quidem quia. Sed et
                  consectetur qui quia repellendus itaque neque.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box component={"section"} px={[2, 5]} py={7} sx={{ bgcolor: "#0c0c0c" }}>
        <Container>
          <Typography
            sx={{ textShadow: "0 0 70px #fd4829" }}
            variant="h3"
            fontWeight={"bold"}
            color="warning"
          >
            Skills
          </Typography>

          <Typography variant="h6" sx={{ color: "#fff" }}>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </Typography>

          <Grid container py={4}>
            {skills.map((row, i) => (
              <Grid key={i + 450} size={{ xs: 12, lg: 6 }}>
                {row.map((skill, i) => (
                  <Box
                  key={i + 550}
                    p={1}
                    color={"#fff"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={2}
                  >
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Typography variant="p">{Object.keys(skill)}</Typography>
                      <Typography>{Object.values(skill)}%</Typography>
                    </Box>
                    <LinearProgress
                      color="warning"
                      key={i + 350}
                      value={Object.values(skill)}
                      variant="determinate"
                      sx={{ height: 10, borderRadius: 1 }}
                    />
                  </Box>
                ))}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
