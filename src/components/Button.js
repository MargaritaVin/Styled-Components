import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButtonBase = styled.button`
padding: ${props => props.size === "small" ? "9px 16px" : "12px 20px"};;
border-radius: 4px;
align-items: center;
border: 1px solid transparent;
cursor: pointer;
font-size: ${props => props.size === "large" ? "18px" : "16px"};
:disabled {
    color: #7C8DB0;
    border-color: #7C8DB0;
}
`;

const StyledPrimaryButton = styled(StyledButtonBase)`
color: #FAFAFA;
background: #605DEC;
:hover {
    background: #1513A0;
}
:disabled {
    background: rgba(203, 212, 230, 0.3);
}
`;

const StyledSecondaryButton = styled(StyledButtonBase)`
color: #605DEC;
border-color: #7C8DB0;
background: none;
:hover {
    background: #E9E8FC;
    border-color: #605DEC;
}
:disabled {
    background: none;
}
`;

const Button = ({onClick, color, disabled , size, children}) => {
    const buttonProps = {
        disabled,
        onClick,
        children,
        size
    };

    if(color === "secondary") {
        return <StyledSecondaryButton {...buttonProps}/>
    }

    return <StyledPrimaryButton {...buttonProps}/>
};

Button.propTypes = {
    onClick: PropTypes.func,
    color: PropTypes.oneOf(["primary", "secondary"]),
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(["large", "medium", "small"]),
};
Button.defaultProps = {
    size: "medium",
    disabled: false
};

export default Button;