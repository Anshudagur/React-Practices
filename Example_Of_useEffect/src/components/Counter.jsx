import { useEffect,useState } from 'react';

function Counter() {
    let [count, setCount] = useState(0);

    // This Side Effect will run at every render
    // useEffect(
    //     () => { 
    //         console.log('Page is reloaded !');
    //     });

    // Runs only once on the first render
    // useEffect(
    //     () => { 
    //         console.log('Page is reloaded !');
    //     },[]);

    // Runs once at first reload + when ever the count changes
    // useEffect(
    //     () => { 
    //         console.log('Page is reloaded !');
    //     },[count]);

    // Multiple depencences can be pass 
    // useEffect(
    //     () => { 
    //         console.log('Page is reloaded !');
    //     },[count,isLoggedIn]);
    
    // Returning a cleanup funcrtion 
    // useEffect(() => {
    //     // set up code
    //     console.log('Values in Count is updated ...')
    //     return () => { console.log('Component is clean up !'); };
    // }, [count]);
    // Flow : init render -> update count / any state variable -> previous state is got cleaned up

    // Runs once on mount, cleanup runs once on unmount
    useEffect(() => {
        console.log('Counter mounted!');
        return () => {
        console.log('Counter unmounted!');
        };
    }, []);

    // Runs on every update
    useEffect(() => {
        console.log('Values in Count is updated ...');
    }, [count]);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <>
            <h3>Count: <span>{count}</span></h3>
            <button
                type="button"
                className="increase"
                onClick={ handleClick }
            >
                Plus +1
            </button>
        </>
    );
}

export default Counter;