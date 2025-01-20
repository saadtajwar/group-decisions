import { NativeRouter, Route, Routes } from 'react-router-native';
import Home from './components/Home';
import Vote from './components/Vote';
import JoinSession from './components/JoinSession';
import HostSession from './components/HostSession';


export default function Index() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join-session" element={<JoinSession />} />
        <Route path="/host-session" element={<HostSession />} />
        <Route path="/vote" element={<Vote />} />
      </Routes>
    </NativeRouter>
  );
}
