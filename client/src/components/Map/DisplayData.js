import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 200,
        border: 20,
        color: 'black',
        boxShadow: '1px 1px 4px 0 rgba(253, 94, 83, .3)'
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
                        height="100%"
                        width = "100%"
                        image={props.country.flag}
                        title="Flag"
                    />
                    <CardContent>
                        <Typography variant="h6">
                            {props.country.name}
                        </Typography>
                        <Typography variant="h7">
                            Endonym: {props.country.nativeName}
                        </Typography>
                        <Typography variant="h8" color="textSecondary" component="p">
                            <br />
                            Capital: {props.country.capital}
                            <br />
                            Sub-Region: {props.country.subregion}
                            <br />
                            Area: {props.country.area} sq km
                            <br />
                            Population: {props.country.population}
                            <br />
                            Currency: {props.country.currencies[0].name}
                            <br />
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
    else{
        return null;
    }
}
