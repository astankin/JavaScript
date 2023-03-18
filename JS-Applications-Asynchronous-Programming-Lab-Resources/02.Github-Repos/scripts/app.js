function loadRepos() {
	const username = document.getElementById('username').value;
	fetch(`https://api.github.com/users/${username}/repos`)
		.then(handleResponse)
		.then(handleData)
		.catch(handleError);

	function handleResponse(response){
		if (response.ok == false) {
			throw new Error(`Error: ${response.status} ${response.statusText}`);
		}
		return response.json();
	}
	function handleData(data){
		const list = document.getElementById('repos'); // select parent element where to insert li

		const items = data.map(repo => {               
			const li = document.createElement('li');    // create new Li element for every line from the result
			const a = document.createElement('a');
			a.href = repo.html_url;
			a.textContent = repo.full_name;
			li.appendChild(a);

			return li;
		});

		list.replaceChildren(...items);     // append li elements to tha parent, replaceChildren - every time new content
	}
	function handleError(err) {
		const list = document.getElementById('repos');  // visualise the error
		list.textContent = err.message;
	}
}