import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import '../styles/cardStyle.css';

export default function ActionAreaCard({ title, description, image }) {
  return (
    <Card sx={{ maxWidth: 345, margin: '1rem' }}>
      <CardActionArea>
        {image && (
          <CardMedia
            component="img"
            height="240"
            image={image}
            alt={title}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
