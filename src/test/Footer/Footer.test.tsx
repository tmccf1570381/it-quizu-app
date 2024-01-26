// @vitest-environment jsdom
import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react';
import Footer from "../../components/Footer/Footer";

describe("Footer Unit Test",()=>{
    test("footerコンポーネントが存在する",()=>{
        render(<Footer />);
        expect(screen.getByTestId("footer")).toBeTruthy();
    });
})