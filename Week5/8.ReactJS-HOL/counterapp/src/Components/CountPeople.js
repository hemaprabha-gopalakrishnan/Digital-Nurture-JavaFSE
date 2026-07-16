import React, { Component } from "react";

class CountPeople extends Component {
    constructor() {
        super();
        this.state = {
            entrycount: 0,
            exitcount: 0,
        };
    }

    UpdateEntry = () => {
        this.setState((prev) => ({ entrycount: prev.entrycount + 1 }));
    };

    UpdateExit = () => {
        this.setState((prev) => ({ exitcount: prev.exitcount + 1 }));
    };

    render() {
        return (
            <div>
                <h2>Mall Entry Counter</h2>

                <div className="counter-wrapper">
                    <div className="counter left">
                        <button className="small-btn" onClick={this.UpdateEntry}>
                            Login
                        </button>
                        <span className="label">{this.state.entrycount} People Entered!!!</span>
                    </div>

                    <div className="counter right">
                        <span className="label">{this.state.exitcount} People Left!!!</span>
                        <button className="small-btn" onClick={this.UpdateExit}>
                            Exit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CountPeople;
