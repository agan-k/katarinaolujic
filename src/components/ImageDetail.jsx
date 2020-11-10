import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.css'

export default class ImageDetail extends Component {
   constructor(props) {
      super()
      this.state = {
         count: 0,
      }
      console.log(props)
   }
   componentDidMount = () => {
      this.setState({
         count: this.props.index
      })
   }
   nextImage = () => {
      this.setState({
         count: this.state.count + 1
      })
   }
   previousImage = () => {
      this.setState({
         count: this.state.count - 1
      })
   }
   render() {
      const BackArrow = (props) => (
         <div onClick={props.previousImage}>
            <i className="fa fa-angle-left fa-1x" aria-hidden="true"></i>
         </div>
      )
      const NextArrow = (props) => (
         <div onClick={props.nextImage}>
            <i className="fa fa-angle-right fa-1x" aria-hidden="true"></i>
         </div>
      )
      return (
         <div className='image-detail-container'>

            <div className='close-image-detail' onClick={this.props.closeImageDetail}>
               &times;
            </div>
            <div className='image-detail'>
               <div className='arrow-box back'>
                  {this.state.count !== 0 ?
                     <BackArrow previousImage={this.previousImage}/> :
                  ''   
               }
               </div>
               
               {this.props.collection.map(item => 
                  this.props.collection.indexOf(item) === this.state.count ?
                     <div className='slide'>
                        <img src={item.img} />
                        <p>{item.caption}</p>
                     </div> : ''
                  )}


               <div className='arrow-box next'>
                  {this.state.count !== this.props.collection.length - 1 ?
                  <NextArrow nextImage={this.nextImage} /> : ''    
               }
               </div>
            </div>
         </div>
      )
   }
}
