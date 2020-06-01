import React from 'react';
import ContinuousSlider from "./ContinuousSlider";

const Footer = props => {

    const handleSubmit = (event) =>{
        event.preventDefault()
        event.persist()
        props.submit(event)
        console.log('got this far')
    }

    if (props.isAvailable) {
        return (
            <footer>
                <form onSubmit={handleSubmit}>
                    <input type="number" pattern="[0-9]*" inputMode="numeric" min={1} max={55} defaultValue={props.page}
                           onFocus={props.onfocus} onBlur={props.onblur}/>
                </form>
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