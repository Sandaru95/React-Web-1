import './App.css';
import Todo from './components/Todo';
import Modal from './components/modal';
import Backdrop from './components/backdrop';

function App() {
	return (
		<div>
			<h1>My Todos</h1>
			<Todo text="Learn React" />
			<Todo text="Master React" />
			<Todo text="Make Projects with React" />
			<Todo text="Teach React" />
		</div>
	);
}

export default App;
