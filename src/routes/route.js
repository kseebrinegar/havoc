import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/home/home.js';
import Careers from '../components/careers/careers';
import Contact from '../components/contact/contact';
import Work from '../components/work/work';
import About from '../components/about/about';
import Header from '../components/header';
import Footer from '../components/footer';

class AppRouter extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Header />
					<Switch>
						<Route path="/" component={Home} exact={true} />
						<Route path="/careers" component={Careers} />
						<Route path="/about" component={About} />
						<Route path="/work" component={Work} />
						<Route path="/contact" component={Contact} />
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
};

export default AppRouter;