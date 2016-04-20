import React from 'react';
import ReactDOM from 'react-dom';

class NumInput extends React.Component {
	constructor() {
		super();
		this.state = {
			red: 0
		}
		this.update = this.update.bind(this);
	}

	update(e) {
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red).value
		})
	}
	render(){
		let label = this.props.label !== '' ? <label>{this.props.label} - {this.props.val}</label> : '';
		return (
			<div>
			<input
				type={this.props.type}
				min={this.props.min}
				max={this.props.max}
				step={this.props.step}
				defaultVal={this.props.val}
				onChange={this.props.update} />
			{label}
			</div>
		);
	}
	
}

NumInput.proptypes = {
	min: React.PropTypes.number,
	max: React.PropTypes.number,
	step: React.PropTypes.number,
	val: React.PropTypes.number,
	label: React.PropTypes.string,
	update: React.PropTypes.func.isRequired,
	type: React.PropTypes.oneOf(['range', 'number'])
};

NumInput.defaultProps = {
	min: 0,
	max: 1,
	step: 1,
	val: 0,
	label: 'A lable',
	type: 'number'
};

class Composable extends React.Component {
	render() {
		return (
			<NumInput
			ref="red">
			</NumInput>
		)
	}
}

export default Composable;