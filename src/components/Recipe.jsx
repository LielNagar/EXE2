import '../style/myCSS.css'
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'

export default function Recipe(props) {
    if (props.done)
        return (
            <Card sx={{ maxWidth: 345 }} className='float-child'>
                <CardMedia
                    component="img"
                    height="100"
                    image={props.imgSrc}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.cookingMethod}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button id='myButton' size="small" onClick={() => props.eatDish(props.name, props.cookingMethod, props.imgSrc)}>Eat Dish!</Button>
                </CardActions>
            </Card>
        );
    return (
        <Card sx={{ maxWidth: 345 }} className='float-child'>
            <CardMedia
                component="img"
                height="100"
                image={props.imgSrc}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.cookingMethod}
                </Typography>
            </CardContent>
            <CardActions>
                <Button id='myButton' size="small" onClick={() => props.prepareDish(props.name, props.cookingMethod, props.imgSrc)}>Prepare Dish!</Button>
            </CardActions>
        </Card>
    );
}