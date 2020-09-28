import React from 'react'
import Button from "../Button/Button";

function Counter({count}) {
    const [maincount, setCount] = React.useState(count)
    return (
        <div>
            <h3>Count: {maincount}</h3>
            <Button classes={["btn-primary"]} title="Increment" click={() => setCount(maincount+1)} />
            <Button classes={["btn-primary"]} title="Decrement" click={() => setCount(maincount-1)} />
        </div>
    )
}

export default Counter
