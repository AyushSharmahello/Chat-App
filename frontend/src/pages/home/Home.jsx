import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
   
    <div className="d-flex h-100 rounded-lg overflow-hidden bg-green-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-">
  <Sidebar />
  <MessageContainer />
</div>

  );
};
export default Home;
