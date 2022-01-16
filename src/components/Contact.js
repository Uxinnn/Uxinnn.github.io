import React from 'react';
import { Box, Grid, Typography, Card, IconButton, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = props => {
    const tabId = props.tabId;

    return (
        <Grid container id={tabId} justifyContent='center' alignItems='center' direction='column' minHeight='100vh' sx={{ paddingTop: '50px' }}>
            <Card sx={{ width: '400px', minHeight: '300px', textAlign: 'center', borderRadius: '20px' }}>
                <Grid container direction='column' minHeight='inherit' justifyContent='space-evenly' alignItems='center'>
                    <Typography variant='h3'>Contact Me</Typography>
                    <Stack direction='column' justifyContent='left'>
                        <Box display='flex' alignItems='center'>
                            <IconButton color="primary" aria-label="email" href={`mailto:xinyu.foong@gmail.com`}>
                                <EmailIcon />
                            </IconButton>
                            <Typography>xinyu.foong@gmail.com</Typography>
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <IconButton color="primary" aria-label="github" target="_blank" href={`https://github.com/Uxinnn`}>
                                <GitHubIcon fontSize="inherit" />
                            </IconButton>
                            <Typography>Uxinnn</Typography>
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <IconButton color="primary" aria-label="linkedin" target="_blank" href={`https://www.linkedin.com/in/foongxinyu/`}>
                                <LinkedInIcon fontSize="inherit" />
                            </IconButton>
                            <Typography>foongxinyu</Typography>
                        </Box>
                    </Stack>
                    {/* <Box display='flex' justifyContent='space-around' alignItems='center'>
                        <IconButton color="primary" aria-label="email" href={`mailto:xinyu.foong@gmail.com`}>
                            <EmailIcon />
                        </IconButton>
                        <IconButton color="primary" aria-label="github" size='large' target="_blank" href={`https://github.com/Uxinnn`}>
                            <GitHubIcon fontSize="inherit" />
                        </IconButton>
                        <IconButton color="primary" aria-label="linkedin" size='large' target="_blank" href={`https://www.linkedin.com/in/foongxinyu/`}>
                            <LinkedInIcon fontSize="inherit" />
                        </IconButton>
                    </Box> */}
                </Grid>
            </Card>
        </Grid >
    )
}

export default Contact;
