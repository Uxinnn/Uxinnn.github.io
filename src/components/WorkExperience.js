import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';

const WorkExperience = props => {
    const workExpsData = props.workExperienceData;
    const tabId = props.tabId;

    const makeWorkExpDot = workExpData => {
        return (
            <TimelineItem>
                <TimelineOppositeContent color="secondary">
                    {workExpData.duration}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary"/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6'>
                        {workExpData.job}
                    </Typography>
                    <Typography variant='subtitle2'>
                        {workExpData.org}
                    </Typography>
                    <Typography variant='body2'>
                        {workExpData.description}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        )
    }

    return (
        <Grid container id={tabId} justifyContent='center' alignItems='center'  sx={{paddingTop: '50px'}}>
            <Grid item sm={12} sx={{ textAlign: 'center', display: { xs: 'block', md: 'none' } }}>
                <Typography variant='h1' fontFamily='Agency FB'>
                    Work Experience
                </Typography>
            </Grid>
            <Grid item sm={12} md={6}>
                <Timeline position='alternate'>
                    {workExpsData.map(workExpData => makeWorkExpDot(workExpData))}
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="primary" />
                        </TimelineSeparator>
                        <TimelineContent></TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Grid>
            <Grid item md={6} sx={{ textAlign: 'center', display: { xs: 'none', md: 'block' } }}>
                <Typography variant='h1' fontFamily='Agency FB'>
                    Work Experience
                </Typography>
            </Grid>
        </Grid>
    )
}

export default WorkExperience;
