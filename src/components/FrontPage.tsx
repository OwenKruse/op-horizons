import {Button, Grid, Typography, useMediaQuery} from "@mui/material";
import Head from "next/head";
import Header from "@/components/Header";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import {IBM_Plex_Sans, Inter} from "@next/font/google";
import {useRouter} from "next/router";

const inter = Inter({ subsets: ['latin'] })
const IBM = IBM_Plex_Sans( { weight: "400", subsets: ['latin'] } )

export default function FrontPage() {
    let isDesktop = useMediaQuery('(max-width:1400px)');
    let isMobile = useMediaQuery('(max-width:1000px)');
    const router = useRouter();

    return (
        <div>
                {isMobile ?  (
                    <Grid container sx={
                        {
                            paddingTop: '2rem',
                            justifySelf: 'center',
                            justifyContent: 'center',
                            justifyItems: 'center',
                            alignSelf: 'center',
                        }
                    } >
                        <video width={"100%"} height={"100%"} playsInline autoPlay muted loop>
                            <source src="/heading-video.mp4" type="video/mp4" />
                        </video>
                    </Grid>
                ) : null}
                <Grid container  sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100vh',
                        padding: '4rem',
                        // Dont wrap
                        flexWrap: isMobile ? 'nowrap' : 'wrap',
                        overflow: 'hidden',
                    }
                }>

                    <Grid item  sx={
                        {
                            display: 'flex',
                            flexDirection: 'column',
                            width: isMobile ? '100%' : '50%',
                        }
                    }>
                        <Typography variant="h1" lineHeight={.9} component="h2" sx={
                            {
                                alignContent: 'center',
                                alignSelf: 'flex-start',
                                justifyContent: 'center',
                                fontFamily: IBM,
                                whiteSpace: 'nowrap',
                                fontSize: isMobile ? 24 : 80,
                                paddingBottom: isMobile ? '1rem' : '0rem',
                            }
                        } >Optimize For
                        </Typography>
                        <Typography variant="h1" lineHeight={.9} component="h2" sx={
                            {
                                alignContent: 'center',
                                alignSelf: 'flex-start',
                                justifyContent: 'center',
                                fontFamily: IBM,
                                fontSize: isMobile ? 60 : 80,
                                whiteSpace: 'nowrap',
                                paddingBottom: isMobile ? '1rem' : '0rem',
                            }
                        } >Success.
                        </Typography>
                        <Typography variant="h3" lineHeight={'1.75rem'} component="h2" sx={
                            {
                                alignContent: 'center',
                                alignSelf: 'center',
                                justifyContent: 'center',
                                fontSize: 18,
                                color: '#A1A1AA',
                            }
                        } >
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Unlock Your Website's Full Potential with OptimizedHorizons - Elevate,
                            Accelerate, and Dominate the Digital Landscape.
                        </Typography>

                    </Grid>
                    <Grid item sx={
                        {
                            paddingTop: '2rem',
                        }
                    } >
                        <Button
                            sx={{
                                width: 155,
                                height: 50,
                                border: "double 1px transparent",
                                backgroundImage: "linear-gradient(90deg, #6DD3FF, #7F60F9)",
                                backgroundOrigin: "border-box",
                                backgroundClip: "padding-box, border-box",
                                color: "white",
                                borderRadius: 12,

                            }}
                            variant="contained"
                            color="primary"
                            onClick={() => router.push('/contact')}
                        >
                            Get Started
                        </Button>
                        <Typography variant="h3" lineHeight={'1.75rem'} component="h2" sx={
                            {
                                alignContent: 'center',
                                alignSelf: 'center',
                                justifyContent: 'center',
                                fontSize: 18,
                                color: 'white',
                                paddingTop: isMobile ? '1rem' : '8rem',
                            }
                        } >
                        </Typography>
                        <Grid sx={
                            {
                                display: 'flex',
                                flexDirection: 'row',
                            }
                        }>
                            <Image src="/star.svg" alt="5k" width="150" height="50" />
                            <Typography variant="h3" lineHeight={'1.75rem'} component="h2" sx={
                                {
                                    alignContent: 'center',
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    fontSize: 16,
                                    color: '#71717A',
                                }
                            } >
                                (3 Reviews)
                            </Typography>
                        </Grid>
                    </Grid>
                    {isMobile ? null : (
                        <Grid item sx={
                            {
                                paddingTop: '2rem',
                                paddingRight: '35%',
                                position: 'relative',


                            }
                        } >
                            <Image src={'/ellipse-33.svg'} alt={'ellipse'} fill className={styles.svg} />
                            <video style={
                                {
                                    borderRadius: 12,
                                    // border: double 4px transparent;
                                    // border-radius: 80px;
                                    // background-image: linear-gradient(white, white), radial-gradient(circle at top left, #f00,#3020ff);
                                    // background-origin: border-box;
                                    // background-clip: padding-box, border-box;linear-gradient(90deg, #6DD3FF, #7F60F9)
                                    border: "double 15px transparent",
                                    backgroundImage: "linear-gradient(black, black), radial-gradient(circle at top left, #6DD3FF,#7F60F9)",
                                    backgroundOrigin: "border-box",
                                    backgroundClip: "padding-box, border-box",
                                    color: "white",
                                    marginRight: 2,
                                }
                            } width="80%" height="99%" loop muted playsInline autoPlay>
                                <source src="/heading-video.mp4" type="video/mp4" />
                            </video>
                        </Grid>
                    ) }
                </Grid>
        </div>
    )
}