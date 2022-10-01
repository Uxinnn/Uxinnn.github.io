import React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import { Box } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import profilePic from '../img/profilePic.jpg';


const Intro = props => {
    const linksData = props.linksData;

    return (
        <Box 
            id='intro' 
            backgroundColor='primary.main' 
            display='flex' 
            flexDirection='column' 
            justifyContent='flex-start' 
            alignItems='center'
        >
            <Grid 
                container 
                justifyContent='center' 
                alignItems='center' 
                minHeight='80vh'
            >
                <Grid 
                    item 
                    sm={12} 
                    md={6} 
                    sx={{
                        textAlign: 'center'
                    }}
                >
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
                <Grid 
                    item 
                    sm={12} 
                    md={6} 
                    sx={{
                        textAlign: 'center'
                    }}
                >
                    <Box 
                        height='100%' 
                        sx={{
                            padding: 4, 
                            '& .MuiTypography-root': {
                                color: 'secondary.main'
                            } 
                        }}
                    >
                        <Typography variant='h6'>
                            Hi there, I'm
                        </Typography>
                        <Typography variant='h3'>
                            Foong Xin Yu
                        </Typography>
                        <Typography>
                            I am a final year student at the National University of Singapore pursuing a Bachelor's in Computer Engineering under the Engineering Scholars Programme.
                            Thank you for taking the time to look around this portfolio website of mine :)
                        </Typography>
                        <br/>
                        <Box 
                            display='flex' 
                            justifyContent='space-evenly'
                            sx={{
                                '& .MuiButton-root': {
                                    minWidth: '100px'
                                }
                                }}
                        >
                            <Button 
                                variant='contained' 
                                href={linksData.resume} 
                                target='_blank' 
                                color='secondary'
                            >
                                Resume
                            </Button>
                            <Button 
                                variant='contained' 
                                href={linksData.cv} 
                                target='_blank' 
                                color='secondary'
                            >
                                CV
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <KeyboardArrowDownIcon 
                color="secondary" 
                sx={{ 
                    fontSize: '60px' 
                }}
            />
        </Box>
    )
}

export default Intro;
