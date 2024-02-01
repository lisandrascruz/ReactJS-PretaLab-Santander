import { render, screen, fireEvent } from "@testing-library/react";
import Contador from "./index";

describe("Contador component", () => {
  it("renders correctly", () => {
    render(<Contador />);
    expect(screen.getByText("Contador")).toBeInTheDocument();
    expect(screen.getByText("+")).toBeInTheDocument();
    expect(screen.getByText("-")).toBeInTheDocument();
  });

  it("increments the counter", () => {
    render(<Contador />);
    fireEvent.click(screen.getByText("+"));
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("decrements the counter", () => {
    render(<Contador />);
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("-"));
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
