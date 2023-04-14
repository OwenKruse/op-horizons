import {Grid, Typography, useMediaQuery} from "@mui/material";
import {Carousel} from "@mantine/carousel";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import {IBM_Plex_Sans, Inter} from "@next/font/google";

const inter = Inter({ subsets: ['latin'] })
const IBM = IBM_Plex_Sans( { weight: "400", subsets: ['latin'] } )

export default function Reviews() {
    let isDesktop = useMediaQuery('(max-width:1400px)');
    let isMobile = useMediaQuery('(max-width:1000px)');

    return(
        <Grid container sx={
            {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }
        }>
            <Typography variant="h1" lineHeight={2} component="h2" sx={
                {
                    alignContent: 'center',
                    fontSize: 40,
                    color: '#ffffff',
                    fontFamily: IBM,
                    paddingTop: '2rem',
                    paddingBottom: '2rem',
                    textAlign: 'center',
                }
            }>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Don't just take our word for it
            </Typography>
            <Carousel sx={
                {
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            } withIndicators align="start" slideSize={
                isMobile ? '100%' : '50%'
            }  slidesToScroll={
                isMobile ? 1 : 2

            } loop height={500}>
                <Carousel.Slide sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }
                }>
                    <Grid  sx={
                        {
                            display: 'flex',
                            flexDirection: 'column',
                            width: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }
                    }>
                        <Grid >
                            <Grid item sx={
                                {
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',

                                }
                            } >
                                <Image src={'/iconfeather.svg'} alt={'ellipse'} width={50} height={50} className={styles.svg1} />
                                <Image src={'/iconfeather.svg'} alt={'ellipse'} width={50} height={50} className={styles.svg1} />
                                <Image src={'/iconfeather.svg'} alt={'ellipse'} width={50} height={50} className={styles.svg1} />
                                <Image src={'/iconfeather.svg'} alt={'ellipse'} width={50} height={50} className={styles.svg1} />
                                <Image src={'/iconfeather.svg'} alt={'ellipse'} width={50} height={50} className={styles.svg1} />
                            </Grid>
                            <Typography variant="h1" lineHeight={2} component="h2" sx={
                                {
                                    fontSize: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: '5rem',
                                    textAlign: 'center'


                                }
                            }>
                                “OptimizedHorizons turned my website into a powerhouse! Their meticulous optimization strategies skyrocketed my conversion rates and search engine rankings, making my business flourish like never before.”
                            </Typography>
                            <Typography variant="h1" lineHeight={2} component="h2" sx={
                                {
                                    fontSize: 14,
                                    color: '#EDEDED',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: '2rem',
                                    textAlign: 'center'

                                }
                            }>
                                Iz etin
                            </Typography>
                        </Grid>
                    </Grid>
                </Carousel.Slide>
                <Carousel.Slide sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }
                }>
                    <Grid container sx={
                        {
                            display: 'flex',
                            flexDirection: 'column',
                            width: '75%',
                        }
                    }>
                        <Grid container>
                            <Grid container sx={
                                {
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                }
                            } >
                                <Image src={'/iconfeather.svg'} alt={'ellipse'} width={50} height={50} className={styles.svg1} />
                                <Image src={'/iconfeather.svg'} alt={'ellipse'} width={50} height={50} className={styles.svg1} />
                                <Image src={'/iconfeather.svg'} alt={'ellipse'} width={50} height={50} className={styles.svg1} />
                                <Image src={'/iconfeather.svg'} alt={'ellipse'} width={50} height={50} className={styles.svg1} />
                                <Image src={'/iconfeather.svg'} alt={'ellipse'} width={50} height={50} className={styles.svg1} />
                            </Grid>
                            <Typography variant="h1" lineHeight={2} component="h2" sx={
                                {
                                    fontSize: 20,
                                    marginTop: '5rem',
                                    textAlign: 'center'


                                }
                            }>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                "The team at OptimizedHorizons truly understands the art of website optimization. Their tailored solutions boosted my site's performance and user experience, leaving my competitors in the dust!"                                 </Typography>
                            <Typography variant="h1" lineHeight={2} component="h2" sx={
                                {
                                    fontSize: 14,
                                    color: '#EDEDED',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: '2rem',
                                    textAlign: 'center'

                                }
                            }>
                                Jack Hoff
                            </Typography>
                        </Grid>
                    </Grid>
                </Carousel.Slide>
                <Carousel.Slide sx={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            }>
                <Grid container sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '75%',
                    }
                }>
                    <Grid container>
                        <Grid container sx={
                            {
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                            }
                        } >
                            <Image src={'/iconfeather.svg'} alt={'ellipse'} width={50} height={50} className={styles.svg1} />
                            <Image src={'/iconfeather.svg'} alt={'ellipse'} width={50} height={50} className={styles.svg1} />
                            <Image src={'/iconfeather.svg'} alt={'ellipse'} width={50} height={50} className={styles.svg1} />
                            <Image src={'/iconfeather.svg'} alt={'ellipse'} width={50} height={50} className={styles.svg1} />
                            <Image src={'/iconfeather.svg'} alt={'ellipse'} width={50} height={50} className={styles.svg1} />
                        </Grid>
                        <Typography variant="h1" lineHeight={2} component="h2" sx={
                            {
                                fontSize: 20,
                                marginTop: '5rem',
                                textAlign: 'center'


                            }
                        }>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            "Incredible impact. I didn’t know how much our website speed was bogging us down. OptimizedHorizons has increased all our numbers across the board."
                        </Typography>
                            <Typography variant="h1" lineHeight={2} component="h2" sx={
                            {
                                fontSize: 14,
                                color: '#EDEDED',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: '2rem',
                                textAlign: 'center'

                            }
                        }>
                            Jeff Rogosin
                        </Typography>
                    </Grid>
                </Grid>
            </Carousel.Slide>
                <Carousel.Slide sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }
                }>
                    <Grid container sx={
                        {
                            display: 'flex',
                            flexDirection: 'column',
                            width: '75%',
                        }
                    }>
                        <Grid container>
                            <Grid container sx={
                                {
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                }
                            } >
                                <Image src={'/iconfeather.svg'} alt={'ellipse'} width={50} height={50} className={styles.svg1} />
                                <Image src={'/iconfeather.svg'} alt={'ellipse'} width={50} height={50} className={styles.svg1} />
                                <Image src={'/iconfeather.svg'} alt={'ellipse'} width={50} height={50} className={styles.svg1} />
                                <Image src={'/iconfeather.svg'} alt={'ellipse'} width={50} height={50} className={styles.svg1} />
                                <Image src={'/iconfeather.svg'} alt={'ellipse'} width={50} height={50} className={styles.svg1} />
                            </Grid>
                            <Typography variant="h1" lineHeight={2} component="h2" sx={
                                {
                                    fontSize: 20,
                                    marginTop: '5rem',
                                    textAlign: 'center'


                                }
                            }>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                "Super valuable service and I love the founders. Seeing up and coming young entrepreneurs always brings a smile to my face."
                            </Typography>
                            <Typography variant="h1" lineHeight={2} component="h2" sx={
                                {
                                    fontSize: 14,
                                    color: '#EDEDED',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: '2rem',
                                    textAlign: 'center'

                                }
                            }>
                                Rebbeca Spindel
                            </Typography>
                        </Grid>
                    </Grid>
                </Carousel.Slide>
                <Carousel.Slide sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }
                }>
                    <Grid container sx={
                        {
                            display: 'flex',
                            flexDirection: 'column',
                            width: '75%',
                        }
                    }>
                        <Grid container>
                            <Grid container sx={
                                {
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                }
                            } >
                                <Image src={'/iconfeather.svg'} alt={'ellipse'} width={50} height={50} className={styles.svg1} />
                                <Image src={'/iconfeather.svg'} alt={'ellipse'} width={50} height={50} className={styles.svg1} />
                                <Image src={'/iconfeather.svg'} alt={'ellipse'} width={50} height={50} className={styles.svg1} />
                                <Image src={'/iconfeather.svg'} alt={'ellipse'} width={50} height={50} className={styles.svg1} />
                                <Image src={'/iconfeather.svg'} alt={'ellipse'} width={50} height={50} className={styles.svg1} />
                            </Grid>
                            <Typography variant="h1" lineHeight={2} component="h2" sx={
                                {
                                    fontSize: 20,
                                    marginTop: '5rem',
                                    textAlign: 'center'


                                }
                            }>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                "I’ve had a great experience with OptimizedHorizons. Speed optimization + SEO took my site to the next level in terms of reach and conversions."
                            </Typography>
                            <Typography variant="h1" lineHeight={2} component="h2" sx={
                                {
                                    fontSize: 14,
                                    color: '#EDEDED',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: '2rem',
                                    textAlign: 'center'

                                }
                            }>
                                Ethan Chen
                            </Typography>
                        </Grid>
                    </Grid>
                </Carousel.Slide>
            </Carousel>
        </Grid>
    )
}