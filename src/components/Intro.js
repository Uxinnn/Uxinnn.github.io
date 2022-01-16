import React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import { Box } from '@mui/system';
import profilePic from '../img/profilePic.jpg'

const Intro = () => {
    return (
        <Box id='intro'>
            <Grid container justifyContent='center' alignItems='center' minHeight='100vh'>
                <Grid item sm={12} md={6} sx={{textAlign: 'center'}}>
                    <Box 
                        component="img" 
                        sx={{
                            width: '400px', 
                            height: '400px',
                            objectFit: 'cover',
                            borderRadius: '50%',
                            }}
                        src={profilePic}
                        alt="profile-pic"
                    />
                </Grid>
                <Grid item sm={12} md={6} sx={{textAlign: 'center'}}>
                    <Box height='100%' sx={{padding: 4}}>
                        <Typography variant='h6'>
                            Hi there, I'm
                        </Typography>
                        <Typography variant='h3'>
                            Foong Xin Yu
                        </Typography>
                        <Typography>
                            I am a second-year student at the National University of Singapore pursuing a bachelor’s in computer engineering under the Engineering Scholars Programme.
                            I have a strong interest in developing AI-based cybersecurity solutions to help professionals stay ahead of their game.
                            Feel free to look around this portfolio website of mine :)
                        </Typography>
                        <br/>
                        <Box display='flex' justifyContent='space-evenly'>
                            <Button variant='contained' href='https://drive.google.com/file/d/1bfwKd4_e0Tw3-WblJAUhbh7bafmHPEwm/view?usp=sharing' target='_blank' sx={{minWidth: '100px'}}> Resume </Button>
                            <Button variant='contained' href='https://drive.google.com/file/d/12K1igzoMLpFpY1hsj9x22bV4oCj6UhSo/view?usp=sharing' target='_blank' sx={{minWidth: '100px'}}> CV </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Intro;
