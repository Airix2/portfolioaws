import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Modal from "react-modal";
import { customStyles } from "./utils/modalStyle";
import { useGlobalContext } from "./utils/useContext/context";
import ModalCard from "./components/ModalCard";

Modal.setAppElement("#root");

function App() {
	const { state, dispatch } = useGlobalContext();
	const closeModal = () => {
		console.log("hapenin");
		dispatch({
			type: "UPDATE_MODAL_VISIBILITY",
			payload: false,
		});
	};
	return (
		<HashRouter>
			<div className="App">
				<Navbar />
				<main className="main">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="projects" element={<Projects />} />
						<Route path="contact-me" element={<AboutMe />} />
						<Route path="*" element={<Error />} />
					</Routes>
				</main>
				<Modal
					isOpen={state.modalVisible}
					onRequestClose={closeModal}
					style={customStyles}
					contentLabel="Project Images Modal"
				>
					<ModalCard info={state.modal} closeModal={closeModal} />
				</Modal>
			</div>
		</HashRouter>
	);
}

export default App;
