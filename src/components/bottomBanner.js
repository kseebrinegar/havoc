import React from 'react';

class BottomBanner extends React.Component {
	constructor(props) {
		super(props)

		this.randomNumberGenerator = this.randomNumberGenerator.bind(this);
		this.state = {
			randomNumberGenerated: '2393230'
		}
	}
	randomNumberGenerator() {

		setInterval(() => {

			let randomNum = Math.floor(Math.random() * 1000000 + 1);
			let randNumString = randomNum.toString();
	
			this.setState(() => {
				return {
					randomNumberGenerated: randNumString.length === 5 ? randNumString + '1' : randNumString
				}
			});

		}, 200)
	}
	componentDidMount() {

		this.randomNumberGenerator();
	}
	render() {
		return (
			<section className="bottom-page-banner" style={{backgroundImage: this.props.bottomBannerInfo.backgroundImg}}>
		        <div className="bottom-page-banner__havoc-box">
		        	<h3>HAVOC<span>.</span></h3>
		        	<div className="bottom-page-banner__havoc-box__animate-number-box">
		        		<h4>HAVOC</h4>
		        		<p></p>
		        		<p>#{this.state.randomNumberGenerated}</p>
		        	</div>
		        </div>
		        <div className="bottom-page-banner__content" >
		        	<h3>{this.props.bottomBannerInfo.header}</h3>
		        	<p>{this.props.bottomBannerInfo.paraGraph}</p>
		        </div>
		    </section>
		);
	}
};

export default BottomBanner;