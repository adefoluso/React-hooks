import React, {useState, useEffect} from 'react';

//useEffect is used to perform some form of a side effect whenever something happens


function UseEffectHook() {
    const [resourceType, setResourceType] = useState('posts')


    //1.everything in this arrow fxn gets executed every single time our application renders

    //2. in order to make sure that your application render only when a specific resource changes then useEffect then takes in a second parameter which is an array which contains value that whenever they change the hook is going to run

    //3. with the two console.logs...the resourcetype changed will only run if the resourcetype changes to show the power of useEffect

    //4. Passing an empty array as second parameter is essentially telling  creating a unique effect on a component that only runs once at first load or render

    //5. last note taken is that always set up a clean up after a useEffect has ran to avoid mounting initial effects from prev time the component was rendered

 
    useEffect(() => {
       console.log('resource changed')

       return ()=>{
        console.log("return from resource change")
       }
    },[resourceType])

    return (
        <>
            <div>
                <button onClick={()=> setResourceType('posts')}>Posts</button>
                <button onClick={()=> setResourceType('users')}>Users</button>
                <button onClick={()=> setResourceType('comments')}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
           
        </>
    )
}

export default UseEffectHook

