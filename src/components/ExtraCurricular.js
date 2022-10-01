import React from 'react';
import { Grid, Typography, Box, Tabs, Tab } from '@mui/material';


const TabPanel = props => {
    // Creates the panel to show more details for each extra curricular activity
    const { data, value, index } = props;
  
    return (
        <Box>
            {value === index && (
            <Box>
                <Typography variant='h6'>
                    {data.title}
                </Typography>
                <Typography variant='subtitle2'>
                    {data.duration}
                </Typography>
                <Box 
                    component="img" 
                    sx={{
                        display: 'block', 
                        marginLeft: 'auto', 
                        marginRight: 'auto', 
                        width: 'auto', 
                        height: '50px',
                        objectFit: 'cover',
                    }}
                    src={data.pic}
                    alt="extra curricular pic"
                />
                <Typography>
                    {data.description}
                </Typography>
            </Box>
            )}
        </Box>
    );
}

const ExtraCurricular = props => {
    const extraCurricularsData = props.extraCurricularsData;
    const tabId = props.tabId;

    const [curricularIndex, setCurricularIndex] = React.useState(0);

    const handleChange = (event, newValue) => {
        setCurricularIndex(newValue);
    };

    return (
        <React.Fragment>
            <Grid 
                container 
                id={tabId} 
                justifyContent='center' 
                alignItems='center' 
                minHeight='100vh' 
                sx={{
                    pt: 6
                }}
            >
                {/* Header */}
                <Grid 
                    item 
                    sm={12} 
                    md={6} 
                    sx={{ 
                        textAlign: 'center' 
                    }}
                >
                    <Typography 
                        variant='h2' 
                        fontWeight='bold' 
                        textAlign={{ xs: 'none', md: 'right' }} 
                        paddingRight={{ xs: 'none', md: '10%' }}
                    >
                        Extra <br/>Curricular
                    </Typography>
                </Grid>

                {/* Content */}
                <Grid 
                    container 
                    item 
                    sm={12} 
                    md={6} 
                    paddingRight={{sm: 'none', md: '10%'}}
                >
                    {/* Create the clickable tabs on the left */}
                    <Grid 
                        item 
                        xs={3}
                    >
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={curricularIndex}
                            onChange={handleChange}
                            aria-label="extra curricular tabs"
                            sx={{ 
                                borderRight: 2, 
                                borderColor: 'divider', 
                                maxHeight: '85vh' 
                            }}
                        >
                            {extraCurricularsData.map(
                                (extraCurricularData, idx) => {
                                    return <Tab label={extraCurricularData.title} id={idx} />
                                }
                            )}
                        </Tabs>
                    </Grid>
                    {/* Creates the panel on the right that display more details of each extra curricular activity*/}
                    <Grid 
                        item xs={9} 
                        sx={{
                            pl: 1
                        }}
                    >
                        {extraCurricularsData.map(
                            (extraCurricularData, idx) => {
                                return <TabPanel value={curricularIndex} index={idx} data={extraCurricularData} />
                            }
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default ExtraCurricular;
