export function Sidebar() {
    return(
        <div className="flex">
            <div className="bg-green-600 transition-all ease-in-out duration-150 md:w-96 h-screen w-0">
                Sidebar
            </div>
            <div className="bg-green-900 h-screen flex-1">
                Content
            </div>
        </div>
    )
}