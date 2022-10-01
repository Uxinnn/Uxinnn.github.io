import React from 'react';
import { Typography, Grid, Card, Box, CardHeader, CardMedia, CardContent } from '@mui/material';

const Skills = props => {
    const skillsData = props.skillsData;
    const tabId = props.tabId;

    const skillCard = skillData => {
        return (
            <Grid 
                item 
                component={Card} 
                md={2.05} 
                minWidth='210px' 
                sx={{ 
                    margin: 2, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'flex-start' 
                }}
            >
                <CardHeader 
                    title={skillData.category} 
                    titleTypographyProps={{
                        fontWeight: 'bold', 
                        minHeight: '4rem'
                    }}
                />
                <CardMedia 
                    component="img" 
                    image={skillData.icon} 
                    sx={{
                        marginLeft: 'auto', 
                        marginRight: 'auto', 
                        width: '70%'
                    }}
                />
                <CardContent>
                    <ul>
                        {skillData.items.map(
                            item => { 
                                return (
                                    <li>
                                        <Typography 
                                            variant='body1' 
                                            textAlign='left'
                                        >
                                            {item}
                                        </Typography>
                                    </li>
                                )
                            }
                        )}
                    </ul>
                </CardContent>
            </Grid >
        )
    }

    return (
        <React.Fragment>
            <Box 
                id={tabId} 
                sx={{ 
                    pt: 6
                }}
            >
                <Typography 
                    variant='h2' 
                    textAlign='center' 
                    fontWeight='bold'
                >
                    Skills
                </Typography>
                <Grid 
                    container 
                    justifyContent='space-evenly' 
                    alignItems='stretch' 
                    textAlign='center'
                >
                    {skillsData.map(
                        skillData => skillCard(skillData)
                    )}
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default Skills;
