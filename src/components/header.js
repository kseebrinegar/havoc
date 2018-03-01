import React from 'react';
import { NavLink } from 'react-router-dom';
import uuid from 'uuid';

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.dropMenu = this.dropMenu.bind(this);
		this.changeState = this.changeState.bind(this);
		this.closeDropMenu = this.closeDropMenu.bind(this);

		this.state = {
			toggleClassLetter: 'hamburgerLogo__letter--font-big',
			hamburgerLogoContent: 'H',
			dropMenu: 'drop-menu--closed',
			logoHover: 'hamburger-hover-color--pink',
			logoBackground: 'background-white',
			animatePositionOfLogo: 'hamburgerLogo',
			lastPositionOfPage: 0
		}

	}
	changeState(changeState) {
		
		this.setState((preveState) => {
			return {
				toggleClassLetter: changeState.hamburgerStyleChange !== undefined ? changeState.hamburgerStyleChange : preveState.hamburgerStyleChange,
				hamburgerLogoContent: changeState.hamburgerLogoContent !== undefined ? changeState.hamburgerLogoContent : preveState.hamburgerLogoContent,
				dropMenu: changeState.dropMenu !== undefined ? changeState.dropMenu : preveState.dogMenu,
				logoHover: changeState.logoHover !== undefined ? changeState.logoHover : preveState.logoHover,
				logoBackground: changeState.logoBackground !== undefined ? changeState.logoBackground : preveState.logoBackground,
				animatePositionOfLogo: changeState.animatePositionOfLogo !== undefined ? changeState.animatePositionOfLogo : preveState.animatePositionOfLogo,
				lastPositionOfPage: changeState.lastPositionOfPage !== undefined ? changeState.lastPositionOfPage : preveState.lastPositionOfPage
			};
		});

	}
	closeDropMenu() {

		this.changeState({
			hamburgerLogoContent: 'H',
			hamburgerStyleChange: 'hamburgerLogo__letter--font-big',
			dropMenu: 'drop-menu--closed',
			logoHover: 'hamburger-hover-color--pink',
			logoBackground: 'background-white'
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
	componentDidMount() {

		window.addEventListener('scroll', () => {

			const positionOfPage = window.scrollY;
		
			this.setState((preveState) => {
				return {
					animatePositionOfLogo: preveState.lastPositionOfPage < positionOfPage ? 'hamburgerLogo--animate' : 'hamburgerLogo',
					lastPositionOfPage: positionOfPage
				}
			});
		});

	}
	render() {

		const dropMenuList = [
			{title: 'Hello', desc: 'Today at Havoc.', link: '/'},
			{title: 'Work', desc: 'What we\'ve made.', link: '/work' },
			{title: 'About', desc: 'Who we are.', link: '/about' },
			{title: 'Careers', desc: 'Join the team', link: '/careers' },
			{title: 'Contact', desc: 'Get in touch.', link: '/contact' }
		]

		return (
			<div>
				<div className={this.state.logoHover + ' ' + this.state.logoBackground + ' ' + this.state.animatePositionOfLogo}  
				onClick={this.dropMenu}>
					<p className={this.state.toggleClassLetter}>{this.state.hamburgerLogoContent}</p>
					<div className={"hamburgerLogo__animation-container"}>
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
										<NavLink onClick={this.closeDropMenu} to={item.link} key={uuid()}>
											<h2>{item.title}</h2>
											<p>{item.desc}</p>
											<p></p>
										</NavLink>
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