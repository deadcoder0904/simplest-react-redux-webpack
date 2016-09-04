import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

const action = {
    increment: {
        type: "INCREMENT"
    },
    decrement: {
        type: "DECREMENT"
    }
};

const reducer = (state = {value: 0},action) => {
    switch (action.type){
        case "INCREMENT":
            return {
                value: state.value + 1
            };
        case "DECREMENT":
            return {
                value: state.value - 1
            };
        default:
            return state;
    }
};

const store = createStore(reducer,window.devToolsExtension && window.devToolsExtension());

const mapStateToProps = (state) => {
    return {
        value: state.value
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(action.increment),
        onDecrement: () => dispatch(action.decrement)
    }
};

class IncrementOrDecrement extends Component{
    render() {
        const { value, onIncrement, onDecrement } = this.props;
        return (
            <div className="container">
                <div className="well">
                    <h3 className="text-success text-center">
                        Simplest Redux Example Using Webpack with React-Bootstrap
                    </h3>
                </div>
                <br/>
                <div className="text-center">
                    <Button bsStyle="success" className="text-capitalize" onClick={onIncrement}>
                        Increment
                    </Button>
                </div>

                <h1 className="text-center"> {value} </h1>

                <br/>
                <div className="text-center">
                    <Button bsStyle="danger" className="text-capitalize text-center" onClick={onDecrement}>
                        Decrement
                    </Button>
                </div>
            </div>
        )
    }
}

const App = connect(mapStateToProps,mapDispatchToProps)(IncrementOrDecrement);

render(<Provider store={store}>
        <App />
    </Provider>, document.getElementById('main')
);

