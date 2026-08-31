
import Accordion from "./components/Accordion.jsx";
import {accordionData} from "./utils/content.js";

const App = () => {
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({title , content}) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  )
}

export default App