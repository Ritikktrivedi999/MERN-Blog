import { useSelector } from 'react-redux';
export default function DashProfile() {
    const { currentUser } = useSelector((state) => state.user);
    return (
        <div className='max-w-lg mx-auto p-3 w-full'>
            <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
            <form className='flex flex-col gap-4'>
                <img src={currentUser.profilePicture} alt="user" className='rounded-full' />
            </form>
        </div>
    )
}
