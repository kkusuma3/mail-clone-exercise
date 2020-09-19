import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import WorkIcon from '@material-ui/icons/Work';
import Emails from '../../emails.json';
import { Typography } from '@material-ui/core';

const tableStyles =  makeStyles((theme) => ({
    gridWrapper: {
    },
    center: {
        margin: 'auto'
    },
    inboxHeading: {
        padding: theme.spacing(2),
    },
    highlighted: {
        backgroundColor: fade('#d93025', 0.1),
        cursor: 'pointer',
        border: '1px solid #ccc',
    },
    emailRow: {
        '&:hover': {
            backgroundColor: fade('#d93025', 0.1),
            cursor: 'pointer'
        },
        border: '1px solid #ccc',
    }
}));

const EmailsTable = () => {
    const [emailMessages, setEmailMessages] = useState(Emails.messages);
    const classes = tableStyles();

    const isAllSelected = () => emailMessages.every(email => email.isSelected);
    const onCheckboxChange = id => {
        setEmailMessages(emailMessages.map(email => {
            if (email.id === id) {
                email.isSelected = !email.isSelected;
            }
            return email;
        }));
    };

    return (
        <Card variant='outlined' className={classes.gridWrapper}>
            <Grid container direction='column'>
                <Grid item className={classes.inboxHeading}>
                    <Typography variant='h4'>Inbox</Typography>
                </Grid>
                <Grid item>
                    <Grid container direction='column'>
                        <Grid container direction='row' alignItems='center'>
                            <Grid item xs={6} lg={1}>
                                <Grid container direction='row' alignItems='center'>
                                    <Grid item>
                                        <Checkbox checked={() => isAllSelected()} />
                                    </Grid>
                                    <Grid item>
                                        <Typography>Select All</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} lg={2}>
                                <Grid container direction='row' alignItems='center'>
                                    <Grid item>
                                        <IconButton>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Grid>
                                    <Grid item>
                                        <Typography>Delete</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        {
                            emailMessages.map(email => (
                                <Grid container direction='row' alignItems='center' className={email.isSelected ? classes.highlighted : classes.emailRow}>
                                    <Grid item xs={2} lg={1}>
                                        <Grid container alignItems='center'>
                                            <Grid item xs={4}>
                                                <Checkbox checked={email.isSelected} onChange={() => onCheckboxChange(email.id)} />
                                            </Grid>
                                            {
                                                email.tags.includes('work') &&
                                                (
                                                    <Grid item xs={4}>
                                                        <Tooltip title='Work'>
                                                            <IconButton>
                                                                <WorkIcon />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </Grid>
                                                )
                                            }
                                            {
                                                email.tags.includes('travel') &&
                                                (
                                                    <Grid item xs={4}>
                                                        <Tooltip title='Travel'>
                                                            <IconButton>
                                                                <FlightTakeoffIcon />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </Grid>
                                                )
                                            }
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={4} lg={2}>
                                        <Typography variant='body1'>{email.sender}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Grid container>
                                            <Grid item>
                                                <Typography variant='body1' className={classes.emailSubject}>{email.subject}</Typography>
                                            </Grid>
                                            <Grid item xs>
                                                {/* <Typography variant='body2' className={classes.emailSubject}>{email.body}</Typography> */}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={4} lg={2}>
                                        <Typography variant='body1'>{email.date}</Typography>
                                    </Grid>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    )
}

export default EmailsTable;