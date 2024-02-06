import './Navbar.css'

export default function Navbar() {
    return (
        <div className="flex-col flex">
        <div className="flex flex-row justify-between">
            <div className="navbar flex flex-row  items-center">
                <h1 className="text-VeryDarkGreyBlue md:text-2xl font-bold md:font-extrabold mr-1">Notifications</h1>
                <p className="text-white number md:font-2xl font-sm bg-blue px-2 py-1 rounded-md " >3</p>
        </div>
        <div className="items-center" >
            <p className="text-base md:font-medium font-sm leading-normal text-LightGrayishBlue1 ">Mark all as read</p>
        </div>
        </div>
        </div>
    )
}