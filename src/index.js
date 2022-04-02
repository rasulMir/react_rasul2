import React from 'react';
import './index.css';
import Task1 from './task1/Task1';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<div style={{margin: '0 auto', width: '1000px'}}>
		<Task1 />
		<div className='line'></div>
	</div>
);