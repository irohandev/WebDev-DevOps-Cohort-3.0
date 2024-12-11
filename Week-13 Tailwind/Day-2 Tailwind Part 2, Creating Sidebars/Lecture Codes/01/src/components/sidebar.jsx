export function Sidebar() {
    return(
        <div className="flex">
            <div className="transition-all ease-in-out duration-150 md:w-96 h-screen w-0">
                Sidebar
            </div>
            <div className="bg-green-800 h-screen flex-1">
                Content
            </div>
        </div>
    )
}