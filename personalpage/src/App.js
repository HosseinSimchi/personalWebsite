import React from 'react';

import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import {Container, Typography} from '@mui/material';

import SlideShow from './SlideShow/Slideshow';


const App = () => {
  return (
    <>
      <Header />
      <br/><br/><br/>
      <SlideShow />
      <br /><br/><br/>
      <Container sx={{border : '2px dashed black'}}>
        <Typography variant="h6" component="h6">
            Esse in adipisicing est labore tempor cillum fugiat incididunt excepteur aliqua id pariatur. Voluptate in irure sint Lorem excepteur ipsum duis enim aliqua culpa consectetur irure voluptate. Aliqua excepteur labore veniam dolor occaecat nostrud. Excepteur veniam ipsum aliquip elit culpa. Anim mollit ut sunt dolor veniam officia. Cupidatat nulla nisi aliqua duis cillum nostrud amet dolor cupidatat excepteur sint labore anim sit. Duis tempor incididunt consectetur laboris consectetur proident do cupidatat culpa.

            Esse nulla dolor tempor culpa nisi est reprehenderit ullamco. Consectetur consectetur magna cillum do do. Consectetur nostrud dolore ipsum do. Dolore excepteur et enim occaecat reprehenderit aliqua eiusmod dolor cillum excepteur.

            Eu dolore exercitation dolor commodo. Velit aliqua tempor sunt adipisicing labore sint anim et. Veniam officia velit non eiusmod adipisicing et. Do commodo ex culpa anim sit minim labore cillum ad aute velit. Commodo ea labore mollit non. Eu consectetur dolor deserunt laboris aute veniam dolore voluptate ut sint. Velit exercitation officia nisi reprehenderit deserunt.

            Id Ksse do et qui velit do velit sunt aliquip ipsum. Labore mollit tempor aute pariatur officia veniam amet ipsum sunt. Nisi laboris dolore amet nulla irure laboris mollit. Ipsum ipsum cillum excepteur irure nisi.
        </Typography>
      </Container>
      <Outlet />
    </>
  )
}


export default App;
