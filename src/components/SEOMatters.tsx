import {Divider, Grid, Typography, useMediaQuery} from "@mui/material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import StarIcon from '@mui/icons-material/Star';
import TrafficIcon from '@mui/icons-material/Traffic';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ParkIcon from '@mui/icons-material/Park';
import {IBM_Plex_Sans} from "@next/font/google";
import Image from "next/image";

const IBM = IBM_Plex_Sans( { weight: "400", subsets: ['latin'] } )

export default function SpeedMatters() {
    let isMobile = useMediaQuery('(max-width:1000px)');
    return (
        <Grid container sx={
            {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }
        }>
            <Grid item sx={
                {
                    display: 'flex',
                    flexDirection: 'column',
                }
            }>

                <Typography variant="h1" lineHeight={.9} component="h2" sx={
                    {
                        alignContent: 'center',
                        alignSelf: 'center',
                        fontFamily: IBM,
                        fontSize: 42,
                        fontWeight: 400,
                        paddingTop: '5rem',
                        textAlign: 'center',

                    }
                }>
                    Why SEO Matters.
                </Typography>
                <Typography variant="h1" lineHeight={.9} component="h2" sx={
                    {
                        alignContent: 'center',
                        alignSelf: 'center',
                        fontSize: 18,
                        color: '#D7D7DF',
                        width: isMobile ? '100%' : '50%',
                        paddingTop: '1rem',
                        paddingBottom: '1rem',
                        textAlign: 'center',

                    }
                }>
                    SEO is crucial because it makes your website more visible, and that means more traffic and more opportunities to convert prospects into customers.
                </Typography>
            </Grid>
            <Grid container sx={
                {
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100vw',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',

                }
            }>
                <Image src={'/lines.svg'} alt={'lines'} fill style={
                    {
                        display: isMobile ? 'none' : 'block',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        objectFit: 'cover',
                        scale: '.8',
                    }
                } />

                <Grid item xs={9}  sx={
                {
                    width: '80%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    gap: '4rem',
                }
            }>

                <Grid item xs={isMobile ? 12 : 3 } sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        // Space between items
                        gap: '1rem',
                        // Border only bottom and right side


                    }
                } >
                    <RemoveRedEyeIcon sx={
                        {
                            fontSize: 65,
                            marginBottom: '1rem',
                        }
                    } />
                    <Typography variant="h1" lineHeight={.9} component="h2" sx={
                        {
                            fontSize: 21,
                            fontWeight: 400,
                            textAlign: 'center'
                        }
                    }>
                        Visibility
                    </Typography>
                    <Typography lineHeight={.9} component="h2" sx={
                        {
                            fontSize: 16,
                            fontWeight: 40,
                            textAlign: 'center'

                        }
                    }>
                        SEO  makes your website more visible, and that means more traffic and more opportunities to convert prospects into customers.
                    </Typography>
                </Grid>
                <Grid item xs={isMobile ? 12 : 3 } sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        // Space between items
                        gap: '1rem',
                    }
                } >
                    <StarIcon sx={
                        {
                            fontSize: 65,
                            marginBottom: '1rem',
                        }
                    } />
                    <Typography variant="h1" lineHeight={.9} component="h2" sx={
                        {
                            fontSize: 21,
                            fontWeight: 400,
                            textAlign: 'center'

                        }
                    }>
                        Organic Rankings
                    </Typography>
                    <Typography lineHeight={.9} component="h2" sx={
                        {
                            fontSize: 16,
                            fontWeight: 40,
                            textAlign: 'center'

                        }
                    }>
                        Optimizing SEO allows for organic (free) visitors to find your site. Organic traffic gives you a competitive edge and creates a digital flywheel on Google.
                    </Typography>
                </Grid>
                <Grid item xs={isMobile ? 12 : 3 } sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        // Space between items
                        gap: '1rem',
                    }
                } >
                    <TrafficIcon sx={
                        {
                            fontSize: 65,
                            marginBottom: '1rem',
                        }
                    } />
                    <Typography variant="h1" lineHeight={.9} component="h2" sx={
                        {
                            fontSize: 21,
                            fontWeight: 400,
                            textAlign: 'center'

                        }
                    }>
                        Web Traffic
                    </Typography>
                    <Typography lineHeight={.9} component="h2" sx={
                        {
                            fontSize: 16,
                            fontWeight: 40,
                            textAlign: 'center'

                        }
                    }>
                        Increased web traffic is one of the main goals of SEO, and you increase traffic when you increase visibility and rankings. Moving up just one spot in search results can increase clicks by an amazing 30.8%.
                    </Typography>

                </Grid>

            </Grid>
                <Grid item xs={9}  sx={
                    {
                        width: '80%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        paddingTop: '5rem',
                        gap: '4rem',




                    }
                }>
                <Grid item xs={isMobile ? 12 : 3 } sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        // Space between items
                        gap: '1rem',
                    }
                } >
                    <AccessTimeIcon sx={
                        {
                            fontSize: 65,
                            marginBottom: '1rem',
                        }
                    } />
                    <Typography variant="h1" lineHeight={.9} component="h2" sx={
                        {
                            fontSize: 21,
                            fontWeight: 400,
                            textAlign: 'center'
                        }
                    }>
                        Long Term Growth
                    </Typography>
                    <Typography lineHeight={.9} component="h2" sx={
                        {
                            fontSize: 16,
                            fontWeight: 40,
                            textAlign: 'center'
                        }
                    }
                    >
                        SEO helps build long-term equity for your brand. A good ranking and a favorable placement help elevate your brand’s profile.
                    </Typography>
                </Grid>
                <Grid item xs={isMobile ? 12 : 3 } sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        // Space between items
                        gap: '1rem',
                    }
                } >
                    <MilitaryTechIcon sx={
                        {
                            fontSize: 65,
                            marginBottom: '1rem',
                        }
                    }/>
                    <Typography variant="h1" lineHeight={.9} component="h2" sx={
                        {
                            fontSize: 21,
                            fontWeight: 400,
                            textAlign: 'center'
                        }
                    }>
                        Authority
                    </Typography>
                    <Typography lineHeight={.9} component="h2" sx={
                        {
                            fontSize: 16,
                            fontWeight: 40,
                            textAlign: 'center'
                        }
                    }
                    >
                        Page Authority  is increasingly important to search engines . Essentially, authority means that your website is trustworthy, high quality, relevant, and has something to offer. SEO increases Authority.
                    </Typography>
                </Grid>
                <Grid item xs={isMobile ? 12 : 3 } sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        // Space between items
                        gap: '1rem',
                    }
                } >
                    <ParkIcon sx={
                        {
                            fontSize: 65,
                            marginBottom: '1rem',
                        }
                    } />
                    <Typography variant="h1" lineHeight={.9} component="h2" sx={
                        {
                            fontSize: 21,
                            fontWeight: 400,
                            textAlign: 'center'
                        }
                    }>
                        Local Reach
                    </Typography>
                    <Typography lineHeight={.9} component="h2" sx={
                        {
                            fontSize: 16,
                            fontWeight: 40,
                            textAlign: 'center'
                        }
                    }>
                        Local SEO aims at optimizing your digital properties for a specific vicinity, so people can find you quickly and easily, putting them one step closer to a transaction.
                    </Typography>
                </Grid>
            </Grid>

            </Grid>
        </Grid>
    )
}