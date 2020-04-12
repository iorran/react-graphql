import React, { useState, useEffect, useCallback, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IMessage } from '../../models/message';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 16
  },
  media: {
    height: 140,
  },
});

type Props = {
    message: IMessage
}

function Message({ message }: Props) {
  const classes = useStyles(); 
  const [image, setImage] = useState("");

  const getImage = useCallback(async() => {
    return fetch('https://picsum.photos/200')
    .then(data => {
      console.log(data)
      setImage(data?.url)
    });
  }, []);

  useEffect(() => {
    getImage();
  }, [getImage]);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent> 
          <Typography variant="h5" component="h2">
            {message.content}
          </Typography>
          <Typography gutterBottom variant="body2" color="textSecondary" component="p">
            {message.user.email}
          </Typography> 
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Like
        </Button>
        <Button size="small" color="primary">
          Deslike
        </Button>
      </CardActions>
    </Card>
  );
}

export default memo(Message);