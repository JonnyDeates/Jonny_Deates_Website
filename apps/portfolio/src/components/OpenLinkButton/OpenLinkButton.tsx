import React from 'react';
import openNewTabWindow from "../../utils/openNewTabWindow";
import openIcon from "./assets/open.svg";
import {IconButton} from "koi-pool";
import './OpenLinkButton.css'
type OpenLinkButtonProps = { link:string}

const OpenLinkButton = ({link}: OpenLinkButtonProps) => {
    const linkTitle = `Open ${link}`;

    return (
        <IconButton className={'OpenLinkButton'} variant={'accept'} onClick={()=> openNewTabWindow(link)}
                    src={openIcon as string} title={linkTitle}/>
    );
};

export default OpenLinkButton;