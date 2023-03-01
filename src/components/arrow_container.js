import React from "react";
import Arrow from "./arrow";
import "../css/arrow-container.css"
class ArrowContainer extends React.Component {
    render () {
        return (
            <div className="arrow-container">
                    <Arrow direction="left" keycode="37" onArrowClick={this.props.setDirection}/>
					<Arrow direction="down" keycode="40" onArrowClick={this.props.setDirection}/>
					<Arrow direction="right" keycode="39" onArrowClick={this.props.setDirection}/>
                    <Arrow direction="up" keycode="38" onArrowClick={this.props.setDirection}/>
            </div>
        );
    }
}

export default ArrowContainer;