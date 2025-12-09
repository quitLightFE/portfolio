import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box p={[3, 6]} bgcolor={"#020101ff"}>
      <Typography sx={{ color: "#fff" }} align="center">
        © Copyright Name All Rights Reserved
      </Typography>
      <Typography sx={{ color: "#fff" }} align="center">
        Designed by Me
      </Typography>
    </Box>
  );
}
