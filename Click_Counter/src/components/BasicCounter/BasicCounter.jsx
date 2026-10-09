function BasicCounter() { 
    let count = 0; // Using normal variables instaed of useState()
    function eventClick() { 
        count += 1;
        console.log(count);
    }

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={eventClick}>Increment</button>
        </div>
    )
}

export default BasicCounter;

// Consicunces of using Normal

// 1. Silently updates memeory with out triggering page render.
// Thats why console.log() value is correctly incremented but the UI overlooks it.
// 2. Each time page re-render variable changed to its intitial value.
// Since the variable is declared inside the function body, React tears it down and recreates it from scratch every time the component re-renders.
// 3. Rerendering process is built on the top of state change.
// if we update a variable react has no way to know when to render the new value. 
// State Change => Re-render => Reflect on UI (What react actualy do)