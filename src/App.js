import { Container } from 'react-bootstrap';

import { Header, Sidebar } from './components';
import Home from './pages/Home/Home';
import './app.scss';
import { useState } from 'react';
import Login from './pages/Login/Login';
import { 
	BrowserRouter as Router,
	Switch,
	Route, Redirect
} from 'react-router-dom';

function  Layout({children}) {
	const [sidebar,setToggleSidebar] = useState(false);

	const handlebars = () => setToggleSidebar(value =>  !value);
	return (
		<>
			<Header toggleSidebar={handlebars}/>
			<div className="app__container">
				<Sidebar sidebar={sidebar} toggleSidebar={handlebars}/>
				<Container fluid className="app__main">
					{children}
				</Container>
			</div>

		</>
	);
}

function App() {
	return (
		<Router >
			<Switch >

					<Route path="/" exact>
						<Layout >
							<Home />
						</Layout>
					</Route>
					<Route path="/auth">
					
							<Login />
					</Route>
					<Route path="/search">
						<Layout >
							<h3>search</h3>
						</Layout>
					</Route>
					<Route path="/">
						<Redirect to="/" />
					</Route>
				
			</Switch>
		</Router>
		
	);
}

export default App;
