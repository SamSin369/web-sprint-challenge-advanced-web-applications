import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchBubbles as mockFetchBubbles } from "../api/fetchBubbles";
jest.mock("../api/fetchBubbles");
test("Renders BubblePage without errors", () => {
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  render(<BubblePage />);
  const purple = "purple";
  mockFetchBubbles.mockResolvedValueOnce({
    data: [
      {
        color: purple,
        code: { hex: "#f0f800" },
        id: 1,
      },
      {
        color: purple,
        code: { hex: "#f0f810" },
        id: 2,
      },
      {
        color: purple,
        code: { hex: "#f0f820" },
        id: 3,
      },
    ],
  });

  const bubbles = await screen.findAllByText("colors");

  expect(bubbles).toHaveLength(1);
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
