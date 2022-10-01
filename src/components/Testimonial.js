import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const Testimonial = props => {
    const testimonialsData = props.testimonialsData;
    const tabId = props.tabId;

    const createQuote = testimonialData => {
        // Creates a quote object
        return (
            <Box marginBottom='10%'>
                <Typography variant='h6'>
                    {testimonialData.quote}
                </Typography>
                <Typography textAlign='right' variant='subtitle2'>
                    ~ {testimonialData.supervisor}
                </Typography>
                <Typography textAlign='right' variant='subtitle2'>
                    {testimonialData.position}
                </Typography>
                <Typography textAlign='right' variant='subtitle2'>
                    {testimonialData.company}
                </Typography>
            </Box>
        )
    }

    return (
        <React.Fragment>
            <Grid container id={tabId} justifyContent='center' alignItems='center' minHeight='100vh' sx={{paddingTop: '50px'}}>
                {/* Header */}
                <Grid item sm={12} md={6} sx={{ textAlign: 'center' }}>
                    <Typography variant='h2' fontWeight='bold' textAlign={{ xs: 'none', md: 'right' }} paddingRight={{ xs: 'none', md: '10%' }}>
                        Testimonials
                    </Typography>
                </Grid>

                {/* Content */}
                <Grid item sm={12} md={6} paddingRight={{sm: 'none', md: '10%'}}>
                    {testimonialsData.map(testimonialData => {return (createQuote(testimonialData))})}
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Testimonial;
