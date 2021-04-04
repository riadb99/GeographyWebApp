import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
});

export default function DisplayData(props) {
    const classes = useStyles();
    if(props.country.length !== 0) {
        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={props.country.name + ' Flag'}
                        height="300"
                        width = "500"
                        image={props.country.flag}
                        title="Flag"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.country.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Population: {props.country.population}
                            <br />
                            Capital: {props.country.capital}
                            <br />

                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        );
    }
    else{
        return null;
    }
}
