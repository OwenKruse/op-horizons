import {Box, Button, Divider, Grid, Typography} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { Carousel } from '@mantine/carousel';
import {useMediaQuery} from "@mui/material";
import { useRouter} from "next/router";


export default function PriceMobile() {
    const router = useRouter();

    return (
        <Grid container sx={
            {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#000',
                height: '100%',

            }
        }>
            <Typography variant={'h3'} sx={
                {
                    color: '#fff',
                    fontSize: '60',
                    fontWeight: '10',
                    paddingTop: '6rem',
                    textAlign: 'center',
                    whiteSpace: 'pre-wrap',
                }
            }>
                Simple,
            </Typography>
            <Typography variant={'h3'} sx={
                {
                    color: '#fff',
                    fontSize: '60',
                    fontWeight: '10',
                    paddingBottom: '6rem',
                    textAlign: 'center',
                    whiteSpace: 'pre-wrap',
                }
            }>
                Easy Pricing.
            </Typography>
            <Grid container sx={
                {
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',

                }
            }>
                <Carousel
                    withIndicators
                    height={'45rem'}
                    slideSize="100%"
                    slideGap="md"
                    loop
                    align="center"
                    slidesToScroll={1}
                >
                    <Carousel.Slide
                    sx={
                        {
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }
                    }
                    ><Grid item xs={5}  sx={
                        {
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            padding: '1rem',
                        }
                    } >
                        <Box sx={
                            {
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%',
                                justifyContent: 'start',
                                alignItems: 'start',
                                padding: '3rem',
                                backgroundColor: '#18181B',
                                height: '40rem',
                                borderRadius: '10px',
                                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
                            }
                        }>
                            <Grid container sx={
                                {
                                    display: 'flex',
                                    flexDirection: 'column',

                                }
                            }>
                                <Typography  lineHeight={2} sx={
                                    {
                                        color: '#fff',
                                        fontSize: '18',
                                        fontWeight: '10',
                                    }
                                }>
                                    Speed Optimization
                                </Typography>
                                <Grid item sx={
                                    {
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'start',
                                        width: '100%',
                                    }
                                }>
                                    <Typography variant={'h2'} sx={
                                        {
                                            color: '#fff',
                                            fontSize: '60',
                                        }
                                    }>
                                        $199
                                    </Typography>
                                    <Typography sx={
                                        {
                                            color: '#71717A',
                                            fontSize: '18',
                                            alignSelf: 'flex-end',
                                            marginBottom: '0.5rem',
                                            whiteSpace: 'nowrap',
                                        }
                                    }>
                                        One Time Payment
                                    </Typography>
                                </Grid>
                                <Typography sx={
                                    {
                                        color: '#A1A1AA',
                                        fontSize: '16',
                                        fontWeight: '10',
                                    }
                                }>
                                    Everything we do to improve the speed of your website from top to bottom.
                                </Typography>
                                <Divider sx={
                                    {
                                        width: '100%',
                                        marginTop: '1rem',
                                        marginBottom: '1rem',
                                        backgroundColor: '#A1A1AA',
                                    }

                                }/>
                                <Grid item sx={
                                    {
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'start',
                                        alignItems: 'center',
                                        alignContent: 'center',
                                        width: '100%',
                                        marginTop: '1.5rem',
                                    }
                                }>
                                    <CheckIcon sx={
                                        {
                                            color: '#000',
                                            marginRight: '0.5rem',
                                            backgroundColor: '#A1A1AA',
                                            borderRadius: '50%',
                                            scale: '0.75',

                                        }
                                    }/>
                                    <Typography sx={
                                        {
                                            color: '#fff',
                                            fontSize: '16',
                                            fontWeight: '10',
                                        }
                                    }>
                                        Image Optimization
                                    </Typography>
                                </Grid>
                                <Grid item sx={
                                    {
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'start',
                                        alignItems: 'center',
                                        alignContent: 'center',
                                        width: '100%',
                                        marginTop: '1.5rem',
                                    }
                                }>
                                    <CheckIcon sx={
                                        {
                                            color: '#000',
                                            marginRight: '0.5rem',
                                            backgroundColor: '#A1A1AA',
                                            borderRadius: '50%',
                                            scale: '0.75',

                                        }
                                    }/>
                                    <Typography sx={
                                        {
                                            color: '#fff',
                                            fontSize: '16',
                                            fontWeight: '10',
                                        }
                                    }>
                                        Amazing Conversion Rates
                                    </Typography>
                                </Grid>
                                <Grid item sx={
                                    {
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'start',
                                        alignItems: 'center',
                                        alignContent: 'center',
                                        width: '100%',
                                        marginTop: '1.5rem',
                                    }
                                }>
                                    <CheckIcon sx={
                                        {
                                            color: '#000',
                                            marginRight: '0.5rem',
                                            backgroundColor: '#A1A1AA',
                                            borderRadius: '50%',
                                            scale: '0.75',

                                        }
                                    }/>
                                    <Typography sx={
                                        {
                                            color: '#fff',
                                            fontSize: '16',
                                            fontWeight: '10',
                                        }
                                    }>
                                        Unlimited Visitors
                                    </Typography>
                                </Grid>
                                <Grid item sx={
                                    {
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'start',
                                        alignItems: 'center',
                                        alignContent: 'center',
                                        width: '100%',
                                        marginTop: '1.5rem',
                                    }
                                }>
                                    <CheckIcon sx={
                                        {
                                            color: '#000',
                                            marginRight: '0.5rem',
                                            backgroundColor: '#A1A1AA',
                                            borderRadius: '50%',
                                            scale: '0.75',

                                        }
                                    }/>
                                    <Typography sx={
                                        {
                                            color: '#fff',
                                            fontSize: '16',
                                            fontWeight: '10',
                                        }
                                    }>
                                        Page Speed Tests
                                    </Typography>
                                </Grid>
                                <Grid item sx={
                                    {
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'start',
                                        alignItems: 'center',
                                        alignContent: 'center',
                                        width: '100%',
                                        marginTop: '1.5rem',
                                    }
                                }>
                                    <CheckIcon sx={
                                        {
                                            color: '#000',
                                            marginRight: '0.5rem',
                                            backgroundColor: '#A1A1AA',
                                            borderRadius: '50%',
                                            scale: '0.75',

                                        }
                                    }/>
                                    <Typography sx={
                                        {
                                            color: '#fff',
                                            fontSize: '16',
                                            fontWeight: '10',
                                        }
                                    }>
                                        Live Chat Support
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Button
                                onClick={() => {
                                    router.push('/contact',
                                        )
                                }}
                                sx={
                                {
                                    justifySelf: 'end',
                                    alignSelf: 'center',
                                    marginTop: 'auto',
                                    backgroundColor: '#18181B',
                                    color: '#fff',

                                    width: '100%',
                                    height: '3rem',
                                    // Round corners
                                    // border: double 4px transparent;
                                    // border-radius: 80px;
                                    // background-image: linear-gradient(white, white), radial-gradient(circle at top left, #f00,#3020ff);
                                    // background-origin: border-box;
                                    // background-clip: padding-box, border-box;
                                    border: "double 1px transparent",
                                    backgroundImage: "linear-gradient(black, black), radial-gradient(circle at top left, #6DDCFF,#7F60F9)",
                                    backgroundOrigin: "border-box",
                                    backgroundClip: "padding-box, border-box",
                                    marginRight: 2,
                                }
                            } >
                                Get Started
                            </Button>

                        </Box>

                    </Grid></Carousel.Slide>
                    <Carousel.Slide
                        sx={
                            {
                                display: 'flex',
                                flexDirection: 'row',
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }
                        }
                    ><Grid item xs={5}  sx={
                            {
                                display: 'flex',
                                flexDirection: 'row',
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                padding: '1rem',
                                marginBottom: '1.5rem',
                            }
                        } >
                            <Box sx={
                                {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '100%',
                                    justifyContent: 'start',
                                    alignItems: 'start',
                                    padding: '3rem',
                                    height: '100%',
                                    borderRadius: '10px',
                                    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
                                    border: "double 1px transparent",
                                    backgroundImage: "linear-gradient(#18181B, #18181B), radial-gradient(circle at top left, #6DDCFF,#7F60F9)",
                                    backgroundOrigin: "border-box",
                                    backgroundClip: "padding-box, border-box",
                                    marginRight: 2,
                                }
                            }>
                                <Grid container sx={
                                    {
                                        display: 'flex',
                                        flexDirection: 'column',

                                    }
                                }>
                                    <Typography  lineHeight={2} sx={
                                        {
                                            color: '#fff',
                                            fontSize: '18',
                                            fontWeight: '10',
                                        }
                                    }>
                                        Complete
                                    </Typography>
                                    <Grid item sx={
                                        {
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'start',
                                            width: '100%',
                                        }
                                    }>
                                        <Typography variant={'h2'} sx={
                                            {
                                                color: '#fff',
                                                fontSize: '60',
                                            }
                                        }>
                                            $59
                                        </Typography>
                                        <Typography sx={
                                            {
                                                color: '#71717A',
                                                fontSize: '18',
                                                alignSelf: 'flex-end',
                                                marginBottom: '0.5rem',
                                                whiteSpace: 'nowrap',
                                            }
                                        }>
                                            / Month
                                        </Typography>
                                    </Grid>
                                    <Typography sx={
                                        {
                                            color: '#A1A1AA',
                                            fontSize: '16',
                                            fontWeight: '10',
                                        }
                                    }>
                                        Includes Speed Optimization, Advanced Search Optimization, and our best servers to further increase website performance.                                    </Typography>
                                    <Divider sx={
                                        {
                                            width: '100%',
                                            marginTop: '1rem',
                                            marginBottom: '1rem',
                                            backgroundColor: '#A1A1AA',
                                        }

                                    }/>
                                    <Grid item sx={
                                        {
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'start',
                                            alignItems: 'center',
                                            alignContent: 'center',
                                            width: '100%',
                                            marginTop: '1.5rem',
                                        }
                                    }>
                                        <CheckIcon sx={
                                            {
                                                color: '#000',
                                                marginRight: '0.5rem',
                                                backgroundColor: '#A1A1AA',
                                                borderRadius: '50%',
                                                scale: '0.75',

                                            }
                                        }/>
                                        <Typography sx={
                                            {
                                                color: '#fff',
                                                fontSize: '16',
                                                fontWeight: '10',
                                                whiteSpace: 'nowrap',
                                            }
                                        }>
                                            Everything from Speed Optimization
                                        </Typography>
                                    </Grid>
                                    <Grid item sx={
                                        {
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'start',
                                            alignItems: 'center',
                                            alignContent: 'center',
                                            width: '100%',
                                            marginTop: '1.5rem',
                                        }
                                    }>
                                        <CheckIcon sx={
                                            {
                                                color: '#000',
                                                marginRight: '0.5rem',
                                                backgroundColor: '#A1A1AA',
                                                borderRadius: '50%',
                                                scale: '0.75',

                                            }
                                        }/>
                                        <Typography sx={
                                            {
                                                color: '#fff',
                                                fontSize: '16',
                                                fontWeight: '10',
                                                whiteSpace: 'nowrap',
                                            }

                                        }>
                                            Everything from Search Optimization
                                        </Typography>
                                    </Grid>
                                    <Grid item sx={
                                        {
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'start',
                                            alignItems: 'center',
                                            alignContent: 'center',
                                            width: '100%',
                                            marginTop: '1.5rem',
                                        }
                                    }>
                                        <CheckIcon sx={
                                            {
                                                color: '#000',
                                                marginRight: '0.5rem',
                                                backgroundColor: '#A1A1AA',
                                                borderRadius: '50%',
                                                scale: '0.75',

                                            }
                                        }/>
                                        <Typography sx={
                                            {
                                                color: '#fff',
                                                fontSize: '16',
                                                fontWeight: '10',
                                            }
                                        }>
                                            Our Most Powerful Servers
                                        </Typography>
                                    </Grid>
                                    <Grid item sx={
                                        {
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'start',
                                            alignItems: 'center',
                                            alignContent: 'center',
                                            width: '100%',
                                            marginTop: '1.5rem',
                                        }
                                    }>
                                        <CheckIcon sx={
                                            {
                                                color: '#000',
                                                marginRight: '0.5rem',
                                                backgroundColor: '#A1A1AA',
                                                borderRadius: '50%',
                                                scale: '0.75',

                                            }
                                        }/>
                                        <Typography sx={
                                            {
                                                color: '#fff',
                                                fontSize: '16',
                                                fontWeight: '10',
                                            }
                                        }>
                                            Up to 2x higher conversion rates
                                        </Typography>
                                    </Grid>
                                    <Grid item sx={
                                        {
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'start',
                                            alignItems: 'center',
                                            alignContent: 'center',
                                            width: '100%',
                                            marginTop: '1.5rem',
                                        }
                                    }>
                                        <CheckIcon sx={
                                            {
                                                color: '#000',
                                                marginRight: '0.5rem',
                                                backgroundColor: '#A1A1AA',
                                                borderRadius: '50%',
                                                scale: '0.75',

                                            }
                                        }/>
                                        <Typography sx={
                                            {
                                                color: '#fff',
                                                fontSize: '16',
                                                fontWeight: '10',
                                            }
                                        }>
                                            Live Chat Support
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Button
                                    onClick={() => {
                                        router.push('/contact')
                                    }}
                                    sx={
                                    {
                                        justifySelf: 'center',
                                        alignSelf: 'center',
                                        marginTop: '1.5rem',
                                        // Linear Gradient Background
                                        backgroundImage: "linear-gradient(90deg, #6DDCFF,#7F60F9)",

                                        color: '#fff',

                                        width: '100%',
                                        height: '3rem',

                                    }
                                } >
                                    Get Started
                                </Button>
                                <Typography sx={
                                    {
                                        color: '#A1A1AA',
                                        fontSize: '13px',
                                        fontWeight: '10',
                                    }
                                }>
                                    (3 Month Minimum)
                                </Typography>
                            </Box>

                        </Grid></Carousel.Slide>
                    <Carousel.Slide
                        sx={
                            {
                                display: 'flex',
                                flexDirection: 'row',
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }
                        }
                    ><Grid item xs={5}  sx={
                            {
                                display: 'flex',
                                flexDirection: 'row',
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                padding: '1rem',
                            }
                        } >
                            <Box sx={
                                {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '100%',
                                    justifyContent: 'start',
                                    alignItems: 'start',
                                    padding: '3rem',
                                    backgroundColor: '#18181B',
                                    height: '40rem',
                                    borderRadius: '10px',
                                    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
                                }
                            }>
                                <Grid container sx={
                                    {
                                        display: 'flex',
                                        flexDirection: 'column',

                                    }
                                }>
                                    <Typography  lineHeight={2} sx={
                                        {
                                            color: '#fff',
                                            fontSize: '18',
                                            fontWeight: '10',
                                        }
                                    }>
                                        Search Optimization
                                    </Typography>
                                    <Grid item sx={
                                        {
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'start',
                                            width: '100%',
                                        }
                                    }>
                                        <Typography variant={'h2'} sx={
                                            {
                                                color: '#fff',
                                                fontSize: '60',
                                            }
                                        }>
                                            $29
                                        </Typography>
                                        <Typography sx={
                                            {
                                                color: '#71717A',
                                                fontSize: '18',
                                                alignSelf: 'flex-end',
                                                marginBottom: '0.5rem',
                                                whiteSpace: 'nowrap',
                                            }
                                        }>
                                            / Month
                                        </Typography>
                                    </Grid>
                                    <Typography sx={
                                        {
                                            color: '#A1A1AA',
                                            fontSize: '16',
                                            fontWeight: '10',
                                        }
                                    }>
                                        Improve Search Engine indexing using advanced SEO techniques.
                                    </Typography>
                                    <Divider sx={
                                        {
                                            width: '100%',
                                            marginTop: '1rem',
                                            marginBottom: '1rem',
                                            backgroundColor: '#A1A1AA',
                                        }

                                    }/>
                                    <Grid item sx={
                                        {
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'start',
                                            alignItems: 'center',
                                            alignContent: 'center',
                                            width: '100%',
                                            marginTop: '1.5rem',
                                        }
                                    }>
                                        <CheckIcon sx={
                                            {
                                                color: '#000',
                                                marginRight: '0.5rem',
                                                backgroundColor: '#A1A1AA',
                                                borderRadius: '50%',
                                                scale: '0.75',

                                            }
                                        }/>
                                        <Typography sx={
                                            {
                                                color: '#fff',
                                                fontSize: '16',
                                                fontWeight: '10',
                                            }
                                        }>
                                            Increase Google Index
                                        </Typography>
                                    </Grid>
                                    <Grid item sx={
                                        {
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'start',
                                            alignItems: 'center',
                                            alignContent: 'center',
                                            width: '100%',
                                            marginTop: '1.5rem',
                                        }
                                    }>
                                        <CheckIcon sx={
                                            {
                                                color: '#000',
                                                marginRight: '0.5rem',
                                                backgroundColor: '#A1A1AA',
                                                borderRadius: '50%',
                                                scale: '0.75',

                                            }
                                        }/>
                                        <Typography sx={
                                            {
                                                color: '#fff',
                                                fontSize: '16',
                                                fontWeight: '10',
                                            }
                                        }>
                                            Get More Visitors
                                        </Typography>
                                    </Grid>
                                    <Grid item sx={
                                        {
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'start',
                                            alignItems: 'center',
                                            alignContent: 'center',
                                            width: '100%',
                                            marginTop: '1.5rem',
                                        }
                                    }>
                                        <CheckIcon sx={
                                            {
                                                color: '#000',
                                                marginRight: '0.5rem',
                                                backgroundColor: '#A1A1AA',
                                                borderRadius: '50%',
                                                scale: '0.75',

                                            }
                                        }/>
                                        <Typography sx={
                                            {
                                                color: '#fff',
                                                fontSize: '16',
                                                fontWeight: '10',
                                            }
                                        }>
                                            Live Website Statistics
                                        </Typography>
                                    </Grid>
                                    <Grid item sx={
                                        {
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'start',
                                            alignItems: 'center',
                                            alignContent: 'center',
                                            width: '100%',
                                            marginTop: '1.5rem',
                                        }
                                    }>
                                        <CheckIcon sx={
                                            {
                                                color: '#000',
                                                marginRight: '0.5rem',
                                                backgroundColor: '#A1A1AA',
                                                borderRadius: '50%',
                                                scale: '0.75',

                                            }
                                        }/>
                                        <Typography sx={
                                            {
                                                color: '#fff',
                                                fontSize: '16',
                                                fontWeight: '10',
                                            }
                                        }>
                                            Live Chat Support                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Button
                                    onClick={() => {
                                        router.push('/contact')
                                    }}
                                    sx={
                                    {
                                        justifySelf: 'center',
                                        alignSelf: 'center',
                                        marginTop: 'auto',
                                        backgroundColor: '#18181B',
                                        color: '#fff',

                                        width: '100%',
                                        height: '3rem',
                                        // Round corners
                                        // border: double 4px transparent;
                                        // border-radius: 80px;
                                        // background-image: linear-gradient(white, white), radial-gradient(circle at top left, #f00,#3020ff);
                                        // background-origin: border-box;
                                        // background-clip: padding-box, border-box;
                                        border: "double 1px transparent",
                                        backgroundImage: "linear-gradient(black, black), radial-gradient(circle at top left, #6DDCFF,#7F60F9)",
                                        backgroundOrigin: "border-box",
                                        backgroundClip: "padding-box, border-box",
                                        marginRight: 2,
                                    }
                                } >
                                    Get Started
                                </Button>

                            </Box>

                        </Grid></Carousel.Slide>
                </Carousel>


            </Grid>
        </Grid>
    )
}