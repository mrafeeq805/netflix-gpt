import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeGPTPageToggle } from "../utils/gptSlice";
import { changeLanguage } from "../utils/languageSlice";

const Header = () => {
	const dispatch = useDispatch();
	const supported_languages = SUPPORTED_LANGUAGES
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
	const gpt = useSelector((store) => store.gpt?.gptPageToggle)
	const toggleHandler = () =>{
		dispatch(changeGPTPageToggle(gpt))
	}	
	const handleChangeLang = (lang) =>{
		dispatch(changeLanguage(lang))
		console.log(lang);
	}
	return (
		<div className="w-full absolute flex justify-between bg-gradient-to-b from-black z-50">
			<div className="w-36 md:w-44">
				<img
					className=""
					src={LOGO}
					alt="logo"
				/>
			</div>
			{user && (
				<div className="mr-4 flex justify-center items-center gap-3">
					{ gpt && (
						<select onChange={(e) => handleChangeLang(e.target.value)}>
							{supported_languages.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option> )}
						</select>
					)}
					<button onClick={toggleHandler} className="text-sm text-white bg-blue-500 p-1.5 px-6 rounded-md">
						{gpt ? "Home" : "GPT"}
					</button>
					<div className="h-8">
						<img className="h-full rounded-full" src={user?.photo} alt="logo" />
					</div>
					<button onClick={signoutHandler} className="text-sm font-bold text-white">
						Sign Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
