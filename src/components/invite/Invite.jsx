import React, { useState, useEffect } from 'react'
import Input from '../input/Input';
import Button from '../button/Button';
import CopyClipboard from '../icons/CopyClipboard'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
    InviteContainer,
    LabelValueContainer,
} from './InviteStyled';
import Link from '../link/Link';
import { p2pStatus } from '../../enums';

const LabelValue = React.memo(({
    label = '',
    value = undefined,
    flexGrow = 1
}) => (
    <LabelValueContainer
        flexGrow={flexGrow}
    >
        <span> {label} </span>
        { value }
    </LabelValueContainer>
));

const CopyButton = React.memo(({ textToCopy }) => (
    <CopyToClipboard text={textToCopy}>
        <Button 
            tooltipText="Copy to clipboard"
            Icon={<CopyClipboard />} 
            aria-label="Copy to clipboard"
        />
    </CopyToClipboard>
));

const NewGameLink = React.memo(() => (
        <Link
            href={`${window.location.protocol}//${window.location.href.split('/')[2]}`}
            tooltipText="Create a new game"
            style={{ padding: '2px' }}
        >
            New
        </Link>   
    )
);

const getStatus = (status) => {
    switch(status) {
        case p2pStatus.DISCONNECTED:
            return "Lost connection";
        case p2pStatus.NOT_CONNECTED:
            return "Not connected";
        case p2pStatus.READY:
            return "Connected";
    } 
};

const Invite = React.memo(({
    invited,
    myId,
    SymbolIcon = null,
    status,
}) => (
    <InviteContainer>
        <LabelValue 
            label="Connection Status"
            value={<b>{getStatus(status)}</b>}
        />
        <LabelValue 
            label="Symbol"
            value={SymbolIcon}
        />
        <LabelValue 
            label="Invite your friend"
            value={ 
                <Input 
                    RightAddon={ !invited ? <CopyButton textToCopy={`${window.location.host}/?friend=${myId}`} /> : <NewGameLink />}
                    value={!invited ? (myId ? `${window.location.host}/?friend=${myId}` : `Generating connection...`) : `You are currently in a game...`}
                    readOnly
                    aria-label="Invitation link"
                />
            }
            flexGrow={10}
        />
    </InviteContainer>
));

export default Invite
