import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Header, Sidebar } from './components';
import Home from './pages/Home/Home';
import './app.scss';
import { useEffect, useState } from 'react';

import { 
	Switch,
	Route, Redirect
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './pages/Login/Login';

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
	const {accessToken,loading} = useSelector(state => state.auth);
	const history = useHistory();


	useEffect(() => {
		if(!loading && !accessToken){
			history.push('/auth');

		}
	},[accessToken,loading,history]);


	return (

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
		
	);
}

export default App;
