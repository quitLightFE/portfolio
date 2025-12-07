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
import { useState } from "react";

export default function Layout({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [openMenu, setOpenMenu] = useState(false);
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
      {isMobile ? (
        <Drawer
          variant="persistent"
          open={openMenu}
          sx={{
            "&::firstchild": {
              bgcolor: "red",
            },
          }}
        >
          <MyMenu />
        </Drawer>
      ) : (
        <Drawer open variant="permanent">
          <MyMenu />
        </Drawer>
      )}
      <Box
        component={"main"}
        sx={{ flexGrow: 1, marginLeft: [0, 0, 0, "300px"] }}
      >
        {isMobile && (
          <IconButton
            onClick={() => setOpenMenu(!openMenu)}
            sx={{
              position: "fixed",
              right: 30,
              top: 30,
              p: 1,
              color: "#fff",
            }}
          >
            {(openMenu && <CloseIcon />) || <MenuIcon />}
          </IconButton>
        )}
        {children}
      </Box>
    </Box>
  );
}
