import { CreateProvider } from "./src/Context/Context";
import Gasto from "./src/Page/Gasto";



export default function App() {
  
  return (
    <CreateProvider>
       <Gasto/>
    </CreateProvider>
  );
}


