import React from "react";
import { shallow } from "enzyme";
import PersonList from "./PersonList";

describe("Person List", () => {
	it("renders an unordered list", () => {
		const personListWrapper = shallow(<PersonList />);
		const peopleListUls = personListWrapper.find("ul");

		expect(peopleListUls).toHaveLength(1);
	});

	it("renders no list items when there are no people in props", () => {
		const personListWrapper = shallow(<PersonList people={[]} />);
		const peopleListItems = personListWrapper.find("li");

		expect(peopleListItems).toHaveLength(0);
	});

	it("renders one list item when there is one person", () => {
		const people = [{ firstName: "Alan", lastName: "Turing" }];
		const personListWrapper = shallow(<PersonList people={people} />);
		const peopleListItems = personListWrapper.find("li");

		expect(peopleListItems).toHaveLength(1);
	});

	it("renders multiple list items when there are more than one person", () => {
		const people = [
			{ firstName: "Alan", lastName: "Turing" },
			{ firstName: "Chevy", lastName: "Chase" },
		];
		const personListWrapper = shallow(<PersonList people={people} />);
		const peopleListItems = personListWrapper.find("li");

		expect(peopleListItems).toHaveLength(2);
	});

	it("renders first and last name of person", () => {
		const people = [{ firstName: "Alan", lastName: "Turing" }];
		const personListWrapper = shallow(<PersonList people={people} />);

		expect(personListWrapper.find("li").text()).toContain(people[0].firstName);
		expect(personListWrapper.find("li").text()).toContain(people[0].lastName);
	});
});
