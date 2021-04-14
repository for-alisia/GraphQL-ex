import React from 'react';

import SongList from './SongList';
import SongCreate from './SongCreate';

const App = () => (
  <div className="container">
    <SongList />
    <hr style={{ marginBottom: '48px' }} />
    <SongCreate />
  </div>
);

export default App;
