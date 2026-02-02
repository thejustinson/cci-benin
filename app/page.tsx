import Navbar from "../components/Navbar";
import Header from "../components/Header";
import StatementOfFaith from "../components/StatementOfFaith";
import Visit from "@/components/Visit";
import About from "@/components/About";
import Pastors from "@/components/Pastors";
import MAP from "@/components/MAP";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <StatementOfFaith />
      <Visit/>
      <About/>
      <Pastors/>
      <MAP/>
    </div>
  )
}

export default Home 