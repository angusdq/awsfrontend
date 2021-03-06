import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import motorist from '../images/motorist.jpg';
import mechanic from '../images/mechanic.jpg';
import { Link as RouterLink } from "react-router-dom";


/*

    The layout is modified from
    https://github.com/mui/material-ui/blob/v5.7.0/docs/data/material/getting-started/templates/album/Album.js

*/
function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Roadside Assistance Service
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <CameraIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Home
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Roadside Assistance Service
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            With closet local professionals and best assistance team, we could help you with any type of mechanical failure at any time.
                        </Typography>
                        <Stack
                            sx={{ pt: 2 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <RouterLink to="/SignIn">
                                <Button variant="contained">
                                    Sign in
                                </Button>
                            </RouterLink>
                            <RouterLink to="/PSignIn">
                                <Button variant="contained">
                                    Professional Sign In
                                </Button>
                            </RouterLink>
                            <RouterLink to="/Test">
                                <Button variant="contained">
                                    Test data
                                </Button>
                            </RouterLink>

                        </Stack>

                        <br></br>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Register below if you havent already!
                        </Typography>

                    </Container>
                </Box>

                <Container>
                <Box sx={{ flexGrow:1 }}>

                    <Grid container columns={6} spacing={2}>
                        <Grid item xs={6} sm={3}>
                            <item>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={motorist}
                                        alt="motorist"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Motorist
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Sign up to the roadside assistance service.
                                            Get unlimited callouts with a subscription,
                                            or sign up for free and pay as you go
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <RouterLink to='/SignUp'>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="outlined"
                                                sx={{ mt: 3, mb: 2 }}
                                            >Sign up</Button>
                                        </RouterLink>
                                    </CardActions>
                                </Card>
                            </item>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <item>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={mechanic}
                                        alt="Mechanic"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Roadside Assistance Professional
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Apply to become a roadside assistance professional
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <RouterLink to='/ProfessionalReg'>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="outlined"
                                                sx={{ mt: 3, mb: 2 }}
                                            >Sign up</Button>
                                        </RouterLink>
                                    </CardActions>
                                </Card>
                            </item>
                        </Grid>
                    </Grid>

                </Box>
                </Container>

            </main>

            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="h6" align="center" gutterBottom>
                    <RouterLink to="/AdminSignIn">
                        <Link variant="outlined" align="center">Admin sign in</Link>
                    </RouterLink>
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    CSIT314 Group C-13 Final Deliverable
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}