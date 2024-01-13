import BlockGraph from "./ui/BlockGraph";
import Layout from "./ui/Layout";
import Skeleton from "./ui/Skeleton";
import Syntax from "./ui/Syntax";
import Weather from "./ui/Weather";

function App() {
  // return <Syntax />;
  return <BlockGraph />;
  return (
    <div className="w-full">
      <Skeleton />
    </div>
  );
}

export default App;
