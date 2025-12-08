import {
  Box,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MyMenu from "./MyMenu";
import { useEffect, useState } from "react";
import { ArrowUpward } from "@mui/icons-material";

export default function Layout({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [openMenu, setOpenMenu] = useState(false);
  const [showBtnScroll, setShowBtnScroll] = useState(false);

  const toggleBtnScroll = () => {
    if (window.scrollY > 300) setShowBtnScroll(true);
    else setShowBtnScroll(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleBtnScroll);

    return () => window.removeEventListener("scroll", toggleBtnScroll);
  }, []);

  return (
    <Box
      className="App"
      display={"flex"}
      sx={{
        "& .MuiDrawer-root .css-1lwhjos-MuiPaper-root-MuiDrawer-paper": {
          borderRight: "none",
        },
        overflowY: "auto",
        flexGrow: 1,
      }}
    >
      <Drawer
        onClose={(e, r) => {
          if (r === "backdropClick" && isMobile) setOpenMenu(false)
          return
        }}
        open={isMobile ? openMenu : true}
        variant={isMobile ? "persistent" : "permanent"}
        
      >
        <MyMenu />
      </Drawer>
      <Box
        component={"main"}
        sx={{ flexGrow: 1, marginLeft: [0, 0, 0, "300px"] }}
      >
        {isMobile && (
          <IconButton
            onClick={() => setOpenMenu(!openMenu)}
            color="warning"
            sx={{
              position: "fixed",
              right: 30,
              top: 30,
              p: 1,
            }}
          >
            {(openMenu && <CloseIcon />) || <MenuIcon />}
          </IconButton>
        )}
        {children}
      </Box>
      <IconButton
        color="warning"
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          width: 40,
          height: 40,
          display: showBtnScroll ? "block" : "none",
        }}
        onClick={scrollToTop}
      >
        <ArrowUpward />
      </IconButton>
    </Box>
  );
}
