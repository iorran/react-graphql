import React, { memo, useMemo } from 'react';
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

  const email = useMemo(() => message.user.email, [message]);
  const content = useMemo(() => message.content, [message]);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {content}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {email}
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