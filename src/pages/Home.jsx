import React from "react";

const Home = () => {
	return (
		<div className="home-div mx-auto max-w-4xl px-4 text-center">
			<p className="text-4xl">Hello!</p>
			<p className="text-xl">
				In this webpage you can check out some of the projects I've
				done.
			</p>
			<p className="">
				Click on the "Projects" tab to view them! Some aren't available
				online so my apologies for that.
			</p>
			<p>
				This is a quick and small personal project for me, and is mostly
				a way to show off some of my experience and skills.
			</p>
			<p className="text-sm">
				Now hosted and updated automatically in Docker + AWS/EC2!
			</p>
		</div>
	);
};

export default Home;
