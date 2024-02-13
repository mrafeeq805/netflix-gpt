import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";


const Body = () => {


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
