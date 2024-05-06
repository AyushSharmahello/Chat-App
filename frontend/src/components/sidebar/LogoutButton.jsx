import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import { useAuthContext } from '../../context/AuthContext'
const LogoutButton = () => {
  const { loading, logout } = useLogout();
  const {authUser}=useAuthContext();

  return (
    <div className="mt-auto">
      welcome {authUser.fullName}
      {!loading ? (
         <BiLogOut
          className="w-8 h-8 text-dark  cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};
export default LogoutButton;

 