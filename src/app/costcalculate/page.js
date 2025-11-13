import { Calculator } from "@/components/Calculator";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsappIcon from "@/components/WhatsappIcon";

const CostCalculate = () => {
  return (
    <div className="flex flex-col gap-2">
      <Header />
      <WhatsappIcon />
      <Calculator />
      <Footer />
    </div>
  );
};
export default CostCalculate;
