import React from 'react';

let Mixin = InnerComponent => class extends React.Component {
	constructor() {
		super();
		this.update = this.update.bind(this);
		this.state = {
			val: 0
		};
	}

	update() {
		this.setState({
			val: this.state.val + 1
		});
	}

	render() {
		return <InnerComponent
			update = {this.update}
			{...this.props}
			{...this.state}
		/>
	}
	componentDidMount() {
		console.log("Mounted");
	}
	componentWillMount() {
		console.log("Mounting");
		// Access to state object before the ele is on DOM!
	}
}

let Button = (props) => <button onClick={props.update}>
							{props.txt} - {props.val}
						</button>

let Lable = (props) => <lable onMouseOver={props.update}>
							{props.txt} - {props.val}
						</lable>


let ButtonMixed = Mixin(Button);
let LableMixed = Mixin(Lable);

class MyButton extends React.Component {
	render() {
		return (
			<div>
				<ButtonMixed txt="This is my mixin button">
				</ButtonMixed>
				<LableMixed txt="This is my label">
				</LableMixed>
			</div>
		)
	}
}

export default MyButton;



