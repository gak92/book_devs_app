import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AddDeveloper from "../components/devs/addDeveloper";
import store from "../store/configStore";
import userEvent from "@testing-library/user-event";

describe("Test Register page", () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <AddDeveloper />
      </BrowserRouter>
    </Provider>
  );
  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });

  it("Add Developer page has button Add Developer", () => {
    expect(tree.findByText("Add Developer")).toBeTruthy();
  });

  test("Add Developer page has name input ", () => {
    render(<AddDeveloper />);
    userEvent.type(screen.getByRole("textbox", { name: /title/i }));
  });

  it("Add Developer page has description input ", () => {
    render(<AddDeveloper />);
    userEvent.type(screen.getByRole("textbox", { name: /description/i }));
  });

  it("Add Developer page has salary input ", () => {
    render(<AddDeveloper />);
    userEvent.type(screen.getByRole("spinbutton", { name: /salary/i }));
  });

  it("Add Developer page has rating input ", () => {
    render(<AddDeveloper />);
    userEvent.type(screen.getByRole("spinbutton", { name: /rating/i }));
  });
});
