import Utils from './Utils';


class CanvasUtils {


	constructor() {}


	static pieDrawer(canvas, dataset, options) {
		if (!options.radius) {
			options.radius = options.dimension.height;
		}

		const colors = CanvasUtils.colorPalette(dataset.data.length);
		const ctx = canvas.getContext('2d');
		const offset = { x: 0, y: 0, meanAngle: 0 };
		let start = 0, stop = 0;

		ctx.strokeStyle = 'black';
		ctx.font = `${options.style.fontSize * 2}px Arial`;
		ctx.textAlign = 'center';
		ctx.beginPath();
		ctx.moveTo(0, 20);
		ctx.fillText(dataset.title, options.center.x, options.style.fontSize * 4);		
		ctx.closePath();

		for (let i = 0; i < dataset.data.length; ++i) {
			start = stop;
			stop += (dataset.data[i].amount * 360) / 100;
			offset.meanAngle = (start + stop) / 2;
		
			if (options.splited === true) {
				offset.x = Math.cos(Utils.ang2rad(offset.meanAngle)) * options.splitWidth;
				offset.y = Math.sin(Utils.ang2rad(offset.meanAngle)) * options.splitWidth;
			}

			ctx.strokeStyle = 'black';
			ctx.fillStyle = colors[i];
			ctx.beginPath();
			ctx.moveTo(options.center.x + offset.x, options.center.y + offset.y)
			ctx.arc(options.center.x + offset.x, options.center.y + offset.y, options.radius, Utils.ang2rad(start), Utils.ang2rad(stop));
			(options && options.border) ? ctx.lineTo(options.center.x + offset.x, options.center.y + offset.y) : null;
			ctx.fill();
			(options && options.border) ? ctx.stroke() : null;
			ctx.closePath();

			if (options.label) {
				const bigRadius = options.radius + (options.radius * 10) / 100;
				const biggerRadius = options.radius + (options.radius * 25) / 100;
				const partMiddle = { x: Math.cos(Utils.ang2rad(offset.meanAngle)) * bigRadius, y: Math.sin(Utils.ang2rad(offset.meanAngle)) * bigRadius };
				const textMiddle = { x: Math.cos(Utils.ang2rad(offset.meanAngle)) * biggerRadius, y: Math.sin(Utils.ang2rad(offset.meanAngle)) * biggerRadius };

				if (textMiddle.x > 0) {
					ctx.textAlign = 'left';
				} else if (textMiddle.x === 0) {
					ctx.textAlign = 'center';
				} else {
					ctx.textAlign = 'right';
					if (textMiddle.y < 0) {
						textMiddle.x -= options.style.fontSize / 2;
						textMiddle.y -= options.style.fontSize / 2;
					}
				}

				ctx.strokeStyle = colors[i];
				ctx.fillStyle = 'black';
				ctx.font = `${options.style.fontSize}px Arial`;
				ctx.beginPath();
				ctx.moveTo(options.center.x + offset.x + partMiddle.x * 0.9, options.center.y + offset.y + partMiddle.y * 0.9);				
				ctx.lineTo(options.center.x + offset.x + partMiddle.x, options.center.y + offset.y + partMiddle.y);				
				ctx.stroke();
				ctx.fillText(dataset.data[i].label, options.center.x + textMiddle.x, options.center.y + textMiddle.y);
				ctx.font = '10px Arial';
				ctx.fillText(`${dataset.data[i].amount}%`, options.center.x + textMiddle.x, options.center.y + textMiddle.y + options.style.fontSize);
				ctx.closePath();
			}
		}
	}


	static colorPalette(length) {
		// TODO theme
		const colors = ['#91d900', '#2592d5', '#e70606', '#ec9e45', '#00b050', '#f4ed50', '#f4c3fb', '#b0b0b0', '#f2d9a5'];		
		return colors.slice(0, length);
	}


}


export default CanvasUtils;
