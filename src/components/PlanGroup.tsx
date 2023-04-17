import React, { useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {Grid} from "@mui/material";

function PlanGroup() {
    const [selectedButton, setSelectedButton] = useState('Complete');

    // @ts-ignore
    const handleClick = (button) => {
        setSelectedButton(button);
    };

    // @ts-ignore
    const renderArrow = (button) => {
        return selectedButton === button ? <ArrowUpwardIcon sx={{ color: '#7F60F9',
            justifySelf: 'center', alignSelf: 'center', marginTop: 'auto', marginBottom: 'auto'

        }} /> : null;
    };

    return (
        <ButtonGroup
            aria-label="outlined primary button group"
            sx={
                {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignContent: 'flex-end',
                    marginTop: '1.5rem',
                    // Keep the buttons aligned with each other

                }
            }
        >
            <Grid item sx={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    // Keep the button from being pushed up by the arrow
                    marginBottom: 'auto',
                }
            }>
                <Button
                    onClick={() => handleClick('Speed')}
                    sx={{
                        justifySelf: 'end',
                        alignSelf: 'center',
                        marginTop: 'auto',
                        color: '#fff',
                        width: '7rem',
                        height: '3rem',
                        border: 'double 1px transparent',
                        backgroundImage:
                            'linear-gradient(#18181B, #18181B), radial-gradient(circle at top left, #6DDCFF,#7F60F9)',
                        backgroundOrigin: 'border-box',
                        backgroundClip: 'padding-box, border-box',
                    }}
                >
                    Speed
                </Button>
                {renderArrow('Speed')}
            </Grid>
            <Grid item sx={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    marginBottom: 'auto',
                }
}>
                <Button
                    onClick={() => handleClick('Complete')}
                    sx={{
                        width: '10rem',
                        backgroundImage: 'linear-gradient(90deg, #6DDCFF,#7F60F9)',
                        color: '#fff',
                        height: '3rem',
                    }}
                >
                    Complete
                </Button>
                {renderArrow('Complete')}
            </Grid>
            <Grid item sx={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    marginBottom: 'auto',

                }
            }>
                <Button
                    onClick={() => handleClick('Search')}
                    sx={{
                        justifySelf: 'end',
                        alignSelf: 'center',
                        marginTop: 'auto',
                        color: '#fff',
                        width: '7rem',
                        height: '3rem',
                        border: 'double 1px transparent',
                        backgroundImage:
                            'linear-gradient(#18181B, #18181B), radial-gradient(circle at top left, #6DDCFF,#7F60F9)',
                        backgroundOrigin: 'border-box',
                        backgroundClip: 'padding-box, border-box',
                    }}
                >
                    Search
                </Button>
                {renderArrow('Search')}
            </Grid>
        </ButtonGroup>
    );
}

export default PlanGroup;
