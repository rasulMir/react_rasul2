import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
// import Task4 from './task4/Task4';
// import Task5 from './task5/Task5';
// import Task6 from './task6/Task6';
// import Task7 from './task7/Task7';
import Task8 from './task8/Task8';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<div style={{margin: '0 auto', width: '1000px'}}>
		<React.StrictMode>
			{/* <Task4 /> */}
			{/* <Task5 /> */}
			{/* <Task6 /> */}
			{/* <Task7 /> */}
			<Task8/>
		</React.StrictMode>
	</div>
);