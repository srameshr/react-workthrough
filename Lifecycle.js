import React from 'react';
import ReactDOM from 'react-dom';

class Wrapper extends React.Component {
	constructor() {
		super();
		this.state = {
			val: 0
		};
	}
	update() {
		this.setState({
			val: this.state.val + 1
		});
	}
	componentDidMount() {
		console.log("Mounted");
	}
	componentWillMount() {
		console.log("Mounting");
		// Access to state object before the ele is on DOM!
	}
	render() {
		console.log("Rendering")
		return (
			<button onClick={this.update.bind(this)}> {this.state.val} </button>
		);
	}
	componentWillUnmount() {
		console.log("Bye!~");
		// Clear any intervals you might have here
	}
}


class Lifecycle extends React.Component {
	constructor() {
		super();
	}
	mount() {
		ReactDOM.render(<Wrapper />, document.getElementById('mount-place'));
	}
	unmount() {
		ReactDOM.unmountComponentAtNode(document.getElementById('mount-place'))
	}
	render() {
		return (
			<div>
				<button onClick={this.mount.bind(this)} > Mount Counter </button>
				<button onClick={this.unmount.bind(this)} > Umount Counter </button>
				<div id="mount-place"></div>
			</div>
		)
	}
		
}


export default Lifecycle