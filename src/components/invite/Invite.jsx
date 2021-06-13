import React, { useState, useEffect } from 'react'
import Input from '../input/Input';
import Button from '../button/Button';
import CopyClipboard from '../icons/CopyClipboard'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
    InviteContainer,
    LabelValueContainer,
} from './InviteStyled';

const LabelValue = ({
    label = '',
    value = undefined,
    flexGrow = 1
}) => {
    return (
        <LabelValueContainer
            flexGrow={flexGrow}
        >
            <span> {label} </span>
            { value }
        </LabelValueContainer>
    );
};

const CopyButton = ({ textToCopy }) => (
    <CopyToClipboard text={textToCopy}>
        <Button 
            tooltipText="Copy to clipboard"
            Icon={<CopyClipboard />} 
        />
    </CopyToClipboard>
);

const Invite = ({
    invited,
    myId,
    symbolIcon = null,
}) => {

    return (
        <InviteContainer>
            <LabelValue 
                label="Connection Status"
                value={<b>Connected</b>}
            />
            <LabelValue 
                label="Symbol"
                value={symbolIcon}
            />
            <LabelValue 
                label="Invite your friend"
                value={ 
                    <Input 
                        RightAddon={ !invited ? <CopyButton textToCopy={`${window.location.host}/?friend=${myId}`} /> : <a href={`${window.location.protocol}//${window.location.href.split('/')[2]}`}>New</a>}
                        value={!invited ? (myId ? `${window.location.host}/?friend=${myId}` : `Generating connection...`) : `You are currently on a game...`}
                        readOnly
                    />
                }
                flexGrow={10}
            />
        </InviteContainer>
    )
}

export default Invite
