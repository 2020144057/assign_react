import { getBeerByName, getBeers } from './axios';
import { MainButton } from './components/MainButton/index.jsx'
function App() {
  function buttonHandler(route) {
    document.location.href = route
  }
  return (
    <div className="App" style={{height: "100vh", display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
      <MainButton
        onClick={() => {buttonHandler("/list/domestic")}}
        color={"#3AC8D6"}
        message={"맥주 찾아보기"} 
      />
      <MainButton
        onClick={() => {buttonHandler("/camera")}}
        color={"#813AD6"}
        message={"맥주 찍어보기"} 
      />
    </div>
  );
}

/**
 * #43FA88
 * #3AC8D6
 * #4C72ED
 * #813AD6
 * #FA42C7
 */

export default App;