window.onload = () => {
	let model = new ArticlesModel([new Article('Test title', 'Test description', 'Andrei', 'test_image.png')]),
	view = new ArticlesView(model, {
		'list' : document.getElementById('feed'),
		'addButton' : document.getElementById('addButton'),
		'deleteButton' : document.getElementById('deleteButton'),
		'formatterButton' : document.getElementById('changeFormatterButton')
	}),
	controller = new ArticlesController(model, view);

	view.show();
};