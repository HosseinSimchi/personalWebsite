import React , {useState} from 'react';

import {Container, TextField, Typography, Button } from '@mui/material';
import Header from '../Header/Header';

const Contact = () => {
    const [showThanks, setShowThanks] = useState(false);
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Comment, setComment] = useState('');

    const getForm = () => {
        return (
            <>
                <TextField onChange={(e) => setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" />
                <br /><br /><br />
                <TextField onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" />
                <br /><br /><br />
                <TextField
                    onChange={(e) => setComment(e.target.value)}
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
                    <br />
                    your name : {Name}
                    <br /><br />
                    your name : {Email}
                    <br /><br />
                    your name : {Comment}
                    <br /><br />

                    Thanks
                    <br />
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