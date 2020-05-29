import React from 'react';
import ContinuousSlider from "./ContinuousSlider";

const Footer = props => {

    const handleKeyPress = (event) => {
        if(event.which === 13){
            props.submit(event)
        }
    }

    if (props.isAvailable) {
        return (
            <footer>
                <input type="number" pattern="[0-9]*" inputMode="numeric" min={1} max={55} defaultValue={props.page}
                       onFocus={props.onfocus} onBlur={props.onblur} onChange={props.submit} onKeyPress={handleKeyPress}/>
                <div className="slide-container">
                    <ContinuousSlider change={props.change} commit={props.commit} value={props.page}
                                      history={props.history}></ContinuousSlider>
                </div>
            </footer>
        );
    }
    return null;
}

export default Footer;