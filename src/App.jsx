import Card from "./components/card/Card";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => {
	return <>
	
	<GlobalStyles />
			<h1>Curso de React</h1>
			<Card title='Titulo 1' color='red'></Card>
			<Card title='Titulo 2' color='green'></Card>
			<Card title='Titulo 3' color='blue'></Card>
		</>
};

export default App;
