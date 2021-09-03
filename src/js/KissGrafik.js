import '../scss/KissGrafik.scss';
import CanvasUtils from './CanvasUtils';


class KissGrafik {


	constructor(dataset) {
		this._dataset = dataset;
	}


	pieChart(renderTo, options) {
		const computedStyle = renderTo.getBoundingClientRect();
		CanvasUtils.pieDrawer(renderTo, this._dataset, Object.assign(options, {
			center: { x: computedStyle.width / 2, y: computedStyle.height / 2 },
			dimension: { height: (computedStyle.height * 25) / 100 }
		}));
	}


}


export default KissGrafik;
