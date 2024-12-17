export {}; // This ensures the file is treated as a module, avoiding global scope conflicts.

// Extending the Express Request interface to include a custom property (`userId`).
declare global {
    namespace Express {
        // The Request interface from the Express module is being extended here.
        export interface Request {
            userId?: string; // Adds an optional `userId` property to the Request object.
        }
    }
}
