import React from 'react';

class SliderCarousel extends React.Component {
    
    
    constructor(props) {
        super(props)
        this.state ={
            counter: 1
         }
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }
    
    next() {
        this.setState({
            counter: this.state.counter+1,
        });
        var scroll = this.state.counter
        this.divElement.style.right = this.state.counter*200+"px";
        this.divElement.style.left = 0+"px";
        this.divElement.lastChild.parentNode.insertBefore(this.divElement.firstChild,this.divElement.lastChild.nextSibling);
        console.log(this.state.counter, this.divElement.lastChild);
    }

    prev() {
        this.divElement.lastChild.parentNode.insertBefore(this.divElement.lastChild,this.divElement.firstChild)
        this.divElement.style.left = 0+"px";

        console.log(this.divElement.firstChild.parentNode);
    }

    componentDidMount () {
        
        // this.setState({
        //     dimensions: {
        //       width: this.divElement.clientWidth,
        //     },
        //   });
      }
    
    render() {
        
    //const { dimensions } = this.state;
    const payload = Object.keys(this.props.payload).map(key => 
    	<div key={key} id={key} className="slider"   ref={ (divSlider) => this.divSlider = divSlider}>
            <div className="img-cont"><img src={this.props.payload[key].largeImageURL} alt={this.props.payload[key].tags} /></div>
            <p>img{}{this.props.payload[key].user}</p>
        </div>

    )
    const CarouselWidth = payload.length * 200;

    console.log(CarouselWidth);
    

    return (
        <div className="main-c">
            <h3>Carousel</h3>
            <div className="container" >
                <div className="wrapper" id="wrapper" ref={ (divElement) => this.divElement = divElement} style={{width: CarouselWidth + "px"}}   >
                {payload}
                
            </div>
            </div>
            <div className="btn-container">
                <input type="button" value="Prev" title="next"   className="prev" onClick={this.prev} />
                <input type="button" value="Next" title="next"  className="next" onClick={this.next}/>
            </div>
        </div>
    )
}

}

export default SliderCarousel;