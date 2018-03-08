import React from 'react';
import SectionTitle from './sectionTitle';

const emaiAndLeaderShip = (props) => {

	return (
		<div>
			<SectionTitle sectionTitle={props.sectionTitle} />
			<div className="email-and-leadership">
			{
				props.emailAndLeadership.map((item) => {
					return (
						<div>
							<h4>{item.header}</h4>
							<p>{item.para}</p>
						</div>
					);
				})
			}
			</div>
		</div>
	);
};

export default emaiAndLeaderShip;