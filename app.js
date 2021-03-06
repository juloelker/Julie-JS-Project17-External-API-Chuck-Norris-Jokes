document.querySelector('.get-jokes').addEventListener('click', getJokes);

//get jokes
function getJokes(e) {
  const number = document.querySelector("input[type='number']").value;
  const xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    `http://api.icndb.com/jokes/random/${number}?limitTo=[nerdy]`,
    true
  );
  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      // console.log(response);
      let output = '';
      if (response.type === 'success') {
        response.value.forEach(function (joke) {
          output += `<li>ID ${joke.id}: ${joke.joke}</li>`;
        });
      } else {
        output += '<p>Something went wrong.</p>';
      }
      document.querySelector('.jokes').innerHTML = output;
    }
  };
  xhr.send();
  e.preventDefault();
}
