import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from "../utils/useContext/context";
import ImageSlideshow from "./ImageSlideshow";

function ModalCard({ info, closeModal }) {
	const { state } = useGlobalContext();
	return (
		<div className="modal-div">
			<div className="modal-head text-center mb-3">
				<h3 className="text-3xl">{state.project.title}</h3>
				<AiOutlineClose onClick={closeModal} />
			</div>
			<div className="section-image">
				<ImageSlideshow project={state.project.path} />
			</div>
		</div>
	);
}

export default ModalCard;
