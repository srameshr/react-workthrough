import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import Children from './Children';
import Lifecycle from './Lifecycle';
import MyButton from './Higher-order'
import Composable from './Reusable-components'

ReactDom.render(
	<div>
		<App txt = "This is the first prop with values"  cat = {5}/>
		<Children />
		<Lifecycle />
		<MyButton />
		<Composable />
	</div>,
	document.getElementById("app")
);