const firstGraph = new KissGrafik({
	title: 'Fruit repartition',
	type: 'percentage',
	data: [{
		label: 'Salad',
		amount: 42
	}, {
		label: 'Tomate',
		amount: 32
	}, {
		label: 'Oignon',
		amount: 26
	}]
});
firstGraph.pieChart(document.getElementById('sandbox'), {
	splited: true,
	splitWidth: 3,
	border: true,
	label: true,
	radius: 80,
	style: {
		fontSize: 12
	}
});
