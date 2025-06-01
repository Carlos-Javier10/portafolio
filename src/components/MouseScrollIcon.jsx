import React from "react";
import Box from "@mui/material/Box";

const MouseScrollIcon = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      mt: 4,
      mb: 4,
      width: "100%",
    }}
  >
    <Box
      sx={{
        width: 36,
        height: 60,
        border: "2px solid #1e88e5",
        borderRadius: 20,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(30,136,229,0.08)",
      }}
    >
      <Box
        sx={{
          width: 6,
          height: 14,
          borderRadius: 3,
          background: "#1e88e5",
          position: "absolute",
          top: 10,
          left: "50%",
          transform: "translateX(-50%)",
          animation: "mouseScrollAnim 1.4s infinite cubic-bezier(.4,2,.6,1)",
        }}
      />
      <style>{`
        @keyframes mouseScrollAnim {
          0% { opacity: 1; top: 10px; }
          60% { opacity: 1; top: 28px; }
          100% { opacity: 0; top: 38px; }
        }
      `}</style>
    </Box>
    <Box sx={{ mt: 1, color: "#1e88e5", fontWeight: 500, fontSize: 16, textAlign: "center" }}>
      Desplázate con la rueda
    </Box>
  </Box>
);

export default MouseScrollIcon;
