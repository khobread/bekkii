//
import App from '../App';
import {render, screen} from "@testing-library/react"

describe("App", () => {
    it("has a header that says Bekkii", () => {
        render(<App />);
        expect(screen.getByText("Bekkii")).toBeInTheDocument();
    });
    
}); //arrow functions > functions for callback (ES2015; best practice)

//red/green = just make the test pass; ignore best practice
//refactoring: go back and organize code according to best practice

