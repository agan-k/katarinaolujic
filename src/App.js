import React from 'react'
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom"
import Style from './SharedStyle.css'

import Photo from './components/photo/Photo.jsx'
import Paintings from './components/Paintings.jsx'
import Bio from './components/Bio.jsx'
import Links from './components/Links.jsx'
import Contact from './components/Contact.jsx'
import Header from './components/Header.jsx'

class App extends React.Component {
   constructor() {
      super()
   }
   render() {

      return (
         <div className="App">
         

            <Header/>

            <Switch>
               <Route exact path='/photo'>
                  <Photo />
               </Route>
               <Route exact path='/paintings'>
                  <Paintings />
               </Route>
               <Route exact path='/bio'>
                  <Bio />
               </Route>
               <Route exact path='/links'>
                  <Links />
               </Route>
               <Route exact path='/contact'>
                  <Contact/>
               </Route>
               
            </Switch>
    
            
        </div>
      )
   }
}
export default App;
