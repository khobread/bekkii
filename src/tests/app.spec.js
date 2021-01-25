//
import App from '../App';
import {render, screen} from "@testing-library/react"

describe("App", () => {
    it("has a header that says Bekkii", () => {
        render(<App />);
        expect(screen.getByRole('link', {name: "BEKKII", href: /#home/i})).toBeInTheDocument();
    });
    it("has a Search button", () => {
        render(<App />);
        expect(screen.getByRole('button', {name: "Search"})).toBeInTheDocument();
    });
    // it("has a header that says Bekkii", () => {
    //     render(<App />);
    //     expect(screen.getByRole('link', {name: "BEKKII", href: /#home/i})).toBeInTheDocument();
    // });
    // it("has a header that says Bekkii", () => {
    //     render(<App />);
    //     expect(screen.getByRole('link', {name: "BEKKII", href: /#home/i})).toBeInTheDocument();
    // });
    
}); //arrow functions > functions for callback (ES2015; best practice)

//red/green = just make the test pass; ignore best practice
//refactoring: go back and organize code according to best practice

//be as specific as you can when testing.