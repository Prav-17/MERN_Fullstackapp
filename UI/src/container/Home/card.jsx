import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard(props) {
  console.log(props.details);
  console.log(props.details.productname);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    props.details && 
    <Card sx={{ maxWidth: 345,marginRight:"2%" }}>
      <CardHeader        
        title={props.details.productname}
        subheader={props.details.category}
      />
      <CardMedia
        component="img"
        height="250"
        image={props.details.image}
        alt={props.details.productname}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.details.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>        
        <Typography>{props.details.productprice}</Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Manufacture:</Typography>
          <Typography paragraph>
            {props.details.productmanufacturer}
          </Typography>
          </CardContent>
      </Collapse>
    </Card>
  );
}
