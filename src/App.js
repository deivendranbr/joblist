import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			state: 'NY'
		}
	}

	sortObjectArrayByKey = (array, key) => {
		return array.sort(function(a, b){
			let valueA = a[key], valueB = b[key];

			if(valueA < valueB) {
				return -1;
			}
			if(valueA > valueB) {
				return 1;
			}

			return 0;
		});
	}

	getJobList = () => {
		let inputs = this.props.string.split('--JSON FORMAT BELOW--');
		let jobList = inputs[0].trim().match(/[^\r\n]+/g);
		let jsonString = inputs[1].trim().replace(new RegExp('}\n', 'g'), '},');
		let jobListJson = JSON.parse('['+ jsonString +']');

		jobList = jobList.map(sentence => {
			let jobDetailsString = sentence.trim()
			let jobDetails = jobDetailsString.split(',')
			return {
				title: jobDetails[1].trim(),
				org: jobDetails[0].trim(),
				city: jobDetails[2].trim(),
				state: jobDetails[3].trim()
			}
		});

		jobListJson.forEach((jobDetail) => {
			// let jobDetail = JSON.parse(sentence);
			jobList.push({
				title: jobDetail.name,
				org: jobDetail.organization,
				city: jobDetail.location.city,
				state: jobDetail.location.state
			})
		});

			
		return this.sortObjectArrayByKey(jobList, 'title');
	}

	onStateChange = (e) => {
		this.setState({
			state: e.target.value
		})
	}

	render() {
		let jobList = this.getJobList();
			
		return (
			<div>
				<input type="text" value={this.state.state} onChange={this.onStateChange} />
				<div>All Opportunities:</div>
				<ul className="opportunities_list">
					{jobList.map((jobDetail, index) => {
						return <li key={index.toString()}>
							<span className="highlight">Title: </span> {jobDetail.title},
							<span className="highlight"> Organization: </span> {jobDetail.org},
							<span className="highlight"> Location: </span> {jobDetail.city}, {jobDetail.state}
						</li>
					})}
				</ul>
				<div>{this.state.state} Opportunities</div>
				<ul className="opportunities_list">
					{jobList.map((jobDetail, index) => {
						if (jobDetail.state === this.state.state) {
							return <li key={index.toString()}>
								<span className="highlight">Title: </span> {jobDetail.title},
								<span className="highlight"> Organization: </span> {jobDetail.org},
								<span className="highlight"> Location: </span> {jobDetail.city}, {jobDetail.state}
							</li> 
						}
					})}
				</ul>
			</div>
		)
	}
}

export default App;
