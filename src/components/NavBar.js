import React from 'react';
import { Box, Typography, AppBar, Container, Toolbar, IconButton, Drawer, List, ListItemButton, ListItemText, Link, Fab } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const NavBar = props => {
    const tabsData = props.tabsData;
    const linksData = props.linksData;

    const [openDrawer, setOpenDrawer] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    const toggleDrawer = () => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setOpenDrawer(!openDrawer);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        });
    }, []);

    return (
        <React.Fragment>
            <AppBar 
                position="sticky" 
                elevation={isScrolled ? 2 : 0}
            >
                <Container 
                    maxWidth="xl"
                >
                    <Toolbar 
                        disableGutters 
                        width="50px"
                    >
                        {/* Home button on desktop view at top left*/}
                        <IconButton 
                            aria-label="home" 
                            size='large' 
                            href='#' 
                            sx={{ 
                                mr: 2, 
                                display: { xs: 'none', md: 'flex' }, 
                                color: 'secondary.main' 
                            }}
                        >
                            <HomeIcon fontSize="inherit" />
                        </IconButton>
                        {/* Hyperlinks to sections for desktop view on top left after home button */}
                        <Box 
                            sx={{ 
                                flexGrow: 1, 
                                display: { xs: 'none', md: 'flex' } 
                            }}
                        >
                            {tabsData.map(page => (
                                <Link 
                                    href={'#' + page.id} 
                                    color='secondary' 
                                    underline="hover" 
                                    marginRight="20px"
                                >
                                    <Typography 
                                        variant='subtitle2' 
                                        sx={{
                                            textTransform: 'uppercase'
                                        }}
                                    >
                                        {page.tab}
                                    </Typography>  
                                </Link>
                            ))}
                        </Box>
                        {/* Mobile view drawer */}
                        <Box 
                            sx={{ 
                                flexGrow: 1, 
                                display: { xs: 'flex', md: 'none' } 
                            }}
                        >
                            {/* Menu icon to open drawer */}
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
                            <Drawer open={openDrawer} onClose={toggleDrawer()}>
                                <Box
                                    sx={{ 
                                        minWidth: 250 
                                    }}
                                    onClick={toggleDrawer()}
                                    onKeyDown={toggleDrawer()}
                                >
                                    {/* Hyperlinks list in drawer for mobile view */}
                                    <List>
                                        <ListItemButton 
                                            component='a' 
                                            href='#'
                                        >
                                            <ListItemText>
                                                <Typography>
                                                    Home
                                                </Typography>
                                            </ListItemText>
                                        </ListItemButton>
                                        {tabsData.map(
                                            page => (
                                                <ListItemButton 
                                                    component='a' 
                                                    href={'#' + page.id}
                                                >
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
                        </Box>
                        {/* 3 icons on top right for desktop and mobile view */}
                        <Box 
                            sx={{ 
                                flexGrow: 0, 
                                '& .MuiIconButton-root': {
                                    color: 'secondary.main'
                                }
                            }}
                        >
                            <IconButton 
                                aria-label="email" 
                                size='large' 
                                target="_blank" 
                                href={linksData.email} 
                            >
                                <EmailIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton 
                                aria-label="github" 
                                size='large' 
                                target="_blank" 
                                href={linksData.github} 
                            >
                                <GitHubIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton 
                                aria-label="linkedin" 
                                size='large' 
                                target="_blank" 
                                href={linksData.linkedin} 
                            >
                                <LinkedInIcon fontSize="inherit" />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {/* Back to top button at bottom right */}
            {isScrolled && (
                <Fab 
                    color="primary" 
                    aria-label="back to top" 
                    href='#' 
                    sx={{
                        position: 'fixed', 
                        bottom: '20px', 
                        right: '20px'
                    }}
                >
                    <KeyboardArrowUpIcon fontSize='large'/>
                </Fab>
                )}
        </React.Fragment>
    );
};

export default NavBar;
