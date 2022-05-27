import React from 'react';
import './css/App.css';
import HomeGrid from './components/HomeGrid';







//const articleData=getArticles();



/*const articleData = {
  source: "TechCrunch",
  sourceImage: "https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=32",
  title: "Reface, a viral face-swap app from Ukraine, adds anti-war push notifications",
  articleImage: "https://techcrunch.com/wp-content/uploads/2022/02/ukraine-GettyImages-1238723942.jpg?w=730&amp;crop=1",
  author: "Natasha Lomas",
  sourceLink: "https://techcrunch.com/2022/02/27/reface-a-viral-face-swap-app-from-ukraine-adds-anti-war-push-notifications/"

};*/

function App() {
  
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <p>
            The aggregator app!
          </p>

        </header>
        
      </div>
      <HomeGrid/>

    </div>
  );
}

export default App;
