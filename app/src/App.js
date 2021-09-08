import './App.css';
import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavouritesPage from './pages/Favourites';
import Layout from './components/layout/Layout';

function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact>
					<AllMeetupsPage />
				</Route>
				<Route path="/new-meetup/" exact>
					<NewMeetupPage />
				</Route>
				<Route path="/favourites/" exact>
					<FavouritesPage />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
