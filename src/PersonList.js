import React from "react";

export default function PersonList({ people = [] }) {
	return (
		<ul>
			{people.map((person, i) => {
				return (
					<li key={i}>
						{person.firstName}
						{person.lastName}
					</li>
				);
			})}
		</ul>
	);
}
