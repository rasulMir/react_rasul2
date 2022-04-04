import React from 'react';
import './index.css';
import Task1 from './task1/Task1';

import { createRoot } from 'react-dom/client';
import Counter from './task2/task2';
import Task3 from './task3/Task3';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<div style={{margin: '0 auto', width: '1000px'}}>
		<React.StrictMode>
			<Task1 />
			<div className='line'></div>
			<Counter />
			<Counter />
			<Counter />
			<div className='line'></div>
			<Task3 />
			<div className='line'></div>
		</React.StrictMode>
	</div>
);