import React from 'react';
import ContinuousSlider from "./ContinuousSlider";

const Footer = props => {

    const handleKeyPress = (event) => {
        // event.preventDefault()
        // event.persist()
        console.log('handle initial event')
        if(event.key === 'Enter'){
          props.submit(event)
        }
    }

    if (props.isAvailable) {
        return (
            <footer>
                <input type="number" inputMode="numeric" min={1} max={55} defaultValue={props.page}
                      onKeyPress={handleKeyPress} returnKeyType='go'/>
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