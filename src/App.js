import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import{BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Form from './components/SignUp/Form';
import Login from './components/pages/Login';
import Choices from './components/Choices/Choices';
import Map from './components/Map/Map';




		function App(){
			return(
				<>
				<Router>
			    		<Navbar />
				      <Switch>
						  
                        <Route path='/' exact component={Home} />
						<Route path='/Services' exact component={Services} />
						<Route path='/pricing' exact component={Choices} />
						<Route path='/SignUp' exact component={Form} />
						<Route path='/SignIn' exact component={Login} />
						<Route path='/map' exact component={Map} />
						
						
						
						

						
						
				       </Switch>

				</Router>
					

				</>
			);
		}
		export default App;