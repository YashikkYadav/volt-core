import { Calculator } from "@/components/Calculator";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const CostCalculate = () => {
  return (
    <div className="flex flex-col gap-2">
      <Header />
      <Calculator />
      <Footer />
    </div>
  );
};
export default CostCalculate;
