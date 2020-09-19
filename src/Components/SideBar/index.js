import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MailIcon from '@material-ui/icons/Mail';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';
import StarIcon from '@material-ui/icons/Star';
import WarningIcon from '@material-ui/icons/Warning';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import WorkIcon from '@material-ui/icons/Work';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

const buttonStyles = makeStyles((theme) => ({
    button: {
        borderRadius: theme.spacing(6),
        padding: theme.spacing(1, 2),
        backgroundColor: '#d93025',
        color: 'white',
        margin: theme.spacing(4, 0)
    },
}));

export const ComposeButton = () => {
    const classes = buttonStyles();
    return (
        <Button variant='contained' className={classes.button}>
            <Grid container spacing={2}>
                <Grid item>
                    <AddIcon />
                </Grid>
                <Hidden mdDown>
                    <Grid item>
                        <Typography variant='button'>New Message</Typography>
                    </Grid>
                </Hidden>
            </Grid>
        </Button>
    );
};

const sideBarStyles = makeStyles((theme) => ({
    sideBarWrapper: {
        paddingTop: theme.spacing(1),
    },
    center: {
        margin: 'auto'
    },
    sideBarItem: {
        padding: theme.spacing(1, 3),
        color: '#d93025',
        backgroundColor: fade('#d93025', 0.1),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
    },
    sideBarItemActive: {
        padding: theme.spacing(1, 3),
        color: '#d93025',
        backgroundColor: fade(theme.palette.common.white, 0.25),
        border: '1px solid #ccc',
    },
    sideBarFont: {
        color: 'black'
    }
}));

const SideBar = () => {
    const classes = sideBarStyles();
    return (
        <Grid container direction='column' className={classes.sideBarWrapper}>
            <Grid item className={classes.center}>
                <ComposeButton />
            </Grid>
            <Grid item className={classes.sideBarItemActive}>
                <Grid container direction='row' spacing={2}>
                    <Grid item>
                        <MailIcon />
                    </Grid>
                    <Hidden mdDown>
                        <Grid item>
                            <Typography variant='body1' className={classes.sideBarFont}>Inbox</Typography>
                        </Grid>
                    </Hidden>
                </Grid>
            </Grid>
            <Grid item className={classes.sideBarItem}>
                <Grid container direction='row' spacing={2}>
                    <Grid item>
                        <WorkIcon />
                    </Grid>
                    <Hidden mdDown>
                        <Grid item>
                            <Typography variant='body1' className={classes.sideBarFont}>Work</Typography>
                        </Grid>
                    </Hidden>
                </Grid>
            </Grid>
            <Grid item className={classes.sideBarItem}>
                <Grid container direction='row' spacing={2}>
                    <Grid item>
                        <FlightTakeoffIcon />
                    </Grid>
                    <Hidden mdDown>
                        <Grid item>
                            <Typography variant='body1' className={classes.sideBarFont}>Travel</Typography>
                        </Grid>
                    </Hidden>
                </Grid>
            </Grid>
            <Grid item className={classes.sideBarItem}>
                <Grid container direction='row' spacing={2}>
                    <Grid item>
                        <StarIcon />
                    </Grid>
                    <Hidden mdDown>
                        <Grid item>
                            <Typography variant='body1' className={classes.sideBarFont}>Starred</Typography>
                        </Grid>
                    </Hidden>
                </Grid>
            </Grid>
            <Grid item className={classes.sideBarItem}>
                <Grid container direction='row' spacing={2}>
                    <Grid item>
                        <WarningIcon />
                    </Grid>
                    <Hidden mdDown>
                        <Grid item>
                            <Typography variant='body1' className={classes.sideBarFont}>Important</Typography>
                        </Grid>
                    </Hidden>
                </Grid>
            </Grid>
            <Grid item className={classes.sideBarItem}>
                <Grid container direction='row' spacing={2}>
                    <Grid item>
                        <SendIcon />
                    </Grid>
                    <Hidden mdDown>
                        <Grid item>
                            <Typography variant='body1' className={classes.sideBarFont}>Sent</Typography>
                        </Grid>
                    </Hidden>
                </Grid>
            </Grid>
            <Grid item className={classes.sideBarItem}>
                <Grid container direction='row' spacing={2}>
                    <Grid item>
                        <DeleteIcon />
                    </Grid>
                    <Hidden mdDown>
                        <Grid item>
                            <Typography variant='body1' className={classes.sideBarFont}>Trash</Typography>
                        </Grid>
                    </Hidden>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default SideBar;
