import Mark from './assets/images/avatar-mark-webber.webp'

export default function Notifcations() {
    return (
        <>
        {/*Mark Weber */}
        <div className="bg-LightGrayishBlue1 flex flex-row items-center rounded-md px-6 py-1 mt-6 ">
            <div>
                <img src={Mark} alt='Marks Profile picture' />
            </div>
            <div className='ml-4' >
                <h2 className='text-sm font-overpass' >
                 Mark Webber reacted to your recent post My first tournament today!
                </h2>
                <p className=''>1m ago</p>
            </div>
        </div>
        </>
    )

}
