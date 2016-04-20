import React from 'react';
import ReactDOM from 'react-dom';

//Stateful components
class App extends React.Component {
	constructor() {
		super(); // This will give context to 'this' 
		this.state = {
			red: 0,
			blue: 0,
			green: 0
		};
		//this.update = this.update.bind(this);
	}

	update(e) {
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red).value,
			blue: ReactDOM.findDOMNode(this.refs.blue).value,
			green:ReactDOM.findDOMNode(this.refs.green).value
		})
	}
	render() {
		let txt = this.props.txt;
		return (
			<div>
				
				<Slider 
					ref="red"
					txt = {txt}
					cat = {this.props.cat}
					firstState = {this.state.firstState}
					update = {this.update.bind(this)}/>
					{this.state.red}
				<Slider 
					ref="blue"
					txt = {txt}
					cat = {this.props.cat}
					firstState = {this.state.firstState}
					update = {this.update.bind(this)}/>
					{this.state.blue}
				<Slider 
					ref="green"
					txt = {txt}
					cat = {this.props.cat}
					firstState = {this.state.firstState}
					update = {this.update.bind(this)}/>
					{this.state.green}
				</div>
		);
	}
}

class Slider extends React.Component {
	render() {
		return (
				<input type="range" min="0" max="255" onChange={this.props.update} />
		)
	}
}
// const Widget = (props) => {
// 	return (
// 		<div>
// 			<input type="text" onChange={props.update} />
// 			<h1>Hello world</h1>
// 			<p>{props.txt}</p>
// 			<p>{props.cat}</p>
// 			<p>{props.firstState}</p>
// 		</div>
// 	)
// }

App.propTypes = {
	txt: React.PropTypes.string.isRequired,
	cat: React.PropTypes.number
}

App.defaultProps = {
	txt: "This is the default text"
}



// const App = () => <h1>Hello world</h1> // Stateless components
export default App