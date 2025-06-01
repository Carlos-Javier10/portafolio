import React from "react";
import Box from "@mui/material/Box";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/carlos-javier-guagrilla-chicaiza-30500a1a4/",
    label: "LinkedIn",
    icon: <LinkedInIcon sx={{ fontSize: 40, color: "#0A66C2", transition: "color 0.25s" }} />,
    hover: {
      transform: "scale(1.18) rotate(-8deg)",
      boxShadow: "0 8px 32px 0 #0A66C2",
      bgcolor: "#0A66C2",
      svgColor: "#fff",
    },
    bgcolor: "#fff",
    color: "#0A66C2",
  },
  {
    href: "https://github.com/Carlos-Javier10",
    label: "GitHub",
    icon: <GitHubIcon sx={{ fontSize: 40, color: "#222", transition: "color 0.25s" }} />,
    hover: {
      transform: "scale(1.18) rotate(8deg)",
      boxShadow: "0 8px 32px 0 #222",
      bgcolor: "#222",
      svgColor: "#fff",
    },
    bgcolor: "#fff",
    color: "#222",
  },
];

const SocialLinks = () => (
  <Box
    display="flex"
    flexDirection={{ xs: "column", sm: "row" }}
    justifyContent="center"
    alignItems="center"
    gap={{ xs: 2, sm: 4 }}
    mt={7}
    width="100%"
  >
    {socialLinks.map(({ href, label, icon, hover, bgcolor }, i) => (
      <Box
        key={label}
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          transition: "transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.25s",
          boxShadow: 3,
          bgcolor,
          p: 1.2,
          "&:hover": {
            transform: hover.transform,
            boxShadow: hover.boxShadow,
            bgcolor: hover.bgcolor,
            "& svg": { color: hover.svgColor },
          },
        }}
      >
        {icon}
      </Box>
    ))}
  </Box>
);

export default SocialLinks;
