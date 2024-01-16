import BuyNSell from "./features/buyNsell/BuyNSell";
import { AccordionUI } from "./ui/AccordionUI";
import BlockGraph from "./ui/BlockGraph";
import { ComboboxUI } from "./ui/ComboBoxUI";
import Layout from "./ui/Layout";
import OtpForm from "./ui/OtpForm";
import Home from "./ui/Shadcn-Comp";
import Skeleton from "./ui/Skeleton";
import Syntax from "./ui/Syntax";
import Weather from "./ui/Weather";

function App() {
  // return <Syntax />;
  // return <BlockGraph />;
  // return <OtpForm />;
  return (
    <div>
      {/* <Home />
      <AccordionUI />
      <ComboboxUI /> */}
      <BuyNSell />
    </div>
  );
  return (
    <div className="w-full">
      <Skeleton />
    </div>
  );
}

export default App;
