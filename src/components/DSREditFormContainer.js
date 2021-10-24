import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import DSREditTabPanel from './DSREditTabPanel';



import './GIUpdateFormContainer.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 260,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    formControlSmall: {
        margin: theme.spacing(2),
        minWidth: 120,
    },
}));

const Input = styled('input')({
    display: 'none',
});

export default function DSREditFormContainer() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [taluks, setTaluks] = React.useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleChange = (event) => {
        
    };

    //#cee2f0
    //backgroundColor: '#cee2f0'

    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Typography component="div" style={{ borderRadius: '20px', borderStyle: 'groove', height: '130vh', width: '80%', marginLeft: '120px' }}>
                    <div class="row-small-bottom-grid1">
                        <DSREditTabPanel />
                    </div>
                </Typography>
            </Container>
        </React.Fragment>
    );
}