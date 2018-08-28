/*
This component is rendering teh carousel and attaching the event of next and previous
*/
import React from 'react';

class SliderCarousel extends React.Component {
    
    
    constructor(props) {
        super(props)
        this.state ={
            counter: 1,
            containerHeight: '0',
            containerWidth: '0',
            selectedNode:3
        }
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }
    handleResize (){ 
        this.setState({
            containerHeight: this.ContElement.clientHeight,
            containerWidth: this.ContElement.clientWidth,
            selectedNode:Math.floor(this.ContElement.clientWidth/this.divElement.firstChild.clientWidth / 2)+1

      }) 
    }
    
    componentDidMount() {
    //attached handleResize() for calculating
    window.addEventListener("resize", this.handleResize)
    }

    // Next button event handler
    next() {
        console.log(this.state.selectedNode);
        this.setState({
            counter: this.state.counter+1,
            
            selectedNode: this.state.selectedNode > 20 ? 2 : this.state.selectedNode+1
        });
        
        var scroll = this.state.counter
        this.divElement.style.right = this.state.counter*200+"px";
        this.divElement.style.left = 0+"px";
        this.divElement.lastChild.parentNode.insertBefore(this.divElement.firstChild,this.divElement.lastChild.nextSibling);
        
    }

    // Next button event handler
    prev() {
        this.setState({
            selectedNode: this.state.selectedNode-1
        });
        this.divElement.lastChild.parentNode.insertBefore(this.divElement.lastChild,this.divElement.firstChild)
        this.divElement.style.left = 0+"px";
        console.log(this.divElement.firstChild.parentNode);
    }
    
    render() {
        
    //iterating carousel slide with payload object
    const payload = Object.keys(this.props.payload).map(key => 
    	<div key={key} id={key} className={ this.state.selectedNode-1 == key ? 'selected slider' : 'slider s' }    ref={ (divSlider) => this.divSlider = divSlider}>
            <div className="img-cont"><img src={this.props.payload[key].largeImageURL} alt={this.props.payload[key].tags} /></div>
            <p>img{}{this.props.payload[key].user}{this.state.selectedNode}</p>
        </div>

    )
    const CarouselWidth = payload.length * 200;

    console.log(CarouselWidth);
    

    return (
        <div className="main-c">
            <h1>Carousel</h1>
            <div className="container" id="container" ref={ (ContElement) => this.ContElement = ContElement} >
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