import styled from "styled-components"

export const Layout = (props) => {
    return (
        <LayoutStyle>
            {props.children}
        </LayoutStyle>
    );
};

const LayoutStyle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`