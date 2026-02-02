import Navbar from "../components/Navbar";
import Header from "../components/Header";
import StatementOfFaith from "../components/StatementOfFaith";
import Visit from "@/components/Visit";
import About from "@/components/About";
import Pastors from "@/components/Pastors";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <StatementOfFaith />
      <Visit/>
      <About/>
      <Pastors/>
    </div>
  )
}

export default Home 