import React from 'react';
const classes = require('../../../data/classes.json');
console.log(classes);

const CheckboxCard = props => (
	<div>
		{props.list.map((l, i) => 
			<div key={i}>
				<input id={l} type="checkbox"/>
				<label for={l}>{l}</label>
			</div>
		)}
	</div>
)

const LevelTable = props => {
	const tableHeads = Object.keys(props);
	console.log(props[tableHeads[0]]);
	console.log(props);
	return (
		<div>
			<table className="levelTable">
				<tbody>
				<tr>
					{tableHeads.map((t, i) => 
						<th key={i}>{t}</th>
					)}
				</tr>
				{
					props[tableHeads[0]].map((e, i) => 
						<tr key={i}>
							{tableHeads.map((t, x) => 
								<td key={x}>
									{props[t][i]}
								</td>
							)}
						</tr>
					)
				}
				</tbody>
			</table>
		</div>
		)
}

const ClassCardPreview = props => (
	<div className="classCard" data-class={props.name} onClick={props.handleChangeActiveClass}>
		<h2 data-class={props.name}>{props.name}</h2>
		<img
		data-class={props.name}
		src={`./media/${props.name}.svg`}
		className="classCard__icon"
		alt="Class Icon"
		/>
	</div>
 )


class ChooseClass extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			activeClass: "Barbarian"
		}
		this.classList = Object.keys(classes);
	};
	handleChangeActiveClass = (e) => {
		const newClass = e.target.dataset.class;
		if (newClass) this.setState({activeClass: newClass});
	}
	render() {
		return (
		<div>
			<h1>Choose Class</h1>
			<div className="classes">
				<div className="classes__col">
					<button onClick={this.props.handleBack}>Back</button>
				</div>
				<div className="classes__col">
				{this.classList.map((n, i) => 
					<ClassCardPreview {...classes[n]} 
					handleChangeActiveClass={this.handleChangeActiveClass} 
					key={i}/>
				)}
				</div>
				<div className="classes__col">
					<LevelTable {...classes[this.state.activeClass]["Level Table"]}/>
				</div>
				<div className="classes__col">
					
				</div>
			</div>
		</div>
		)
	}
} 
export default ChooseClass;