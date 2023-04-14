import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { IBM_Plex_Sans } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from "@/components/Header";
import FrontPage from "@/components/FrontPage";
import Quote1 from "@/components/Quote1";
import Quote2 from "@/components/Quote2";
import SpeedMatters from "@/components/SpeedMatters";
import SEOMatters from "@/components/SEOMatters";
import Call from "@/components/Call";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import { Carousel } from '@mantine/carousel';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


import {
    Grid,
    Typography,
    useMediaQuery,
    Box,
    Button,
    Icon,
    Avatar, Tabs, Tab,
} from '@mui/material';
import * as url from "url";
import { createTheme, ThemeProvider} from "@mui/material";
import React from "react";

const inter = Inter({ subsets: ['latin'] })
const IBM = IBM_Plex_Sans( { weight: "400", subsets: ['latin'] } )


export default function Home() {
    let isDesktop = useMediaQuery('(max-width:1400px)');
    let isMobile = useMediaQuery('(max-width:1000px)');

    const [value, setValue] = React.useState(0);

    // @ts-ignore
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
    }

    function TabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        {children}
                    </Box>
                )}
            </div>
        );
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
    <>
      <Head>
        <title>Optimized Horizons</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
        <main className={styles.main}>
            <FrontPage />
            <Quote1 />
            <Grid container sx={
                {
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                }
            } >
            <ThemeProvider theme={theme}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="SEO" />
                <Tab   label="Optimization" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <div>
                   <SpeedMatters />
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div>
                  <SEOMatters />
                </div>
            </TabPanel>
            </ThemeProvider>
            </Grid>
            <Quote2 />
            <Call />
            <Reviews />
            <Footer />


        </main>
    </>
  )
}
