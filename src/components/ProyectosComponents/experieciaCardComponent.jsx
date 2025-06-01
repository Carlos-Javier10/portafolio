import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ExperieciaCardComponent({ image, title, periodo, empresa, items }) {
  return (
    <Card
      sx={{
        width: 320,
        minWidth: 320,
        maxWidth: 320,
        minHeight: 370,
        maxHeight: 420,
        background: 'linear-gradient(135deg, #232526 0%, #1e88e5 100%)',
        color: '#fff',
        borderRadius: 3,
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        transition:
          'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 10,
        },
      }}
    >
      {image && (
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title || 'card image'}
          sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
        />
      )}
      <CardContent sx={{ flex: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: '#fff', fontWeight: 'bold' }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#fff', fontWeight: 500 }}>
          <strong>{periodo}</strong>
        </Typography>
        <Typography variant="body2" sx={{ color: '#fff', mb: 1 }}>
          {empresa}
        </Typography>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {items && items.map((item, idx) => (
            <li key={idx} style={{ marginBottom: 2 }}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
