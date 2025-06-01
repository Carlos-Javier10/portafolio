import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard({ title, description, image }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: '1rem',
        background: 'linear-gradient(135deg, #232526 0%, #1e88e5 100%)',
        color: '#fff',
        borderRadius: 3,
        boxShadow: 3,
        transition:
          'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 10,
        },
      }}
    >
      <CardActionArea>
        {image && (
          <CardMedia
            component="img"
            height="240"
            image={image}
            alt={title}
            sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
          />
        )}
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: '#fff', fontWeight: 'bold' }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'rgba(255,255,255,0.85)' }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
