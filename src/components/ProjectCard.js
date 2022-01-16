import React from 'react';
import { Box, Typography, IconButton, Button, Grid, Chip, Stack, Card, CardContent, CardMedia, CardActionArea, useMediaQuery, useTheme, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import parse from 'html-react-parser';

const ProjectCard = props => {
    const [openDialog, setOpenDialog] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const { title, thumbnail, pic, description, link, techUsed } = props;

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    return (
        <Grid item component={Card} xs={7} sm={5} lg={3} sx={{ margin: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', textAlign: 'center' }}>
            <CardActionArea onClick={handleClickOpen}>
                <CardContent>
                    <Typography gutterBottom variant='button'>
                        {title}
                    </Typography>
                </CardContent>
                <CardMedia
                    component='img'
                    image={thumbnail}
                    alt='thumbnail'
                />
            </CardActionArea>
            <Dialog fullScreen={fullScreen} open={openDialog} onClose={handleClose} aria-labelledby='project-dialog' fullWidth='true' maxWidth='md'>
                <DialogActions>
                    <IconButton color="primary" aria-label="close dialog" autoFocus onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogActions>
                <DialogTitle textAlign='center' variant='h4'>
                    {title}
                </DialogTitle>
                <DialogContent>
                    <Box component='div' sx={{ textAlign: 'center' }}>
                        <Box
                            component="img"
                            sx={{
                                width: '450px',
                                height: '300px',
                            }}
                            src={pic}
                            alt="profile-pic"
                        />
                    </Box>
                    <DialogContentText variant='body1'>
                        {parse(description)}
                    </DialogContentText>
                    {link !== '' &&
                        <Box textAlign='center'>
                            <br />
                            <Button href={link} target="_blank">Find out more!</Button>
                        </Box>
                    }
                    <br />
                    <Stack direction='row' spacing={1}>
                        {techUsed.map(item => { return (<Chip label={item} />) })}
                    </Stack>
                </DialogContent>
            </Dialog>
        </Grid>
    )
}

export default ProjectCard;
