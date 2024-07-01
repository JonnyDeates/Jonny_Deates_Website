import React, {CSSProperties} from 'react';
import Chibi from "../../../Chibi/Chibi";
import './HeaderBox.css'

type HeaderBoxProps = {
    header: string,
    subHeader?: string,
    chibiFrame?: CSSProperties
    chibiStyle?: CSSProperties
    headerBoxStyle?: CSSProperties
}
const HeaderBox = ({header, subHeader, chibiFrame = {position: "relative", top: 'unset', left: 'unset'} ,chibiStyle = {}, headerBoxStyle}:HeaderBoxProps) => {
    return (
        <div className="HeaderBox" style={headerBoxStyle}>
            <Chibi frameAttributes={{style: chibiFrame }} chibiAttributes={{style: chibiStyle}}/>
            <div>
                <h1>
                    {header}
                </h1>
                {
                    subHeader && <h2>{subHeader}</h2>
                }
            </div>
        </div>
    );
};

export default HeaderBox;