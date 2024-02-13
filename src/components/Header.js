import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, photoURL } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						name: displayName,
						photo: photoURL,
					})
				);
        navigate('/browse')
			} else {
				dispatch(removeUser());
        navigate('/login')
			}
		});
    return () => unsubscribe()
	}, []);
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);
	const signoutHandler = () => {
		signOut(auth)
			.then(() => {

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
					src={LOGO}
					alt="logo"
				/>
			</div>
			{user && (
				<div className="mr-4 flex justify-center items-center gap-3">
					<div className="h-8">
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
