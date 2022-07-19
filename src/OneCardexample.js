import React from 'react';
import './OneCardexample.css';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    Typography,
  } from "@mui/material";
import {makeStyles} from '@mui/material/styles';

function OneCardexample() {
    const styles = {media:{ display:'flex', justifyContent:'center'
    }};
    return (
    <div>
        <Box className="cardbox">
            <Card>
                <CardActionArea className="cardarea">
                    <div>
                    <CardMedia className="cardimg" 
                        image={require("./ayane.jpeg")}
                        title="Ayane picture"
                    />
                    </div>
                    <CardContent className="cardcont">
                        <Typography variant="h3" className="cardname">
                            Ayane Shirakawa
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    </div>
  )
}

export default OneCardexample