import MyNav from './MyNav';
import './App.css';
import MyFooter from './MyFooter';
import Welcome from './Welcome';
import LatestRelease from './LatestRelease';

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <LatestRelease />
      <MyFooter />
    </div>
  );
}

export default App;

