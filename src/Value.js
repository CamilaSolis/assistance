import React from 'react';
import Alumn from './Alumn';

class Value extends React.Component {
 render() {
 	return(
 		<div>{JSON.stringify(Alumn)}</div>
 		)
 }
}
export default Value;
