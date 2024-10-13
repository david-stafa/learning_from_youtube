import './App.css'
import Banner from './components/Banner/Banner'
import Navigation from './components/navigation/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import Projects from './components/projects/projects'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Banner />
      <Projects />
    </div>
  )
}

export default App
