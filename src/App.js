import './App.css';
import Video from './components/Video';

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
        url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
        channel="maleos380"
        description="Mackbook Air to new Linux editing beast"
        song="I am a Linux PC"
        likes={345}
        shares={200}
        messages={90}
       /> 
        <Video url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169739/video2_mecbdo.mp4"
        channel="maleos380"
        description="Sunday morning editing on kdenlive in linux"
        song="Kdenlive is great"
        likes={445}
        shares={290}
        messages={109}
        />
      </div>
    </div>
      );
}

export default App;
