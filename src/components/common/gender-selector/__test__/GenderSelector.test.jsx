import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import GenderSelector from "../GenderSelector";

describe('GenderSelector', () => {
    const testCallback = (e) => {};

    it('Should have rendered', () => {
        render(<GenderSelector onChange={testCallback} selected="male" />);
        const genderOptions = screen.getAllByText(/male/i);

        expect(genderOptions.some((option) => option.textContent === "male")).toBe(true);
    });
});