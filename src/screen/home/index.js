import Sidebar from "../../component/sidebar";
import NavBar from "../../component/navbar";
import Footer from "../../component/footer";
import Content from "../../component/content";

const Home = () => {
  return (
    <div className="page-home">
      <div className="flex flex-col">
        <div className="relative flex-grow" style={{ minHeight: "42rem" }}>
          <div className="flex-1 w-full md:pl-72">
            <div x-data="{ open: false }" false>
              <Sidebar />
              <NavBar />
            </div>
            <Content />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
