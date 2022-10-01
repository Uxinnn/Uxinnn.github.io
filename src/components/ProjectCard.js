import React from 'react';
import { Box, IconButton, Button, Grid, Chip, Card,  CardMedia, CardHeader, CardActionArea, useMediaQuery, useTheme, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import parse from 'html-react-parser';

const ProjectCard = props => {
    const [openDialog, setOpenDialog] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const { title, subtitle, thumbnail, pic, description, link, techUsed } = props;

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    return (
        <Grid 
            item 
            component={Card} 
            xs={7} 
            sm={5} 
            lg={3} 
            sx={{ 
                margin: 2, 
                display: 'flex', 
                flexDirection: 'column', 
                textAlign: 'center'
            }}
        >
            {/* How the card looks in the grid before clicking on it */}
            <CardActionArea 
                onClick={handleClickOpen} 
                sx={{
                    minHeight: '100%'
                }}
            >
                <CardHeader 
                    title={title} 
                    titleTypographyProps={{
                        fontWeight: 'bold'
                    }} 
                    subheader={subtitle}
                />
                <CardMedia
                    component='img'
                    image={thumbnail}
                    alt='thumbnail'
                    sx={{
                        marginLeft: 'auto', 
                        marginRight: 'auto', 
                        width: '70%', 
                        pb: 2, 
                    }}
                />
            </CardActionArea>
            {/* Dialog box that appears when the project is clicked */}
            <Dialog 
                fullScreen={fullScreen} 
                open={openDialog} 
                onClose={handleClose} 
                aria-labelledby='project-dialog' 
                fullWidth='true' 
                maxWidth='md' 
                PaperProps={{ 
                    sx: {backgroundColor: 'white'}
                }}
            >
                <DialogActions>
                    <IconButton 
                        color="primary" 
                        aria-label="close dialog" 
                        autoFocus 
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogActions>
                <DialogTitle 
                    textAlign='center' 
                    variant='h4'
                >
                    {title}
                </DialogTitle>
                <DialogContent>
                    <Box 
                        component='div' 
                        sx={{ 
                            textAlign: 'center' 
                        }}
                    >
                        <Box
                            component="img"
                            sx={{
                                width: '70%',
                                height: 'auto',
                            }}
                            src={pic}
                            alt="project-pic"
                        />
                    </Box>
                    <DialogContentText variant='body1'>
                        {parse(description)}
                    </DialogContentText>
                    {/* Show a button if there is a link given for the project */}
                    {link !== '' &&
                        <Box textAlign='center'>
                            <br />
                            <Button 
                                href={link} 
                                target="_blank"
                            >
                                Find out more!
                            </Button>
                        </Box>
                    }
                    <br />
                    {/* Chips below to list technologies used */}
                    <Grid 
                        container 
                        direction='row' 
                        justifyContent='left' 
                        alignItems='center' 
                        spacing={1}
                    >
                        {techUsed.map(
                            item => { return (
                                <Grid item>
                                    <Chip label={item} color='primary'/>
                                </Grid>
                            )}
                        )}
                    </Grid>
                </DialogContent>
            </Dialog>
        </Grid>
    )
}

export default ProjectCard;
