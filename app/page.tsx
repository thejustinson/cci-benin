import Navbar from "../components/Navbar";
import Header from "../components/Header";
import StatementOfFaith from "../components/StatementOfFaith";
import Visit from "@/components/Visit";
import About from "@/components/About";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <StatementOfFaith />
      <Visit/>
      <About/>
    </div>
  )
}

export default Home 