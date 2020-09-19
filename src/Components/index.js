import React from 'react';
import Grid from '@material-ui/core/Grid';
import NavBar from './NavBar';
import EmailsTable from './Emails';
import SideBar from './SideBar';

const App = () => (
    <>
        <NavBar />
        <Grid container>
            <Grid item xs={1} lg={2}>
                <SideBar />
            </Grid>
            <Grid item xs>
                <EmailsTable />
            </Grid>
        </Grid>
    </>
);

export default App;