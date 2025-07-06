import WayToTeach from "./WayToTeach"
import { ways } from "../data"

export default function WaysSection(){
    return (
        <section>
          {ways.map(way => <WayToTeach key={way.title} {...way}/>)}
        </section> 
    )
}