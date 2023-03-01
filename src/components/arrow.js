import React from "react";
import '../css/arrow.css'
class Arrow extends React.Component {

    render() {
        return (
            <button className={`btn-arrow ${this.props.direction}`} onClick={() => this.props.onArrowClick({keyCode: Number(this.props.keycode)})}>
                <div className={`arrow ${this.props.direction}`} />
            </button>
        );
    }
}

export default Arrow;