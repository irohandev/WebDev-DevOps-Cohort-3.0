// Importing the default export from the function `Page` and defining its props type as `any`.
export default function Page({ params }: any) {
    // This function component takes `params` as a prop, which can contain various dynamic parameters.
    
    return (
        <div>
            {/* Rendering a friendly message on the page */}
            Heyy there from post wale page! 
            <br />
            {/* Displaying the `postId` parameter as a stringified JSON within an h1 element */}
            <h1>{JSON.stringify(params.postId)}</h1>
        </div>
    );
}

/*
Notes :
- The `[...postId]` syntax is used in the dynamic routing of Next.js. 
- This allows handling routes like `localhost:3000/post/____` where anything after `/post/` 
  (e.g., 1/2, 2/3, 3/4, 4/5, rohan) will be captured and handled dynamically.
- The captured values are available as `params.postId` in the component. 
- This is particularly useful for creating pages that accept multiple levels of dynamic paths.
*/
