import React, { Component } from 'react'

import Header from './Header.jsx'
import ImageDetail from './ImageDetail'

import bio_pic from '../assets/photo/square/003.jpg'
import bioData from './bioData'

export default class Bio extends Component {
   constructor() {
      super()
      this.state = {
         isShowing: false
      }
   }
   handleImageSelect = (item, index) => {
      this.setState({
         isShowing: true,
         index: index
      })
   }
   closeImageDetail = () => {
      this.setState({
         isShowing: false
      })
   }
   render() {
      const bio_slides = bioData.map((item, index) => 
         <div className='gallery-img-container bio'>
            <img src={item.img} onClick={() => this.handleImageSelect(item, index)}/>
         </div>
         )
      return (
         <div className='bio container'>
            <Header />
            <div className='bio wrapper'>
               <img src={bio_pic}
                  style={{
                     height: '10em', 
                     margin: '0 2em 0 10em'
                  }} />
               <div className='info section'>
                  <p>
                     Katarina was born in Derventa, a small town in the northern part of Bosnia-Herzegovina.
                     Even as a child she was fascinated by the colors and shapes of surrounding places. 
                     Art was her main hobby throughout the school years and it remained as such until she 
                     moved to Boston, USA. In Boston, with new horizons opening, she decided to take the 
                     opportunity and get a college degree in fine arts. In May 2006 she graduated Bachelors 
                     of Fine Arts, majoring in photography, at Massachusetts College of Art. Currently she 
                     resides in Brooklyn, NY.
                  </p>
                  <h2>Exhibitions:</h2>
                  <ul>
                     <li>
                        September 14th 2008-January 17th 2009, Art at Urban 326 7th ave. Brooklyn, NY 11215
                     </li>
                     <li>
                        October 2007-January 2008 at Sabur, Somerville , MA
                     </li>
                     <li>
                        May 2006 - Tower Gallery, Massachusetts College of Art, final thesis graduating photo group show.
                     </li>
                     <li>
                        April 2006 - Student Life Gallery, installation station, Massachusetts College of Art. "Crossroads" 
                        a show she shared with a colleague Camille Maye, ceramics major, as an conclusion to a four year
                        journey. 
                     </li>
                     <li>
                        February 2006 - A4 Gallery, Massachusetts College of Art, senior photo thesis show.
                     </li>
                  </ul>
                  <div className='gallery bio'>
                     {bio_slides}
                  </div>
                  {this.state.isShowing &&
                     // this.state.sq_collection &&
                     (
               <ImageDetail
                  index={this.state.index}
                  closeImageDetail={this.closeImageDetail}
                  collection={bioData}
               />
            )}
                  <h2>Internship:</h2>
                  <p>
                     Feb-Jun 2003, Know Your Boston Magazine, Boston MA. A monthly event guide and entertainment
                     magazine. She was a staff photographer. Her images appear in four issues of this magazine, and
                     on a front page of the February issue.
                  </p>
               </div>
               
                  

            </div>
         </div>
      )
   }
}
