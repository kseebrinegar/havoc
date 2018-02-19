import React from 'react';
import uuid from 'uuid';

class Header extends React.Component {
	constructor() {
		super();

		this.dropMenu = this.dropMenu.bind(this);
		this.changeState = this.changeState.bind(this);
		this.state = {
			toggleClassLetter: 'hamburgerLogo__letter--font-big',
			hamburgerLogoContent: 'H',
			dropMenu: 'drop-menu--closed',
			logoHover: 'hamburger-hover-color--pink',
			logoBackground: 'background-white'
		}

	}
	changeState(changeState) {
		
		this.setState((preveState) => {
			return {
				toggleClassLetter: changeState.hamburgerStyleChange !== undefined ? changeState.hamburgerStyleChange : preveState.hamburgerStyleChange,
				hamburgerLogoContent: changeState.hamburgerLogoContent !== undefined ? changeState.hamburgerLogoContent : preveState.hamburgerLogoContent,
				dropMenu: changeState.dropMenu !== undefined ? changeState.dropMenu : preveState.dogMenu,
				logoHover: changeState.logoHover !== undefined ? changeState.logoHover : preveState.logoHover,
				logoBackground: changeState.logoBackground !== undefined ? changeState.logoBackground : preveState.logoBackground
			};
		});

	}
	dropMenu() {

		if (this.state.hamburgerLogoContent === 'H') {

			this.changeState({
				hamburgerLogoContent: 'HAVOC',
				hamburgerStyleChange: 'hamburgerLogo__letter--font-small',
				dropMenu: 'drop-menu--open',
				logoHover: 'hamburger-hover-color--page-background',
				logoBackground: 'background-grey'
			});

		} else {

			this.changeState({
				hamburgerLogoContent: 'H',
				hamburgerStyleChange: 'hamburgerLogo__letter--font-big',
				dropMenu: 'drop-menu--closed',
				logoHover: 'hamburger-hover-color--pink',
				logoBackground: 'background-white'
			});

		}
	}
	render() {
		const dropMenuList = [
			{title: 'Hello', desc: 'Today at Havoc.'},
			{title: 'Work', desc: 'What we\'ve made.'},
			{title: 'About', desc: 'Who we are.'},
			{title: 'Careers', desc: 'Join the team'},
			{title: 'Contact', desc: 'Get in touch.'}
		]

		return (
			<div>
				<div className={this.state.logoHover + ' ' + this.state.logoBackground + " hamburgerLogo"}  
				onClick={this.dropMenu}>
					<p className={this.state.toggleClassLetter}>{this.state.hamburgerLogoContent}</p>
					<div className="hamburgerLogo__animation-container">
						<div className="hamburgerLogo__animation-container_box">
							<p className="hamburgerLogo__animation-container_box--big"></p>
							<p className="hamburgerLogo__animation-container_box--small"></p>
							<p className="hamburgerLogo__animation-container_box--big"></p>
							<p className="hamburgerLogo__animation-container_box--small"></p>
						</div>
					</div>
				</div>
				<header>
					<nav className={this.state.dropMenu}>
						<div className="drop-menu__list">
						{
							dropMenuList.map((item) => {
								return (
										<li key={uuid()}>
											<h2>{item.title}</h2>
											<p>{item.desc}</p>
											<p></p>
										</li>
								);
							})
						}
						</div>
					</nav>
				</header>
			</div>
		);
	}
};

export default Header;