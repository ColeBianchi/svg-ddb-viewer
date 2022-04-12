// Imports
import React, { useState } from "react";
import { Divider } from "antd";
import GUN from "gun";
// Components
import TitleSegment from "./components/TitleSegment";
import Viewer from "./components/Viewer";
import SVGUploadForm from "./components/SVGUploadForm";

export default function App()
{
	//Return JSX componenets
	return (
		<div style={{ textAlign: "center" }}>
			<TitleSegment />
			<Divider />
			<Viewer />
			<SVGUploadForm />
		</div>
	)
}