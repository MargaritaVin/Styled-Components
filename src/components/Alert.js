import PropTypes from "prop-types";
import styled from "styled-components";

import { ReactComponent as CloseIcon } from "../assets/icons/closeIcon.svg";

const Button = styled.button`
background: none;
border: none;
cursor: pointer;
margin: 0;
padding: 0;
`;

const Text = styled.p`
font-size: 18px;
line-height: 25px;
text-align: center;
color: ${props => props.color === "warning" ? "#1513A0;" : "#F6F6FE;"};
margin: 0 15px 0 0;
`;

const StyledAlert = styled.div`
padding: 20px 74px 20px 32px;
margin: 0 0 50px;
display: flex; 
justify-content: space-between;
align-items: center;
background-color: ${(props) => {
    if(props.color === "primary") {
        return "#605DEC;";
    } if (props.color === "error") {
        return "#EB5757;";
    } if (props.color === "warning") {
        return "#FFD12F;";
    }
    }};
`;

const Alert = ({color, onClose, children}) => {
   return (
      <StyledAlert color={color}>
        <Text color={color}>{children}</Text>
        <Button onClick={onClose}>
            <CloseIcon/>
        </Button>
      </StyledAlert>
   )
};

Alert.propTypes = {
    onClose: PropTypes.func.isRequired,
    color: PropTypes.oneOf(["primary", "error", "warning"]).isRequired,
    children: PropTypes.node.isRequired,
};

export default Alert;