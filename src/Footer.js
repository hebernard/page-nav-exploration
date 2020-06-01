import React from 'react';
import ContinuousSlider from "./ContinuousSlider";

const Footer = props => {
    if (props.isAvailable) {
        return (
            <footer>
                <form onSubmit={props.submit} action="...">
                    <input type="number" pattern="[0-9]*" inputMode="numeric" min={1} max={55} defaultValue={props.page}
                           />
                    <button type="submit" onClick={props.submit}>Test</button>
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