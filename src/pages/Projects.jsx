import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import ImageSlideshow from "../components/ImageSlideshow";
import { useGlobalContext } from "../utils/useContext/context";

const Projects = () => {
	const { state, dispatch } = useGlobalContext();

	const prevProject = () => {
		dispatch({ type: "CHANGE_PROJECT", payload: "prev" });
	};
	const nextProject = () => {
		dispatch({ type: "CHANGE_PROJECT", payload: "next" });
	};
	return (
		<>
			<div className="project-title">
				<button onClick={prevProject} className="project-btn back-btn">
					<AiOutlineArrowLeft />
				</button>
				<h3 className="text-3xl">{state.project.title}</h3>
				<button onClick={nextProject} className="project-btn next-btn">
					<AiOutlineArrowRight />
				</button>
			</div>

			<div className="cols-2">
				<div className="section-info">
					<h4 className="section-title text-2xl mb-4">
						{state.project.title}
					</h4>
					<p className="description text-lg mb-4">
						{state.project.description}
					</p>
					<div className="tags my-4">
						{state.project.tags.map((tag) => (
							<label className="tag-label">{tag}</label>
						))}
					</div>
				</div>
				<div className="section-image ">
					<ImageSlideshow project={state.project.path} />
				</div>
			</div>
		</>
	);
};

export default Projects;
