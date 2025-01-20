import { NativeRouter, Route, Routes } from 'react-router-native';
import Home from './components/Home';
import DisplayPin from './components/DisplayPin';
import Testing from './components/Testing';


export default function Index() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display-pin" element={<DisplayPin />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </NativeRouter>
  );
}
