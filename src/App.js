import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import BannerUpper from './components/bannerUpper';

class App extends React.Component {

render() {
return (
	<div className="container">
		<BannerUpper />
	</div>
);
}
}
export default App;
