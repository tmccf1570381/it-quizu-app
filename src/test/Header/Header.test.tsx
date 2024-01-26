// @vitest-environment jsdom
import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react';
import Header from "../../components/Header/Header";

describe("Header Unit Test",()=>{
    test("意図した文字が画面に表示されている",()=>{
        render(<Header />);
        expect(screen.getByText("Zamas あるてぃめっと")).toBeTruthy();
        expect(screen.getByText("Logout")).toBeTruthy();
    })
})