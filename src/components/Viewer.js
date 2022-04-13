// Imports
import React from "react";

//Viewer segment container
export default function Viewer({ svgData })
{
	//Return JSX for svg display
	return(
		<>
			<img 	src={`data:image/svg+xml;utf8,${encodeURIComponent(svgData)}`}
					alt="Error loading SVG"
					style={{ maxWidth: 420 }} />
		</>
	)
}