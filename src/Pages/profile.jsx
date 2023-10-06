import useLogin from "../hook/useLogin";
const ProfilePage = () => {
    const username = useLogin()
    return (
        <div>
            <h1>Ini Page Profile</h1>
            <p>Username : {username}</p>
        </div>
        
    )
}

export default ProfilePage;