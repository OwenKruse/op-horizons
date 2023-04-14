import {Grid, Typography} from "@mui/material";


export default function Quote1() {
    return (
        <Grid  sx={
            {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                backgroundColor: '#222222',
                justifyContent: 'center',
                alignItems: 'center',
            }
        }>
            <Typography variant="h1" lineHeight={2} component="h2" sx={
                {
                    alignContent: 'center',
                    fontSize: 30,
                    textAlign: 'center',
                }
            }>
                “OptimizedHorizons transformed my online presence, boosting both performance and user engagement.“
            </Typography>
            <Typography variant="h1" lineHeight={.9} component="h2" sx={
                {
                    alignContent: 'center',
                    fontSize: 18,
                }
            }>
                Candice Dik
            </Typography>
            <Typography variant="h1" lineHeight={.9} component="h2" sx={
                {
                    alignContent: 'center',
                    fontSize: 16,
                    color: '#D2D3D6',
                    paddingTop: '1rem',
                    paddingBottom: '1rem',
                }
            }>
                CEO, Sisyphus
            </Typography>
        </Grid>
    )
    
}