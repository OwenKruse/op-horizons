import {Divider, Grid, Typography, useMediaQuery} from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import OutboundIcon from "@mui/icons-material/Outbound";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
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
                    Why Speed Matters.
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
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Website speed is a critical factor in today's fast-paced digital landscape, and its importance for businesses cannot be overstated.
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
                    }
                } />
            <Grid item xs={9} spacing={3} sx={
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
                    <GroupAddIcon sx={
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
                        Enhanced User Experience
                    </Typography>
                    <Typography lineHeight={.9} component="h2" sx={
                        {
                            fontSize: 16,
                            fontWeight: 40,
                            textAlign: 'center'

                        }
                    }>
                        Faster websites offer a smoother and more enjoyable browsing experience, resulting in higher visitor satisfaction and longer site visits.
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
                    <TrendingUpIcon sx={
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
                        Google Rankings
                    </Typography>
                    <Typography lineHeight={.9} component="h2" sx={
                        {
                            fontSize: 16,
                            fontWeight: 40,
                            textAlign: 'center'

                        }
                    }>
                        Search engines like Google prioritize fast websites, leading to better visibility in search results and increased organic traffic.
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
                    <AttachMoneyIcon sx={
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
                        Conversion Rate
                    </Typography>
                    <Typography lineHeight={.9} component="h2" sx={
                        {
                            fontSize: 16,
                            fontWeight: 40,
                            textAlign: 'center'

                        }
                    }>
                        By ensuring that your website loads quickly, you can encourage potential customers to make a purchase.
                    </Typography>

                </Grid>

            </Grid>
            <Grid item xs={9} spacing={3} sx={
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
                    <OutboundIcon sx={
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
                        Reduced Bounce Rates
                    </Typography>
                    <Typography lineHeight={.9} component="h2" sx={
                        {
                            fontSize: 16,
                            fontWeight: 40,
                            textAlign: 'center'
                        }
                    }
                    >
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        A fast-loading website retains visitors longer, decreasing the likelihood they'll leave without engaging with your content or making a purchase.
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
                    <CompareArrowsIcon sx={
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
                        Competitive Edge
                    </Typography>
                    <Typography lineHeight={.9} component="h2" sx={
                        {
                            fontSize: 16,
                            fontWeight: 40,
                            textAlign: 'center'
                        }
                    }
                    >
                        A fast website sets you apart from competitors, giving your business a unique advantage and helping you stand out in a crowded market.
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
                    <MobileFriendlyIcon sx={
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
                        Mobile Optimization
                    </Typography>
                    <Typography lineHeight={.9} component="h2" sx={
                        {
                            fontSize: 16,
                            fontWeight: 40,
                            textAlign: 'center'
                        }
                    }>
                        Speed improvements benefit mobile users who often have slower connections, expanding your reach and accessibility to a growing audience.
                    </Typography>
                </Grid>
            </Grid>
            </Grid>
        </Grid>
    )
}