import React from 'react';
import { Typography, Grid, Card, Box } from '@mui/material';

const Skills = props => {
    const skillsData = props.skillsData;
    const tabId = props.tabId;

    const getSkillCard = skillData => {
        return (
            <Grid item component={Card} md={2} sx={{ margin: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <Box component='div' padding={2}>
                    <Typography variant='h6'>
                        {skillData.category}
                    </Typography>
                    <ul>
                        {skillData.items.map(item => { return (<li><Typography variant='body1' textAlign='left'>{item}</Typography></li>) })}
                    </ul>
                </Box>
            </Grid >
        )
    }

    return (
        <Box id={tabId} sx={{ paddingTop: '50px' }}>
            <Typography variant='h1' fontFamily='Agency FB' textAlign='center'>
                Skills
            </Typography>
            <Grid container justifyContent='space-evenly' alignItems='stretch' textAlign='center'>
                {skillsData.map(skillData => getSkillCard(skillData))}
            </Grid>
        </Box>
    )
}

export default Skills;
