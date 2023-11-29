import * as styled from './Index.styled'
import {FC, ReactElement, ReactNode} from "react";
interface IProps {
    children?:ReactNode
}
export const DivFlex:FC<IProps> = ({children}) => {
    return (
        <styled.DivFlex>
            {children}
        </styled.DivFlex>
    );
};

export const DivFlexColumn:FC<IProps> = ({children}) => {
    return (
        <styled.DivFlexColumn>
            {children}
        </styled.DivFlexColumn>
    );
};
