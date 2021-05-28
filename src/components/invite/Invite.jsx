import React, { useState, useEffect } from 'react'
import Input from '../input/Input';
import Button from '../button/Button';
import CopyClipboard from '../icons/CopyClipboard'
import styled from 'styled-components'

const InviteContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    background: #FFF;
    width: 100%;
    gap: 10px;
`;

const LabelValueContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const LabelValue = ({
    label = '',
    value = undefined,
}) => {
    return (
        <LabelValueContainer>
            <span> {label} </span>
            { value }
        </LabelValueContainer>
    );
};

const Invite = ({
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
                        rightAddon={<Button 
                                        onClick={() => navigator.clipboard.writeText(`${window.location.host}/?friend=${myId}`)}
                                        icon={<CopyClipboard />} />}
                        value={myId ? `${window.location.host}/?friend=${myId}` : `Generating connection...`}
                        readOnly
                        width="300px"
                    />
                }
            />
        </InviteContainer>
    )
}

export default Invite
