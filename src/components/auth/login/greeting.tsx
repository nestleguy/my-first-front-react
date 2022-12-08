import React from 'react'

interface Igreeting {
    name: string
}

const Greeting = (props: Igreeting)=> {
    const {name} = props
return (
    <div>
            <h3>hi {name}</h3>
    </div>
        );
};

export default Greeting;