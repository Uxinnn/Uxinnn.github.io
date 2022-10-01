import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Typography, Box } from '@mui/material';


const TestimonialV2 = props => {
    const testimonialsData = props.testimonialsData;

    const createQuote = testimonialData => {
        // Creates a quote object
        return (
            <React.Fragment>
                <Box 
                    minHeight={{ 
                        xs: '45vh', 
                        md: '25vh' 
                    }} 
                    sx={{
                        px: {
                            xs: 5, 
                            s: 10, 
                            md: 20
                        }, 
                        '& .MuiTypography-root': {color: 'secondary.main'}
                    }}
                >
                    <Typography variant='h6'>
                        {testimonialData.quote}
                    </Typography>
                    <Box 
                        position='absolute' 
                        bottom='0' 
                        right='20%' 
                        sx={{
                            '& .MuiTypography-root': {
                                textAlign: 'right'
                            }
                        }}
                    >
                        <Typography variant='subtitle2'>
                            ~ {testimonialData.supervisor}
                        </Typography>
                        <Typography variant='subtitle2'>
                            {testimonialData.position}
                        </Typography>
                        <Typography variant='subtitle2' verticalAlign='bottom'>
                            {testimonialData.company}
                        </Typography>
                    </Box>
                </Box>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Box 
                minHeight={{ 
                    xs: '50vh', 
                    md: '30vh' 
                }} 
                sx={{
                    backgroundColor: 'primary.main'
                }}
            >
                <Carousel 
                    navButtonsAlwaysVisible='true' 
                    navButtonsProps={{
                        style: {
                            backgroundColor: 'transparent'
                        }
                    }}
                >
                    {testimonialsData.map(
                        testimonialData => createQuote(testimonialData)
                    )}
                </Carousel>
            </Box>
        </React.Fragment>
    )
}

export default TestimonialV2;
