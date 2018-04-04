import React, { Component } from 'react';
import PasswordLength from '../components/PasswordLength/PasswordLength';
import PasswordOptions from '../components/PasswordOptions/PasswordOptions';
import Password from '../components/Password/Password';
import LengthSlider from '../components/LengthSlider/LengthSlider';

class PasswordGenerator extends Component {
    render() {
        return (
            <div>
                <PasswordLength />
                <LengthSlider />
                <section class="section password-options-container">
                    <div className="columns">
                        <div className="column is-half">
                            <PasswordOptions />
                        </div>
                        <div className="column">
                            <Password />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default PasswordGenerator;