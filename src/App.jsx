import { useState,useCallback,useEffect,useRef} from 'react'
import './App.css'
import Timeline from 'wavesurfer.js/dist/plugins/timeline.js'
import WaveSurferPlayer from './waveplayer';


const App = () => {

  //The raw URL that needs authentication for access.
  const url='https://landingmilaaidev.blob.core.windows.net/aimessages/user_25_1690282499.wav?se=2023-07-25T11%3A54%3A59Z&sp=r&sv=2022-11-02&sr=b&sig=v8jZRAKgFix4yq6IWC1PAq%2Bbmwptf8Kx/lYHttqZIkg%3D'
  
  


  const urls = ['/raw_audio.wav', 'https://landingmilaaidev.blob.core.windows.net/aimessages/user_25_1690282499.wav?se=2023-07-25T11%3A54%3A59Z&sp=r&sv=2022-11-02&sr=b&sig=v8jZRAKgFix4yq6IWC1PAq%2Bbmwptf8Kx/lYHttqZIkg%3D']
  
  const [audioUrl, setAudioUrl] = useState(urls[0])

  // Swap the audio URL
  const onUrlChange = useCallback(() => {
    urls.reverse()
    setAudioUrl(urls[0])
  }, [])

  // Render the wavesurfer component
  // and a button to load a different audio file
  return (
    <>
      <WaveSurferPlayer
        height={100}
        waveColor="rgb(200, 0, 200)"
        progressColor="rgb(100, 0, 100)"
        url={audioUrl}
        plugins={[Timeline.create()]}
      />

      <button onClick={onUrlChange}>Change audio</button>
    </>
  )
}

export default App
