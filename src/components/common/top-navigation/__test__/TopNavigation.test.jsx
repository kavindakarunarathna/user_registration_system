import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import TopNavigation from "../TopNavigation";

describe('TopNavigation', () => {
    it('should render "ABC Company"', () => {
        render(
            <MemoryRouter>
                <TopNavigation />
            </MemoryRouter>
        );

        const companyTitle = screen.getByText(/ABC Company/i);
        expect(companyTitle).toBeInTheDocument();
    });
});
