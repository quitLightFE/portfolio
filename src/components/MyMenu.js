import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PolylineOutlinedIcon from "@mui/icons-material/PolylineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
// import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Link } from "react-scroll";

const socials = [
  <XIcon />,
  <FacebookIcon />,
  <InstagramIcon />,
  <PolylineOutlinedIcon />,
];

const tabs = [
  {
    title: "Home",
    icon: <HomeOutlinedIcon />,
  },
  {
    title: "About",
    icon: <AccountCircleOutlinedIcon />,
  },
  {
    title: "Resume",
    icon: <ArticleOutlinedIcon />,
  },
  // {
  //   title: "Portfolio",
  //   icon: <InsertPhotoOutlinedIcon />,
  // },
  {
    title: "Services",
    icon: <DnsOutlinedIcon />,
  },
  {
    title: "Contact",
    icon: <EmailOutlinedIcon />,
  },
];

export default function MyMenu() {
  const theme = useTheme();

  return (
    <Box
      bgcolor={"CanvasText"}
      height={"100%"}
      width={300}
      display={"flex"}
      alignItems={"center"}
      //   minHeight={"100dvh"}
      flexDirection={"column"}
      rowGap={2}
      p={2}
    >
      <Avatar sx={{ width: 120, height: 120, p: 0.5 }} />
      <Typography variant="h5" sx={{ color: "white" }}>
        Ismim Familiyam
      </Typography>
      <Box display={"flex"} gap={2}>
        {socials.map((item, i) => (
          <IconButton
            key={i + 100}
            sx={{
              color: "#fff",
              p: 1.5,
              bgcolor: theme.palette.grey[900],
              "&:hover": {
                bgcolor: theme.palette.error.dark,
              },
            }}
          >
            {item}
          </IconButton>
        ))}
      </Box>
      <Box
        width={"100%"}
        color={"white"}
        sx={{
          color: "#ffffffb6",
          "& > a": {
            display: "flex",
            p: 2,
            gap: 2,
            cursor: "pointer",
            "&.active, &:hover": {
              textShadow: "0 0 20px #ff0000",
              color: "#cc3a3aff",
              "& svg": {
                fill: theme.palette.error.dark,
                filter: "drop-shadow(0 0 5px red)",
              },
            },
          },
        }}
      >
        {tabs.map((item, i) => (
          <Link
            key={i + 200}
            to={item.title.toLowerCase()}
            smooth
            spy
            duration={500}
            activeClass="active"
          >
            {item.icon}
            {item.title}
          </Link>
        ))}
      </Box>
    </Box>
  );
}
