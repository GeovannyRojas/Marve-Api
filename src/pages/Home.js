import BestCharacters from "../components/BestCharacters/BestCharacters";
import Insider from "../components/Insider/Insider";
import ListLastEvents from "../components/ListLastEvent/ListLastEvent";
//import ListLastEvents from "../components/ListLanstEvent/ListLastEvent";

export default function Home() {
    return(
        <div>
            <BestCharacters/>
            <ListLastEvents/>
            <Insider/>
          
        </div>
    );
    
}
