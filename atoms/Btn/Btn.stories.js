import React from "react";
import Btn, { BtnColors, BtnVariants } from "./Btn";
import { withA11y } from "@storybook/addon-a11y";
import Icon from "atm/src/atoms/Icon/Icon";
import { HeightClasses } from "atm/src/utils/Global/cssConstants";
// import Icon from "../Icon/Icon";

export default {
    component: Btn,
    title: "Atoms/Button",
    parameters: {
        component: Btn,
        componentSubtitle: "All Types Buttons in Centime.",
        "in-dsm": { id: "5f97e679100ed33930f3b2c3", version: "0.0.2" },
        decorators: [withA11y],
        actions: {
            argTypesRegex: "^on.*",
            handles: ["mouseover", "click .btn"],
        },
    },
    argTypes: {
        color: {
            control: {
                type: "inline-radio",
                options: BtnColors,
            },
        },
        variant: {
            control: {
                type: "inline-radio",
                options: BtnVariants,
            },
        },
        as: {
            control: {
                type: "inline-radio",
                options: ["a", "input", "button"],
            },
        },
        type: {
            control: {
                type: "inline-radio",
                options: ["reset", "submit", "button"],
            },
        },
        iconPosition: {
            control: {
                type: "inline-radio",
                options: ["left", "right"],
            },
        },
        onClick: {
            action: "clicked",
        },
    },
};

const BtnTemplate = args => <Btn {...args} />;

export const all = args => {
    return (
        <>
            <Btn
                onClick={() => {}}
                label="Primary"
                color="primary"
                size={HeightClasses.ExtraLarge44}
            />
            &nbsp;
            <Btn
                onClick={() => {}}
                label="Secondary"
                color="secondary"
                size={HeightClasses.ExtraLarge44}
            />
            &nbsp;
            <Btn
                onClick={() => {}}
                label="Outlined Secondary"
                color="secondary"
                variant="outlined"
                size={HeightClasses.ExtraLarge44}
            />
            &nbsp;
            <Btn
                onClick={() => {}}
                label="Text Primary"
                color="primary"
                variant={"text"}
                size={HeightClasses.ExtraLarge44}
            />
            &nbsp;
            <Btn
                onClick={() => {}}
                label="Text Secondary"
                color="secondary"
                variant={"text"}
                size={HeightClasses.ExtraLarge44}
            />
            <br />
            <br />
            <Btn
                onClick={() => {}}
                label="Disabled"
                disabled={true}
                size={HeightClasses.Medium36}
            />
            &nbsp;
            <Btn
                onClick={() => {}}
                label="Disabled"
                color={"secondary"}
                disabled={true}
                size={HeightClasses.Medium36}
            />
            &nbsp;
            <Btn
                onClick={() => {}}
                label="Disabled Outline"
                color={"secondary"}
                variant={"outlined"}
                disabled={true}
                size={HeightClasses.Medium36}
            />
            &nbsp;
            <br />
            <br />
            <Btn
                onClick={() => {}}
                label="Default Height - Large"
                color={"secondary"}
                variant={"outlined"}
                size={HeightClasses.ExtraLarge44}
            />
            &nbsp;
            <Btn
                onClick={() => {}}
                label="Medium Height"
                color={BtnColors.secondary}
                size={HeightClasses.Medium36}
                variant={BtnVariants.outlined}
            />
            &nbsp;
            <Btn
                onClick={() => {}}
                label="Small Height"
                color={BtnColors.secondary}
                size={HeightClasses.Small32}
                variant={BtnVariants.outlined}
            />
            &nbsp;
            <br />
            <br />
            <div style={{ width: "25%" }}>
                <Btn
                    onClick={() => {}}
                    label="Full Width Primary"
                    color="primary"
                    fullWidth={true}
                />
            </div>
            <br />
            <div style={{ width: "25%" }}>
                <Btn
                    onClick={() => {}}
                    label="Loading"
                    loading={true}
                    fullWidth={true}
                />
            </div>
            <br />
            <div style={{ width: "25%" }}>
                <Btn
                    onClick={() => {}}
                    loading={true}
                    fullWidth={true}
                    label="Secondary"
                    color="secondary"
                />
            </div>
            <br />
            <div style={{ width: "25%" }}>
                <Btn
                    onClick={() => {}}
                    loading={true}
                    fullWidth={true}
                    label="Outlined Secondary"
                    color="secondary"
                    variant="outlined"
                />
            </div>
            <br />
            <Btn onClick={() => {}} label="Loading Small Btn" loading={true} />
            <br />
            <br />
            <Btn
                onClick={() => {}}
                label="Remove"
                color={BtnColors.secondary}
                icon={
                    <Icon
                        name={"delete"}
                        customFontSize={"0.75rem"}
                        className={"mr-1"}
                    />
                }
                size={HeightClasses.Medium36}
                variant={"outlined"}
            />
            &nbsp;
            <Btn
                onClick={() => {}}
                label="Reconnect"
                color={BtnColors.error}
                icon={<Icon name="thunder" color={"error"} />}
                size={HeightClasses.Medium36}
                variant={"outlined"}
            />
            &nbsp;
            <Btn
                onClick={() => {}}
                label="Download"
                icon={
                    <Icon
                        name="download"
                        customFontSize={"0.75rem"}
                        className={"mr-2"}
                    />
                }
                size={HeightClasses.Medium36}
                color="secondary"
                variant={"text"}
            />
            &nbsp;
            <br />
            <br />
            <p>Pagination Buttons</p>
            <Btn
                onClick={() => {}}
                label=""
                color={BtnColors.secondary}
                icon={<Icon name="back" />}
                size={HeightClasses.Medium36}
                isIconBtn
                variant={"outlined"}
                className={
                    "noBorderTopRightRadius noBorderBottomRightRadius leftRoundedBtn"
                }
            />
            <Btn
                onClick={() => {}}
                label=""
                color={BtnColors.secondary}
                icon={<Icon name="forward" />}
                size={HeightClasses.Medium36}
                isIconBtn
                className={"noBorderTopLeftRadius noBorderBottomLeftRadius"}
                variant={"outlined"}
            />
            <br />
            <br />
            <p>Carousel Buttons</p>
            <Btn
                onClick={() => {}}
                label=""
                color={BtnColors.secondary}
                icon={
                    <Icon
                        name="less-than"
                        className={"mb-1"}
                        customFontSize={"0.5rem"}
                    />
                }
                size={HeightClasses.Small32}
                isIconBtn
                variant={"outlined"}
                className={"mr-2"}
            />
            <Btn
                onClick={() => {}}
                label=""
                color={BtnColors.secondary}
                icon={
                    <Icon
                        name="greater-than"
                        className={"mb-1"}
                        customFontSize={"0.5rem"}
                    />
                }
                size={HeightClasses.Small32}
                isIconBtn
                variant={"outlined"}
            />
        </>
    );
};
all.args = {};

all.story = {
    parameters: {
        "in-dsm": {
            id: "5f994fddbf85ef80c43d1b10",
        },
    },
};

export const PrimaryButton = BtnTemplate.bind({});
PrimaryButton.args = {
    color: "primary",
    label: "Primary Button",
};
PrimaryButton.story = {
    parameters: {
        // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
        // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
        // "in-dsm": {
        //     id: "5f97e679100ed33930f3b2c3",
        //     versionFilePath: "../../../package.json"
        // },
    },
};

export const PrimaryText = BtnTemplate.bind({});
PrimaryText.args = {
    ...PrimaryButton.args,
    variant: "text",
};
//
// export const PlayWithProps = args => (
//     <div style={{ width: "25%" }}>
//         <Btn {...args} />
//     </div>
// );
// PlayWithProps.args = {
//     label: "Play with Knobs",
//     disabled: false,
//     color: "primary",
//     variant: "contained",
//     fullWidth: false,
//     as: "button",
//     type: "button",
// };
