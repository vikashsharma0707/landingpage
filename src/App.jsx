// import Contact from "./Components/Contact";
// import Features from "./Components/Features";
// import Footer from "./Components/Footer";
// import Header from "./Components/Header";
// import Hero from "./Components/Hero";
// import Pricing from "./Components/Pricing";
// import Sign from "./Components/Sign";
// import "./Css/App.css"




// const App=()=>{
//   return(
//     <>

//     <div  className="header-container">
//     <Header/>
//     </div>
   
//     <Hero/>
//     <Features/>
//     <Pricing/>
//     <Contact/>
//     <Footer/>
//     {/* <Sign/> */}
    

    
//     </>
//   )
// }

// export default App;



import { motion } from "framer-motion";
import Contact from "./Components/Contact";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Pricing from "./Components/Pricing";
import "./Css/App.css";

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const App = () => {
  return (
    <>
      <div className="header-container">
        <Header />
      </div>

      <motion.div variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <Hero />
      </motion.div>

      <motion.div variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <Features />
      </motion.div>

      <motion.div variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <Pricing />
      </motion.div>

      <motion.div variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <Contact />
      </motion.div>

      <motion.div variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <Footer />
      </motion.div>
    </>
  );
};

export default App;
