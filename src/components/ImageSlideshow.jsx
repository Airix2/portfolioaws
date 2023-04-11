import React, { useEffect, useRef, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Bars from "react-loading-icons/dist/esm/components/bars";
import { useGlobalContext } from "../utils/useContext/context";

const ImageSlideshow = () => {
	const { state, dispatch } = useGlobalContext();
	const [height, setHeight] = useState(450);
	const divRef = useRef(null);

	const handleResize = () => {
		let elem = divRef.current;
		let currentImg = elem.querySelector(".show");
		console.log(currentImg.height);
		setHeight(currentImg.height);
	};

	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize, false);
		return () => window.removeEventListener("resize", handleResize);
	}, [handleResize]);

	const onLoad = (index) => {
		if (index === 0) dispatch({ type: "UPDATE_LOADING", payload: false });
	};
	const prevImg = () => {
		dispatch({ type: "CHANGE_IMAGE", payload: "prev" });
	};
	const nextImg = () => {
		dispatch({ type: "CHANGE_IMAGE", payload: "next" });
	};
	const openImg = (src) => {
		dispatch({ type: "UPDATE_MODAL", payload: src });
	};

	return (
		<div className="image-div" ref={divRef} style={{ height: height }}>
			<button onClick={prevImg} className="img-btn back-btn text-2xl">
				<AiOutlineArrowLeft />
			</button>
			<button onClick={nextImg} className="img-btn next-btn text-2xl">
				<AiOutlineArrowRight />
			</button>

			{state.isLoading && (
				<div className="loading-div">
					<Bars
						className="loading-icon"
						stroke="#227c70"
						fill="#88a47c"
					/>
				</div>
			)}
			{[...Array(state.project.imgAmount).keys()].map((imageIndex) => {
				let src = `./assets/${state.project.path}/image${
					imageIndex + 1
				}.png`;
				return (
					<img
						key={imageIndex}
						className={`${
							state.selectedImg === imageIndex ? "show" : ""
						}`}
						src={src}
						alt="Project image"
						loading="lazy"
						onLoad={() => onLoad(imageIndex)}
						onClick={() => openImg(src)}
					/>
				);
			})}
		</div>
	);
};

export default ImageSlideshow;
