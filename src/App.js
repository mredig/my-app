import React from 'react';
import logo from './logo.svg';
import './App.css';
import { QRCode } from 'react-qrcode-logo';

function App() {
	return (
		<QRCode value="google.com" ecLevel="H" qrStyle="dots" logoWidth="200" />
		// <QRCode value="google.com" ecLevel="H" qrStyle="dots" logoWidth="200" logoImage="https://www.shareicon.net/data/256x256/2017/06/22/887584_logo_512x512.png" />
	);
}

export default App;
