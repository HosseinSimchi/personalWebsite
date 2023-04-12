import React , {useState} from 'react';

import {Container, TextField, Typography, Button } from '@mui/material';
import Header from '../Header/Header';

const Contact = () => {
    const [showThanks, setShowThanks] = useState(false);

    const getForm = () => {
        return (
            <>
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <br /><br /><br />
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <br /><br /><br />
                <TextField
                    id="outlined-multiline-static"
                    label="Comments"
                    multiline
                    rows={4}
                    defaultValue="Please write your comments."
                />
                <br /><br /><br />
                <Button variant="contained" onClick={() => setShowThanks(true)}>Submit</Button>
            </>
        )
    }

    const sayThanks = () => {
        return (
            <>
                <Typography variant="h6" component="h6">
                    Thank you!
                </Typography>
            </>
        )
    }

    return (
        <>
            <Header/>
            <br /><br /><br />
            <Container sx={{border : '2px dashed black'}}>
            <br /><br />
                { showThanks ? sayThanks() : getForm()}
            <br /><br />
            </Container>
        </>
    )
}

export default Contact;