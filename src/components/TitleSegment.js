// Imports
import React from "react";
import { Typography, Select } from "antd";
const { Title } = Typography;
const { Option } = Select;

//Title segment container
export default function TitleSegment({ svgTitle, svgNameList, changeCurrentSVG })
{
	//Return title segment
	return(
		<>
			<Title>Decentralized Database for SVG images</Title>

			<Title level={2}>Current display: <b>{svgTitle}</b></Title>

			<Select defaultValue={svgNameList[0]}
					style={{ width: 360 }}
					onChange={changeCurrentSVG} >
				{svgNameList.map((svgName) => 
				{
					return <Option value={svgName}>{svgName}</Option>;
				})}
			</Select>
		</>
	);
}