import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import React from "react";

import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';import ChecklistIcon from '@mui/icons-material/Checklist';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';

const services = [
  {
    title: "Lorem Ipsum",
    text: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    icon: <WorkOutlineOutlinedIcon />,
  },
  {
    title: "Dolor Sitema",
    text: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
    icon: <ChecklistIcon />,
  },
  {
    title: "Sed ut perspiciatis",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    icon: <LeaderboardOutlinedIcon />,
  },
  {
    title: "Magni Dolores",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    icon: <LocationSearchingOutlinedIcon />,
  },
  {
    title: "Nemo Enim",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
    icon: <WbSunnyOutlinedIcon />,
  },
  {
    title: "Eiusmod Tempor",
    text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi",
    icon: <DateRangeOutlinedIcon />,
  },
];

export default function Services() {
  return (
      <Box
        component={"section"}
        px={[2, 5]}
        py={7}
        bgcolor={"#0c0c0c"}
        color={"white"}
      >
        <Container>
          <Typography
            sx={{ textShadow: "0 0 70px #fd4829" }}
            variant="h2"
            fontWeight={"bold"}
            color="warning"
          >
            Services
          </Typography>
          <Typography variant="body1" mb={3}>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </Typography>

          <Grid container>
            {services.map(({title, text, icon}, i) => (
              <Grid key={i + 600} size={{ lg: 4, md: 6, xs: 12 }} py={2}>
                <Box display={"flex"} gap={2} sx={{
                    "& svg": {
                        fill: "white"
                    },
                    "& .css-5nxvm9-MuiButtonBase-root-MuiIconButton-root": {
                        border: "1px solid red"
                    },
                    "&:hover": {
                        "& svg": {
                            fill: "red"
                        },
                        "& .css-5nxvm9-MuiButtonBase-root-MuiIconButton-root": {
                            bgcolor: "transparent",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "red"
                        },
                        "& p":
                        {color:"error.main"}
                    }
                }}>
                    <Box>
                        <IconButton sx={{bgcolor: "error.main"}}>
                            {icon}
                        </IconButton>
                    </Box>
                  <Box>
                    <Typography variant="h6" component={"p"}>{title}</Typography>
                    <Typography variant="overline">{text}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
  );
}
