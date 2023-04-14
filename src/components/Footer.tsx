import {Avatar, Grid, Typography} from "@mui/material";


export default function Footer() {


    return (
        <Grid container sx={
            {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1E1E1E',

            }
        }>
            <Grid container sx={
                {
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-around',
                    alignItems: 'start',
                }
            }
            >
                <Grid item  sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: '2rem',
                    }
                }>
                    <Typography variant="h1" lineHeight={2} component="h2" sx={
                        {
                            alignContent: 'center',
                            fontSize: 16,
                            fontWeight:'bold',
                            color: '#ffffff',


                        }
                    }>
                        Product
                    </Typography>
                    <Typography variant="h1" lineHeight={2} component="h2" sx={
                        {
                            alignContent: 'center',
                            fontSize: 16,
                            color: '#8c8a8a',
                            paddingTop: '1rem',
                        }
                    }>
                        Website Optimization
                    </Typography>
                    <Typography variant="h1" lineHeight={2} component="h2" sx={
                        {
                            alignContent: 'center',
                            fontSize: 16,
                            color: '#8c8a8a',
                            paddingTop: '1rem',
                        }
                    }>
                        Google Search Console
                    </Typography>
                    <Typography variant="h1" lineHeight={2} component="h2" sx={
                        {
                            alignContent: 'center',
                            fontSize: 16,
                            color: '#8c8a8a',
                            paddingTop: '1rem',
                        }
                    }>
                        Content Delivery Network
                    </Typography>
                </Grid>
                <Grid item  sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: '2rem',
                        paddingBottom: '2rem',
                    }
                }>
                    <Typography variant="h1" lineHeight={2} component="h2" sx={
                        {
                            alignContent: 'center',
                            fontSize: 16,
                            fontWeight:'bold',
                            color: '#ffffff',


                        }
                    }>
                        Pricing
                    </Typography>
                    <Typography variant="h1" lineHeight={2} component="h2" sx={
                        {
                            alignContent: 'center',
                            fontSize: 16,
                            color: '#8c8a8a',
                            paddingTop: '1rem',
                        }
                    }>
                        Plans
                    </Typography>
                </Grid>
                <Grid item  sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: '2rem',
                        paddingBottom: '2rem',
                    }
                }>
                    <Typography variant="h1" lineHeight={2} component="h2" sx={
                        {
                            alignContent: 'center',
                            fontSize: 16,
                            fontWeight:'bold',
                            color: '#ffffff',


                        }
                    }>
                        Contact
                    </Typography>
                    <Typography variant="h1" lineHeight={2} component="h2" sx={
                        {
                            alignContent: 'center',
                            fontSize: 16,
                            color: '#8c8a8a',
                            paddingTop: '1rem',
                        }
                    }>
                        Send Email
                    </Typography>
                    <Typography variant="h1" lineHeight={2} component="h2" sx={
                        {
                            alignContent: 'center',
                            fontSize: 16,
                            color: '#8c8a8a',
                            paddingTop: '1rem',
                        }
                    }>
                        Schedule a Call
                    </Typography>

                </Grid>
            </Grid>
            <Grid container sx={
                {
                    flexDirection: 'row',
                    width: '100%',
                    borderTop: '1px solid #8c8a8a',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    paddingTop: '2rem',
                    paddingBottom: '2rem',

                }
            }
            >
                <Grid item  sx={
                    {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignSelf: 'start',

                    }
                }>
                    <Avatar src={'/b89840aa-5437-4518-af41-3cea9bf642a0_1681191466822505855.png'}>home</Avatar>

                    <Typography variant="h6" fontWeight={10} component="h2" sx={
                        {
                            textAlign: 'center',
                            alignContent: 'center',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            justifyItems: 'center',
                            justifySelf: 'center',
                            fontWeight: '10',
                        }
                    } >
                        Optimized Horizons
                    </Typography>
                </Grid>
                <Grid item  sx={
                    {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignSelf: 'center',
                        justifySelf: 'center',
                        justifyItems: 'center',
                        gap: '2rem',

                    }
                }>
                    <Typography variant="h6" fontWeight={10} component="h2" sx={
                        {
                            textAlign: 'center',
                            alignContent: 'center',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            justifyItems: 'center',
                            justifySelf: 'center',
                            fontSize: 12,
                        }
                    } >
                        Terms
                    </Typography>
                    <Typography variant="h6" fontWeight={10} component="h2" sx={
                        {
                            textAlign: 'center',
                            alignContent: 'center',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            justifyItems: 'center',
                            justifySelf: 'center',
                            fontSize: 12,

                        }
                    } >
                        Privacy
                    </Typography>
                    <Typography variant="h6" fontWeight={10} component="h2" sx={
                        {
                            textAlign: 'center',
                            alignContent: 'center',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            justifyItems: 'center',
                            justifySelf: 'center',
                            fontSize: 12,

                        }
                    } >
                        Cookies
                    </Typography>
                </Grid>

            </Grid>

        </Grid>

    )
}