import { ParallaxProvider } from 'react-scroll-parallax';
import App from './App';

function AppWrapper() {
  return (
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  );
}

export default AppWrapper;