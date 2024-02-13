import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);
	const signoutHandler = () => {
		signOut(auth)
			.then(() => {
				navigate("/login");
			})
			.catch((err) => {
				navigate("/browse");
			});
	};
	return (
		<div className="w-full flex justify-between">
			<div className="w-36 md:w-44">
				<img
					className="bg-gradient-to-b from-black"
					src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
					alt="logo"
				/>
			</div>
			{user && (
				<div className="mr-4 flex justify-center items-center gap-3">
					<div className="h-10">
						<img className="h-full rounded-full" src={user?.photo} alt="logo" />
					</div>
					<button onClick={signoutHandler} className="text-xl font-bold">
						Sign Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
