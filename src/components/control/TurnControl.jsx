import React, { useState } from 'react'
import {
    Card,
    Icon,
    Body,
    Score,
} from './TurnControlStyled';


const TurnControl = ({
    isTurn = false,
    score = '-',
    RightSymbol = undefined,
    body,
}) => {
    return (
        <Card isTurn={isTurn}>
            <Icon>
                { RightSymbol }
            </Icon>
            <Body>
                { isTurn && body }
            </Body>
            <Score>
                { score }
            </Score>
        </Card>
    )
}

export default TurnControl
