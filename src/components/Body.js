import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,name:displayName,photo : photoURL}))
      } else {
        dispatch(removeUser())
      }
    });
  })
	const router = createBrowserRouter([
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/",
			element: <Browse />,
		},
    {
			path: "/browse",
			element: <Browse />,
		},
	]);
	return (
		<div>
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
};

export default Body;
