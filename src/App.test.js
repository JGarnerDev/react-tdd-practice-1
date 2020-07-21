import React from "react";

import App from "./App";
import { shallow } from "enzyme";
import PersonList from "./PersonList";

describe("App", () => {
	let appWrapper;
	beforeAll(() => {
		appWrapper = shallow(<App />);
	});

	it("renders PersonList rfc once without crashing", () => {
		const personlist = appWrapper.find(PersonList);

		expect(personlist).toHaveLength(1);
	});

	it("has state", () => {
		const appState = appWrapper.state();

		expect(appState).not.toBeNull();
	});

	it("has people property in state", () => {
		const appState = appWrapper.state();

		expect(appState.people).toBeDefined();
	});

	it("passes people state property as props to personList component", () => {
		const personList = appWrapper.find(PersonList);
		expect(personList.props().people).toEqual(appWrapper.state().people);
	});
});
