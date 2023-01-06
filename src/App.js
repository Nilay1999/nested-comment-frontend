// import './App.css';
import { Routes, Route } from 'react-router-dom';
import { CommentList } from './components/comments/CommentList';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
	return (
		<div className="App">
			<h1>
				<CommentList />
			</h1>
		</div>
	);
}

export default App;
