import React from "react"  
// =========================
// Slide
// =========================

export default class Slide extends React.Component {
constructor(props) {
    super(props)

    this.handleSlideClick = this.handleSlideClick.bind(this)
    this.imageLoaded = this.imageLoaded.bind(this)
    this.slide = React.createRef()
}



handleSlideClick(event) {
    this.props.handleSlideClick(this.props.slide.index)
}

imageLoaded(event) {
    event.target.style.opacity = 1
}

render() {
    const { src, headline, index } = this.props.slide
    const current = this.props.current
    let classNames = 'slide'
    
    if (current === index) classNames += ' slide--current'
    else if (current - 1 === index) classNames += ' slide--previous'
    else if (current + 1 === index) classNames += ' slide--next'
    
    return (
    <li 
        ref={this.slide}
        className={classNames} 
        onClick={this.handleSlideClick}
    >
        <div className="slide__image-wrapper">
        <img 
            className="slide__image"
            alt={headline}
            src={src}
            onLoad={this.imageLoaded}
        />
        </div>
        
        <p className="image-caption">{headline}</p>
        
    </li>
    )
}
}