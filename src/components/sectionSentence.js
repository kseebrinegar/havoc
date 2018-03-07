import React from 'react';
import SectionTitle from './sectionTitle';

const SectionSentence = (props) => {

	return (
		<section className="section-sentences">
            <SectionTitle sectionTitle={props.sectionInfo.sectionTitle} />
            <div className="section-sentences__content">
               <h2>{props.sectionInfo.sectionHeader}</h2>
               <p>{props.sectionInfo.sectionSentence}</p>
            </div>
        </section>
	);
};

export default SectionSentence;