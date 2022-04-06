import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import Task4 from './task4/Task4';
import Task5 from './task5/Task5';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<div style={{margin: '0 auto', width: '1000px'}}>
		<React.StrictMode>
			{/* <Task4 /> */}
			<Task5 />
		</React.StrictMode>
	</div>
);