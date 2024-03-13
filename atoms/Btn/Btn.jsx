import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import BtnLoader from "atm/src/atoms/BtnLoader/BtnLoader";
import {useT} from "atm/src/utils/Translation/centimeTrans";
import {HeightClasses} from "atm/src/utils/Global/cssConstants";

export const BtnColors = {
    primary: "primary",
    secondary: "secondary",
    error: "error",
};
export const BtnVariants = {
    text: "text",
    outlined: "outlined",
    contained: "contained",
};

let BtnSizes = {...HeightClasses};
delete BtnSizes.Large40;

const MaterialBtnSizes = {
    [HeightClasses.ExtraLarge44]: "large",
    [HeightClasses.Medium36]: "medium",
    [HeightClasses.Small32]: "small",
};

export const BtnPropTypes = {
    /**
     *  Text to be displayed in the button
     */
    label: PropTypes.string,
    /**
     * Various Colors of a Button we have :
     *
     */
    color: PropTypes.oneOf(Object.values(BtnColors)),
    /**
     * Variants of each color button with three types used in different scenarios
     * Check out for nice usages of each type : https://material.io/components/buttons/#text-button
     *
     * @default 'contained'
     */
    variant: PropTypes.oneOf(Object.values(BtnVariants)),
    /**
     * Sizes of the button
     * Large has 3rem height; normal has 2.75rem height; small has 2.5rem height
     */
    size: PropTypes.oneOf([...Object.values(BtnSizes)]),
    /**
     *
     *  Spans the full width of the Button parent
     *
     *  */
    fullWidth: PropTypes.bool,
    /**
     * Disables the Button, preventing mouse events,
     * even if the underlying component is an `<a>` element
     */
    disabled: PropTypes.bool,
    /**
     * Providing a `href` will render an `<a>` element, _styled_ as a button.
     * */
    href: PropTypes.string,
    /**
     * Icon with the Button
     */
    icon: PropTypes.node,
    /**
     * If this button only contains the icon
     */
    isIconBtn: PropTypes.bool,
    /**
     * Icon Position
     */
    iconPosition: PropTypes.oneOf(["left", "right"]),
    /**
     * Defines HTML button type attribute.
     *
     * @default 'button'
     */
    type: PropTypes.oneOf(["button", "reset", "submit", null]),

    /**
     * Can Render the button as `button` html element or `a` element or `input` etc..
     *
     * @default 'button'
     */
    as: PropTypes.elementType,

    /**
     * Class Names space separated.
     */
    className: PropTypes.string,

    /**
     * On Click Function
     */
    onClick: PropTypes.func,
    /**
     * Loading State of a Button
     */
    loading: PropTypes.bool,
    /**
     * Translation File's NameSpace - TNS - Can be a string or an array
     */
    tns: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    /**
     * Id of the component
     */
    id: PropTypes.string,
};

/**
 *
 * Usage : `import Btn from "atm/src/atoms/Btn/Btn"`
 */
const Btn = React.forwardRef(
    (
        {
            label,
            color = BtnColors.primary,
            variant = BtnVariants.contained,
            size = HeightClasses.ExtraLarge44,
            fullWidth = false,
            disabled = false,
            href = null,
            icon,
            isIconBtn,
            iconPosition = "left",
            type = "button",
            as = "button",
            className,
            onClick = null,
            loading = false,
            tns,
            id,
        },
        ref
    ) => {
        return (
            <Button
                disableRipple
                ref={ref}
                color={color}
                variant={variant}
                fullWidth={fullWidth}
                disabled={loading ? true : disabled}
                href={href}
                type={type}
                component={as}
                size={
                    MaterialBtnSizes[size] ? MaterialBtnSizes[size] : undefined
                }
                className={
                    (loading ? "noOpacity " : "") +
                    " " +
                    (color === BtnColors.error ? "btnError " : "") +
                    (isIconBtn ? "iconBtn " : "") +
                    (className ? className : "") +
                    (size ? " " + size : "")
                }
                onClick={onClick}
                id={id || label}
            >
                {loading ? (
                    <div className={"btnLoader"}>
                        <BtnLoader/>{" "}
                    </div>
                ) : (
                    <>
                        {iconPosition === "left" && icon && icon}
                        {useT(label, tns)}
                        {iconPosition === "right" && icon && icon}
                    </>
                )}
            </Button>
        );
    }
);

Btn.propTypes = BtnPropTypes;

export default Btn;
