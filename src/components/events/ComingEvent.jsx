import { events } from "../../constants"
import { Title } from "../../ui"
import Item from "./Item"

const ComingEvent = () => {
  return (
    <div className="bg-white p-5 rounded-2xl dark:bg-gray-600 
    dark:text-gray-300 flex flex-1 gap-5 flex-col">
       <Title>Events</Title>
       {events.map((event,index)=>(
          <Item key={index} event={event}/>
       )
       )}
    </div>
  )
}

export default ComingEvent
