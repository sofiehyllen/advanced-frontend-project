import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Component, useState } from 'react';

export default class MultipleItems extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 3,
		};

		return (
			<div>
				<h4 className='heading3'>Anbefalinger til dig</h4>
				<Slider {...settings}>
					<div></div>
					<div>
						<h3>2</h3>
					</div>
					<div>
						<h3>3</h3>
					</div>
				</Slider>
			</div>
		);
	}
}
