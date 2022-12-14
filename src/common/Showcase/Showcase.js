import { Typography, Box } from "@mui/material";
import backgroundImage from "../../assets/images/showcase.jpg";

const Showcase = ({ title, extra }) => {
  // console.log(window.location.pathname);
  return (
    <Box
      sx={{
        minHeight: { xs: "225px", md: "275px" },
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `url(${backgroundImage}) center / cover no-repeat`,
      }}
    >
      <Box
        sx={{
          background: "rgba(0, 0, 0, 0.45)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      ></Box>
      <Box sx={{ zIndex: 2 }}>
        <Typography variant="h1" sx={{ color: "white", letterSpacing: "3px" }}>
          {title} {extra}
        </Typography>
      </Box>
    </Box>
  );
};

export default Showcase;
