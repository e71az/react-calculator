import '../style.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

const App = () => (
  <div className="calc">
    <>
      <Display />
      <ButtonPanel />
    </>
  </div>
);

export default App;
