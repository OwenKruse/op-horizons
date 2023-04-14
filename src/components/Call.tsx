import {Grid, Typography} from "@mui/material";
import Image from "next/image";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {DateCalendar} from "@mui/x-date-pickers/DateCalendar";
import {IBM_Plex_Sans} from "@next/font/google";
const IBM = IBM_Plex_Sans( { weight: "400", subsets: ['latin'] } )
import {useEffect, useState} from "react";
import moment from "moment";

export default function Call() {
    const today = moment(new Date().getDate(),'DD/MM/YYYY')
    const [date, setDate] = useState(today)
    // @ts-ignore
    return (
        <Grid container sx={
            {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignContent: 'center',
                padding: '4rem',
                paddingTop: '8rem',
            }
        }
        >

            <Grid item sx={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                }
            } >
                <Typography variant="h1" lineHeight={.9} component="h2" sx={
                    {
                        alignContent: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        fontFamily: IBM,
                        whiteSpace: 'nowrap',
                        fontSize: 18,
                        color: '#D7D7DF',
                        paddingBottom: '1rem',
                    }
                }>
                    Have a question?
                </Typography>
                <Typography variant="h1" lineHeight={.9} component="h2" sx={
                    {
                        alignContent: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        fontFamily: IBM,
                        whiteSpace: 'nowrap',
                        fontSize: 60,


                    }
                }>
                    Schedule a call.
                </Typography>
            </Grid>

            <Grid item sx={
                {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignSelf: 'center',
                    paddingTop: '2rem',
                    position: 'relative',
                }
            }>
                <Image src={'/ellipse-33.svg'} alt={'ellipse'} fill   />
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DateCalendar
                        minDate={today}
                        // @ts-ignore
                        onChange={(date) => setDate(date)}
                        sx={
                            {
                                backgroundColor: '#1C1C1E',
                                borderRadius: '1rem',
                                "& .MuiDateCalendar-viewTransitionContainer": {
                                    "& .MuiDayCalendar-header": {
                                        "& .MuiDayCalendar-weekDayLabel": {
                                            color: '#D7D7DF',
                                        }
                                    },
                                    "& .MuiPickersDay": {
                                        color: '#D7D7DF',
                                    }
                                },


                            }
                        }

                        slotProps={

                            {

                                leftArrowIcon: {
                                    style: {
                                        color: '#D7D7DF',

                                    }
                                },
                                rightArrowIcon: {
                                    style: {
                                        color: '#D7D7DF',
                                    }
                                },

                                day: {

                                    sx: {
                                        backgroundImage: 'linear-gradient(90deg, #7F60F9 0%, #6DD3FF 100%)',
                                        backgroundClip: 'text',
                                        color: 'transparent',
                                        fontWeight: 'bold',
                                        fontSize: 18,


                                    }
                                },

                            }
                        }


                    />
                </LocalizationProvider>
            </Grid>

        </Grid>
    )
}