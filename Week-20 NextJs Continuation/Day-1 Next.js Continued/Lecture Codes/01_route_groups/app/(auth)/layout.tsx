import { ReactNode } from "react"; 
// Importing the `ReactNode` type from React, which is used to specify that the `children` prop can be any valid React node (like elements, strings, fragments, etc.).

export default function RootLayout({ children }: { children: ReactNode }) {
    // Defining a functional component `RootLayout` that takes a `children` prop.
    // The `children` prop is typed as `ReactNode` to allow any valid React content.

    return (
        <div>
            {/* The parent div acts as the main container for the layout. */}

            <div>Header</div>
            {/* This is the Header section that will appear at the top of every page using this layout. */}

            {children}
            {/* The `children` prop represents the dynamic content that will be passed to this layout. 
                It allows different components or pages to be displayed between the Header and Footer. */}

            <div>Footer</div>
            {/* This is the Footer section that will appear at the bottom of every page using this layout. */}
        </div>
    );
}

/*
Note:
1. This component serves as a layout template, specifically for authenticated pages.
   It ensures that all content in the "auth" section is wrapped with a consistent Header and Footer.

2. By placing the `auth` folder in parentheses (e.g., `(auth)`), Next.js will skip routing for the folder itself.
   This means routes like localhost:3000/auth will not be accessible. Instead, we can directly access pages within the `auth` folder, such as localhost:3000/signin or localhost:3000/signup.

3. This structure ensures that every page inside the "auth" folder has a consistent layout, 
   with the Header displayed above and the Footer below the main content (children).
*/
