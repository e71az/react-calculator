import '../style.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// import Button from './Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="calc">
      <>
        <Display />
        <ButtonPanel />
      </>
    </div>
  );
}

export default App;
