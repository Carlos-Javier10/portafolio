import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DetalleProductoModal from "./descripcionComponent"; // Importa el modal

export default function MediaCard({
  image = "",
  title = "",
  heading = "",
  description = "",
  descriptionLarga = "",
}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          transition: "transform 0.3s cubic-bezier(.25,.8,.25,1)",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: 6,
          },
        }}
      >
        <CardMedia
          sx={{ height: 200, width: "100%", objectFit: "cover" }}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {heading}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              whiteSpace: "pre-line",
              lineHeight: 1.7,
              fontSize: "1rem",
            }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleOpen}>
            Más Información
          </Button>
        </CardActions>
      </Card>
      <DetalleProductoModal
        open={open}
        handleClose={handleClose}
        title={heading}
        descriptionLarga={descriptionLarga}
      />
    </>
  );
}