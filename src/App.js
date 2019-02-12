import React from 'react';
import './App.css';
const luhn = require("luhn");

const $$ = document.querySelector.bind(document);

// pure reducer function
function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return ++state;
        case 'DECREMENT':
            return --state;
    }
    return state;
}



function render() {
    $$('#result').textContent = store.getState();
}

const store = Redux.createStore(counter, undefined, window.devToolsExtension && window.devToolsExtension());
store.subscribe(render);
render();

$$('#increment').addEventListener('click', () => {
    store.dispatch({
        type: 'INCREMENT'
    });
});

$$('#decrement').addEventListener('click', () => {
    store.dispatch({
        type: 'DECREMENT'
    });
});

class App extends React.Component {
constructor(props) {
super(props);

this.state = { 
	actualInputValue: null,
	valueToOutput: null,
	informationCardNumberLenght: null
	};
}

	
render() {
return (
<div>
	<div>
	<div>Counter: <span id="result"></span></div>
    <button id="increment">Increment</button>
    <button id="decrement">Decrement</button>
	</div>
</div>
);
}
}

export default App;
