import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "../Footer";

describe('Footer', () => {
    it('Should have rendered', () => {
        render(<Footer />);
        expect(screen.getByText(/Version/i)).toBeInTheDocument();
    })
})