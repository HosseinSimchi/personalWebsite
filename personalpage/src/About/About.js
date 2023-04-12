import React from 'react';
import Header from '../Header/Header';
import {Container, Typography} from '@mui/material';


const About = () => {
    return (
        <>
            <Header />
            <br/><br/><br/>
            <Container sx={{border : '2px dashed black'}}>
                <Typography variant="h6" component="h6">
                    Esse in adipisicing est labore tempor cillum fugiat incididunt excepteur aliqua id pariatur. Voluptate in irure sint Lorem excepteur ipsum duis enim aliqua culpa consectetur irure voluptate. Aliqua excepteur labore veniam dolor occaecat nostrud. Excepteur veniam ipsum aliquip elit culpa. Anim mollit ut sunt dolor veniam officia. Cupidatat nulla nisi aliqua duis cillum nostrud amet dolor cupidatat excepteur sint labore anim sit. Duis tempor incididunt consectetur laboris consectetur proident do cupidatat culpa.
                </Typography>
            </Container>
        </>
    )
}

export default About;
