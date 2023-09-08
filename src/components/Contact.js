import React from 'react';
import { Box, Grid, Typography, Card, IconButton, Stack, Divider, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FooterBackground from '../img/footerBackground.png';


const Contact = props => {
    const tabId = props.tabId;
    const linksData = props.linksData;

    // Data here is used in the contacts card
    const contactsData = [
        {
            description: 'xinyu.foong@gmail.com', 
            ariaLabel: 'email', 
            link: linksData.email, 
            icon: <EmailIcon />
        }, 
        {
            description: 'Uxinnn', 
            ariaLabel: 'github', 
            link: linksData.github, 
            icon: <GitHubIcon />
        }, 
        {
            description: 'foongxinyu', 
            ariaLabel: 'linkedin', 
            link: linksData.linkedin, 
            icon: <LinkedInIcon />
        }
    ]

    // Data here is used in the links at the footer of the portfolio
    const footerLinksData = [
        {
            label: 'Resume', 
            link: linksData.resume
        }, 
        {
            label: 'Email', 
            link: linksData.email
        }, 
        {
            label: 'Github', 
            link: linksData.github
        }, 
        {
            label: 'LinkedIn', 
            link: linksData.linkedin
        }
    ]

    return (
        <React.Fragment>
            <Grid 
                container 
                id={tabId} 
                justifyContent='flex-end' 
                alignItems='center' 
                direction='column' 
                minHeight='100vh' 
                minWidth='103.9%' 
                overflow='hidden' 
                sx={{ 
                    paddingTop: '50px', 
                    backgroundImage: `url(${FooterBackground})`, 
                    backgroundSize: 'contain', 
                    backgroundPosition: 'center bottom', 
                    backgroundRepeat: 'no-repeat' 
                }}
            >
                <Card 
                    sx={{ 
                        width: '400px', 
                        minHeight: '300px', 
                        textAlign: 'center', 
                        borderRadius: '20px' 
                    }}
                >
                    <Grid 
                        container 
                        direction='column' 
                        minHeight='inherit' 
                        justifyContent='space-evenly' 
                        alignItems='center'
                    >
                        <Typography 
                            variant='h3' 
                            fontWeight='bold'
                        >
                            Contacts
                        </Typography>
                        <Typography 
                            variant='subtitle1' 
                            fontStyle='italic' 
                            paddingLeft='10%' 
                            paddingRight='10%'
                        >
                            Do reach out if you would like to connect!
                        </Typography>
                        <Stack 
                            direction='column' 
                            justifyContent='left'
                        >
                            {contactsData.map(
                                contactData => (
                                    <Box 
                                        display='flex' 
                                        alignItems='center'
                                    >
                                        <IconButton 
                                            color="primary" 
                                            aria-label={contactData.ariaLabel}
                                            href={contactData.link}
                                        >
                                            {contactData.icon}
                                        </IconButton>
                                        <Typography>
                                            {contactData.description}
                                        </Typography>
                                    </Box>
                                )
                            )}
                        </Stack>
                    </Grid>
                </Card>
                {/* Footer */}
                <Stack 
                    direction="row" 
                    mt={8}
                    divider={
                        <Divider orientation="vertical" flexItem />
                    } 
                    spacing={2}
                    >
                    {footerLinksData.map(
                        footerLink => (
                            <Link 
                                href={footerLink.link} 
                                color="secondary" 
                                underline="hover" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                {footerLink.label}
                            </Link>
                        )
                    )}
                </Stack>
                <Typography 
                    color='secondary' 
                    marginBottom={{xs: '1%', md: '2%'}} 
                    marginTop='2%'
                >
                    Foong Xin Yu
                </Typography>
            </Grid >
        </React.Fragment>
    )
}

export default Contact;
