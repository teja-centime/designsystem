import React, { Suspense } from "react";
import Btn from "./Btn";
import { cleanup, fireEvent, render } from "@testing-library/react";

jest.mock("atm/src/utils/Translation/centimeTrans", () => {
    let originalModule = jest.requireActual("atm/centime.atm.utils.trans");
    let returnModule = Object.assign(originalModule);
    returnModule.useTrans = (props) => (key) => key;
    returnModule.useT = (label, ns = null) => label;
    return returnModule;
});

afterEach(cleanup);
/*describe("Button Rendering..", () =>{
   test('Renders & UnMounts Without Crashing', () =>{
      const div = document.createElement('div');
      ReactDOM.render(<Suspense fallback={"loading"}><Btn label={`Welcome`}/></Suspense>,div);
      ReactDOM.unmountComponentAtNode(div);
   });

});*/

const label = "Welcome";

describe("Button Events - Testing.. ", async () => {
    test("On Click Event", async () => {
        const onClick = jest.fn();
        const { findByText } = render(
            <Suspense fallback={"loading"}>
                <Btn label={label} onClick={onClick} />
            </Suspense>
        );
        const myBtn = await findByText(label);
        fireEvent.click(myBtn);
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});

describe("Button Snapshots - Compare Snapshot of.. ", async () => {
    test("Default Props Button", async () => {
        const { container, findByText } = render(
            <Suspense fallback={"loading"}>
                <Btn label={label} />
            </Suspense>
        );
        await findByText(label);
        expect(container.firstChild).toMatchSnapshot();
    });

    test("Primary Button", async () => {
        const { container, findByText } = render(
            <Suspense fallback={"loading"}>
                <Btn label={label} color={"primary"} />
            </Suspense>
        );
        await findByText(label);
        expect(container.firstChild).toMatchSnapshot();
    });

    test("Secondary Button", async () => {
        const { container, findByText } = render(
            <Suspense fallback={"loading"}>
                <Btn label={label} color={"secondary"} />
            </Suspense>
        );
        await findByText(label);
        expect(container.firstChild).toMatchSnapshot();
    });

    test("Outlined Secondary Button", async () => {
        const { container, findByText } = render(
            <Suspense fallback={"loading"}>
                <Btn label={label} color="secondary" variant="outlined" />
            </Suspense>
        );
        await findByText(label);
        expect(container.firstChild).toMatchSnapshot();
    });

    test("Text Primary Button", async () => {
        const { container, findByText } = render(
            <Suspense fallback={"loading"}>
                <Btn label={label} color="primary" variant={"text"} />
            </Suspense>
        );
        await findByText(label);
        expect(container.firstChild).toMatchSnapshot();
    });

    test("Text Secondary Button", async () => {
        const { container, findByText } = render(
            <Suspense fallback={"loading"}>
                <Btn label={label} color="secondary" variant="text" />
            </Suspense>
        );
        await findByText(label);
        expect(container.firstChild).toMatchSnapshot();
    });

    test("Disabled Primary Button", async () => {
        const { container, findByText } = render(
            <Suspense fallback={"loading"}>
                <Btn label={label} color={"primary"} disabled={true} />
            </Suspense>
        );
        await findByText(label);
        expect(container.firstChild).toMatchSnapshot();
    });

    test("Disabled Secondary Button", async () => {
        const { container, findByText } = render(
            <Suspense fallback={"loading"}>
                <Btn label={label} color={"secondary"} disabled={true} />
            </Suspense>
        );
        await findByText(label);
        expect(container.firstChild).toMatchSnapshot();
    });

    test("Disabled Outlined Secondary Button", async () => {
        const { container, findByText } = render(
            <Suspense fallback={"loading"}>
                <Btn
                    label={label}
                    color="secondary"
                    variant="outlined"
                    disabled={true}
                />
            </Suspense>
        );
        await findByText(label);
        expect(container.firstChild).toMatchSnapshot();
    });

    test("Text Primary Disabled Button", async () => {
        const { container, findByText } = render(
            <Suspense fallback={"loading"}>
                <Btn
                    label={label}
                    color="primary"
                    variant={"text"}
                    disabled={true}
                />
            </Suspense>
        );
        await findByText(label);
        expect(container.firstChild).toMatchSnapshot();
    });

    test("Text Secondary Disabled Button", async () => {
        const { container, findByText } = render(
            <Suspense fallback={"loading"}>
                <Btn
                    label={label}
                    disabled={true}
                    color="secondary"
                    variant="text"
                />
            </Suspense>
        );
        await findByText(label);
        expect(container.firstChild).toMatchSnapshot();
    });

    test("Loading Primary Button", () => {
        const { container } = render(
            <Suspense fallback={"loading"}>
                <Btn label={""} loading={true} color="primary" />
            </Suspense>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
