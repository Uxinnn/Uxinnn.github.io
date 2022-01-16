import React from 'react';
import { Box, Typography, AppBar, Container, Toolbar, Button, IconButton, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const NavBar = props => {
    const tabsData = props.tabsData;

    const [openDrawer, setOpenDrawer] = React.useState(false);

    const toggleDrawer = () => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setOpenDrawer(!openDrawer);
    };

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters width="50px">
                    <IconButton aria-label="home" size='large' href={'#intro'} sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, color: 'white' }}>
                        <HomeIcon fontSize="inherit" />
                    </IconButton>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {tabsData.map((page) => (
                            <Button
                                key={page.tab}
                                href={'#' + page.id}
                                sx={{ color: 'white', display: 'block' }}
                            >
                                {page.tab}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={toggleDrawer()}
                            edge="start"
                            color="inherit"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <React.Fragment>
                            <Button onClick={toggleDrawer()}>left</Button>
                            <Drawer open={openDrawer} onClose={toggleDrawer()}>
                                <Box
                                    sx={{ minWidth: 250 }}
                                    onClick={toggleDrawer()}
                                    onKeyDown={toggleDrawer()}
                                >
                                    <List>
                                        <ListItemButton component='a' href='#intro'>
                                            <ListItemText>
                                                <Typography>Introduction</Typography>
                                            </ListItemText>
                                        </ListItemButton>
                                        {tabsData.map(
                                            (page) => (
                                                <ListItemButton component='a' href={'#' + page.id}>
                                                    <ListItemText>
                                                        <Typography>
                                                            {page.tab}
                                                        </Typography>
                                                    </ListItemText>
                                                </ListItemButton>
                                            )
                                        )}
                                    </List>
                                </Box>
                            </Drawer>
                        </React.Fragment>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton aria-label="email" href={`mailto:xinyu.foong@gmail.com`} sx={{ color: 'white' }}>
                            <EmailIcon />
                        </IconButton>
                        <IconButton aria-label="github" size='large' target="_blank" href={`https://github.com/Uxinnn`} sx={{ color: 'white' }}>
                            <GitHubIcon fontSize="inherit" />
                        </IconButton>
                        <IconButton aria-label="linkedin" size='large' target="_blank" href={`https://www.linkedin.com/in/foongxinyu/`} sx={{ color: 'white' }}>
                            <LinkedInIcon fontSize="inherit" />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
