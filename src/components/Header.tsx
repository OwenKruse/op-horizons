import {
    Grid,
    Typography,
    Button,
    Box, Icon, Avatar,


} from "@mui/material";

import {useMediaQuery} from "@mui/material";
import {useRouter} from "next/router";

export default function Header() {
    const router = useRouter();
    let isMobile = useMediaQuery('(max-width:1000px)');
    return (
        <Grid container sx={
            {
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                padding: '3rem',
            }
        }>

            {isMobile ?             <Grid item key={1} xs={0} sx={
                {
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent:'center',
                    alignSelf: 'center',
                    paddingRight: '1rem',
                    paddingBottom: '1rem',

                }
            }>
                <Avatar src={'/b89840aa-5437-4518-af41-3cea9bf642a0_1681191466822505855.png'}>home</Avatar>
                </Grid>

                :
            <Grid item key={1} xs={3}  sx={
                {
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent:'center',
                    alignSelf: 'center',
                }
            }>
                <Avatar src={'/b89840aa-5437-4518-af41-3cea9bf642a0_1681191466822505855.png'}>home</Avatar>

                <Typography
                    onClick={() => router.push('/')}
                    variant="h6" fontWeight={10} component="h2" sx={
                    {
                        textAlign: 'center',
                        alignContent: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        justifyItems: 'center',
                        justifySelf: 'center',
                        fontWeight: '10',
                        cursor: 'pointer',
                    }
                } >
                    Optimized Horizons
                </Typography>

            </Grid>
            }


            <Grid item key={2} xs={3} sx={
                {
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'row',
                    alignContent:'center',
                    alignSelf: 'center',
                    justifySelf: 'flex-start',
                    marginRight: 'auto',

                }
            }>
                <Typography variant="h6" fontSize={'1rem'} component="h2" fontWeight={10} sx={
                    {
                        cursor: 'pointer',
                    }
                }
                onClick={() => router.push('/')}

                            paddingRight={'1rem'} >
                    Features
                </Typography>
                <Typography variant="h6"
                            onClick={() => router.push('/prices')}

                            component="h2" fontSize={'1rem'} fontWeight={10} sx={
                    {
                        cursor: 'pointer',
                    }
                }    paddingRight={'1rem'} >
                    Pricing
                </Typography>
                <Typography sx={
                    {
                        cursor: 'pointer',
                    }
                } variant="h6"
                            onClick={() => router.push('/contact')}
                            component="h2"  fontSize={'1rem'} fontWeight={10} paddingRight={'1rem'} >
                    Contact
                </Typography>
            </Grid>
            <Grid item sx={
                {
                    justifySelf: 'flex-end',
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent:'center',
                    alignSelf: 'center',
                    justifyContent: 'flex-end',
                      justifyItems: 'flex-end',
                }
            } >
                <Button
                    sx={{
                        width: 155,
                        // Round corners
                        borderRadius: 12,
                        // border: double 4px transparent;
                        // border-radius: 80px;
                        // background-image: linear-gradient(white, white), radial-gradient(circle at top left, #f00,#3020ff);
                        // background-origin: border-box;
                        // background-clip: padding-box, border-box;
                        border: "double 1px transparent",
                        backgroundImage: "linear-gradient(black, black), radial-gradient(circle at top left, #FF914D,#3E6990)",
                        backgroundOrigin: "border-box",
                        backgroundClip: "padding-box, border-box",
                        color: "white",
                        marginRight: 2,


                    }}
                    variant="contained"
                    color="primary"
                >
                    Login
                </Button>
                <Button
                    sx={{
                        width: 155,
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
            </Grid>
        </Grid>
    )
}