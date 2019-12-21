import React, { useContext } from 'react';
import { UserContext, ChannelContext } from '../App'

const ComponentE = () => {

    const userName = useContext(UserContext)
    const userTitle = useContext(ChannelContext)


    return (
        <div>
            <h1>Component E child of ComponentC</h1>
            My Name : {userName} and my title: {userTitle}
        </div>
    )
}

export default ComponentE;


// After export from parent component , here just import those context like line no 2

//after import those context, put it into useConext and agai assign in into a variable like line no. 7

// now we r redy to use those value inside our component line line no. 13. 