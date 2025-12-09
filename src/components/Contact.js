import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import bgContact from "../assets/bg/v1016-b-09_1.jpg";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { EmailOutlined, LocationOnOutlined } from "@mui/icons-material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const DefaultIcon = L.icon({ iconUrl: icon, shadowUrl: iconShadow });
L.Marker.prototype.options.icon = DefaultIcon;

export default function Contact() {
  return (
    <Box
      component={"section"}
      px={[2, 5]}
      py={7}
      sx={{
        backgroundImage: `url(${bgContact})`,
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
          Contact
        </Typography>
        <Grid container sx={{ bgcolor: "#46464654", p: 4, borderRadius: 2 }}>
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box color={"white"}>
              <Box display={"flex"} gap={1} mb={1}>
                <IconButton color="inherit">
                  <LocationOnOutlined />
                </IconButton>
                <Box>
                  <Typography variant="h6">Address</Typography>
                  <Typography variant="p">Taskent City</Typography>
                </Box>
              </Box>
              <Box display={"flex"} gap={1} mb={1}>
                <IconButton color="inherit">
                  <LocalPhoneOutlinedIcon />
                </IconButton>
                <Box>
                  <Typography variant="h6">Phone</Typography>
                  <Typography variant="p">+998991234567</Typography>
                </Box>
              </Box>
              <Box display={"flex"} gap={1} mb={1}>
                <IconButton color="inherit">
                  <EmailOutlined />
                </IconButton>
                <Box>
                  <Typography variant="h6">Email</Typography>
                  <Typography variant="p">abcd@gmail.com</Typography>
                </Box>
              </Box>
              <MapContainer
                style={{ width: "100%", height: 270 }}
                center={[41.311031, 69.279635]}
                zoom={16}
                scrollWheelZoom={true}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[41.311031, 69.279635]}>
                  <Popup>Amir Temur Xiyoboni</Popup>
                </Marker>
              </MapContainer>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, lg: 7 }}>
            <Box
              component={"form"}
              color={"white"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Grid container>
                <Grid size={{ xs: 12, md: 6 }} p={2}>
                  <FormControl variant="filled" fullWidth color="warning">
                    <InputLabel htmlFor="name-input">Your Name</InputLabel>
                    <OutlinedInput
                      color="warning"
                      sx={{ color: "#fff" }}
                      id="name-input"
                    />
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} p={2}>
                  <FormControl color="warning" variant="filled" fullWidth>
                    <InputLabel htmlFor="email-input">Your Email</InputLabel>
                    <OutlinedInput id="email-input" />
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12 }} p={2}>
                  <FormControl color="warning" variant="filled" fullWidth>
                    <InputLabel htmlFor="subject-input">Subject</InputLabel>
                    <OutlinedInput id="subject-input" />
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12 }} p={2}>
                  <TextField
                    color="warning"
                    multiline
                    fullWidth
                    rows={10}
                    placeholder="Message"
                  />
                </Grid>
              </Grid>
              <Button
                sx={{ borderRadius: 4 }}
                type="button"
                variant="contained"
                color="warning"
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
