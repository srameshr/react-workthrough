import React from 'react';
import ReactDOM from 'react-dom';

class Children extends React.Component {
	render() {
		return (
			<Button> <Heart /> React </Button>
		)
	}
}

class Button extends React.Component {
	render() {
		return (
			<button>{this.props.children}</button>
		)
	}
}

const Heart = () => <span>I heart you </span>

export default Children;