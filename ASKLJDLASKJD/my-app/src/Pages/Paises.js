import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../Redux/Actions/CityActions';
import { getItemsItinerary } from '../Redux/Actions/ItineraryActions';
import PropTypes from 'prop-types';

class Cities extends Component {
	static propTypes = {
		getItemsItinerary: PropTypes.func.isRequired,
		getItems: PropTypes.func.isRequired,
		cities: PropTypes.object.isRequired,
		itinerary: PropTypes.object.isRequired
	};

	componentDidMount() {
		this.props.getItems();
		this.props.getItemsItinerary();
	}

	render() {
		const { cities } = this.props.cities;
		const { itinerary } = this.props.itinerary;
		console.log(itinerary);
		console.log(cities);
		return (
			<ul>
				{cities.map(ciudad => {
					return (
						<li key={ciudad._id}>
							{ciudad.ciudad} - {ciudad.pais}
						</li>
					);
				})}
			</ul>
		);
	}
}

const mapSateToProps = state => ({
	cities: state.item,
	itinerary: state.item
});

export default connect(mapSateToProps, { getItems, getItemsItinerary })(Cities);
