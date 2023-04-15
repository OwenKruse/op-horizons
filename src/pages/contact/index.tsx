
import {
    Grid,
    Typography,
    useMediaQuery,
    Box,
    Button,
    Icon,
    Avatar, List, Divider, TextField, ButtonGroup
} from '@mui/material';
import { createTheme, ThemeProvider} from "@mui/material";
import {useRouter} from "next/router";
import PlanGroup from "@/components/PlanGroup";
import Header2 from "@/components/Header2";
import React from "react";
export default function Contact({choice}) {
    if (choice) {
        console.log(choice)
    }


    const router = useRouter();
    let isMobile = useMediaQuery('(max-width:1000px)');

    const [selected, setSelected] = React.useState(0);

    // @ts-ignore
    const handleChange = (event, newValue) => {
        setSelected(newValue);
    }

    const theme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#fff',
            }
        }
        }
    );

    return (

        <Grid container sx={
            {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'center',
                alignContent: 'center',
                justifySelf: 'center',
                alignSelf: 'center',

            }
        }>
            <Header2 />
            <Grid item xs={isMobile ? 12 : 4} sx={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    justifyContent: 'center',
                    alignContent: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                }
            }>
                <Grid sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        justifyItems: 'center',
                        justifySelf: 'center',
                        alignContent: 'flex-start',
                        alignSelf: 'flex-start',
                        width: '100%',

                    }
                }
                >

                        <Typography fontSize={36} sx={
                            {
                                fontWeight: '400',
                                textAlign: 'flex-start',
                                alignContent: 'center',
                                padding: '1rem',
                            }
                        }>
                            Get in touch
                        </Typography>
                        <Typography variant="h4" fontWeight={10} fontSize={20} component="h2" sx={
                            {
                                textAlign: 'flex-start',
                                alignContent: 'center',
                                paddingLeft: '1rem',
                                paddingRight: '1rem',
                                paddingBottom: '1rem',


                            }
                        }>
                            Get a free consultation.
                        </Typography>

            <Box sx={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    width: '100%',
                    paddingTop: '3rem',
                }
            }>
                <ThemeProvider theme={theme}>
                <Grid item sx={
                    {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                    }
                }
                >
                    <TextField
                        required
                        id={'first_name'}
                        label={'First Name'}
                        variant={'outlined'}
                        sx={
                            {
                                width: '100%',
                                margin: '1rem',
                                color: 'white',


                            }
                        }
                    />
                    <TextField
                        required
                        id={'last_name'}
                        label={'Last Name'}
                        variant={'outlined'}
                        color={'primary'}
                        sx={
                            {
                                width: '100%',
                                margin: '1rem',
                                color: 'white',
                            }
                        }
                    />
                </Grid>
                    <Grid item sx={
                        {
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%',
                        }
                    }
                    >
                        <TextField
                            required
                            id={'email'}
                            label={'Email'}
                            placeholder={'you@yourcompany.com'}
                            variant={'outlined'}
                            sx={
                                {
                                    width: '100%',
                                    margin: '1rem',
                                    color: 'white',
                                }
                            }
                        />
                    </Grid>
                    <Grid item sx={
                        {
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%',
                        }
                    }
                    >
                        <TextField
                            required
                            id={'url'}
                            label={'URL'}
                            placeholder={'https://yourcompany.com'}
                            variant={'outlined'}
                            sx={
                                {
                                    width: '100%',
                                    margin: '1rem',
                                    color: 'white',
                                }
                            }
                        />
                    </Grid>
                </ThemeProvider>

                <Grid item sx={
                            {
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignContent: 'center',
                                width: '100%',
                                paddingTop: '1rem',
                            }
                        }>
                    <Grid item sx={
                        {
                            display: 'flex',
                            flexDirection: 'row',
                        }
                    }>

                            <Typography variant="h4" fontWeight={10} fontSize={13} component="h2" sx={
                                {
                                    textAlign: 'flex-start',
                                    alignContent: 'center',
                                    paddingLeft: '1rem',
                                }
                            }>
                                Not sure? Take a look at our
                            </Typography>

                            <Typography variant="h4"
                                        onClick={() => router.push('/prices')}
                                        fontWeight={10} fontSize={13} component="h2" sx={
                                {
                                    textAlign: 'flex-start',
                                    alignContent: 'center',
                                    color: '#6DD5FA',
                                    paddingLeft: '.25rem',
                                    cursor: 'pointer',

                                }
                            }>
                                services.
                            </Typography>
                    </Grid>
                    <PlanGroup />

                        </Grid>
                <Button sx={
                    {
                        justifySelf: 'end',
                        alignSelf: 'center',
                        color: '#fff',
                        width: '80%',
                        marginTop: '2.5rem',
                        marginBottom: '5rem',

                        height: '3rem',
                        // Round corners
                        // border: double 4px transparent;
                        // border-radius: 80px;
                        // background-image: linear-gradient(white, white), radial-gradient(circle at top left, #f00,#3020ff);
                        // background-origin: border-box;
                        // background-clip: padding-box, border-box;
                        border: "double 1px transparent",
                        backgroundImage: "linear-gradient(#18181B, #18181B), radial-gradient(circle at top left, #6DDCFF,#7F60F9)",
                        backgroundOrigin: "border-box",
                        backgroundClip: "padding-box, border-box",
                    }
                }>Send</Button>



            </Box>
        </Grid>
            </Grid>
    </Grid>
    )
}