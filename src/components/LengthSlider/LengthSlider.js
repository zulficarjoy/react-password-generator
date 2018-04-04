import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'rc-slider';

import * as actionTypes from '../../store/actions';

import 'rc-slider/assets/index.css';

class LengthSlider extends Component {
    render() {
        return (
            <section className="section length-slider-container">
                <div className="container">
                    <div className="tile is-parent has-text-centered">
                        <div className="tile is-child">
                            <div className='slider'>
                                <Slider
                                    min={0}
                                    max={16}
                                    defaultValue={this.props.length}
                                    onChange={this.props.onLengthChange}
                                    onAfterChange={this.props.onGeneratePassword} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapPropsToState = (state) => {
    return {
        length: state.length
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLengthChange: (value) => dispatch({ type: actionTypes.CHANGE_PASSWORD_LENGTH, value: value }),
        onGeneratePassword: () => dispatch({ type: actionTypes.GENERATE_PASSWORD })
    }
};

export default connect(mapPropsToState, mapDispatchToProps)(LengthSlider);