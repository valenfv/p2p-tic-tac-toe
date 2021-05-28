import React, { useState, useEffect } from 'react';
import Peer from 'peerjs';
import { p2pStatus, symbols } from '../enums';

export default (friendId, lastMove) => {
    const [peer, setPeer] = useState(null);
    const [connection, setConnection] = useState(null);
    const [status, setStatus] = useState(p2pStatus.NOT_CONNECTED);
    const [symbol, setSymbol] = useState(null);
    const [isTurn, setIsTurn] = useState(false);
    const [update, setUpdate] = useState(null);

    // GENERATE A PEER ID
    useEffect(() => {
        const newPeer = new Peer();
        newPeer.on('open', (id) => {
            setPeer(newPeer);
        });
        newPeer.on('connection', (conn) => {
            setConnection(conn);
        });
    }, []);

    // CONNECTIO TO A FRIEND
    useEffect(() => {
        if(peer && friendId){
            const newConn = peer.connect(friendId);
            newConn.on('open', () => {
                setStatus(p2pStatus.READY);
                setConnection(newConn);
                // send a random number in order to determine either X or O
                const randSymbol = Math.floor(Math.random() * 10);
                newConn.send({
                    type: 'raffle',
                    number: randSymbol,
                });
                if(randSymbol % 2 === 0){
                    setSymbol(symbols.CIRCLE);
                }else{
                    setSymbol(symbols.CROSS);
                    setIsTurn(true);
                }
            });
        }
    }, [peer, friendId])

    // STABLISH THE LISTENERS
    useEffect(() => {
        if(connection)

            connection.on('data', (data) => {
                if(data?.type === 'raffle'){
                    if(data?.number % 2 === 0){
                        setSymbol(symbols.CROSS);
                        setIsTurn(true);
                    }else{
                        setSymbol(symbols.CIRCLE);
                    }
                }
                if(data?.type === 'update'){
                    setIsTurn(true);
                    setUpdate(data?.update);
                }
                if(data?.type === 'symbol'){
                    setSymbol(data?.symbol);
                }
            });
    }, [connection])

    useEffect(() => {
        if(connection && symbol){
            setIsTurn(false);
            connection.send({
                type: 'update',
                update: lastMove
            });
        }
    }, [lastMove])

    return {
        peer,
        status,
        symbol,
        isTurn,
        update,
    };
};