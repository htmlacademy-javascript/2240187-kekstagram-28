
const createLoader = (onSuccess, onError) => () => fetch(
  'https://28.javascript.pages.academy/kekstagram',
  {
    method: 'POST',
    body: new FormData(document.querySelector('form')),
  },
)
  .then((response) => {
    if (response.ok) {
      //console.log('RESPONSE');
      return response.json();
    }

    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((data) => {
    //console.log('data');
    onSuccess(data);
  })
  .catch((err) => {
    //console.log('err');
    onError(err);
  });

export { createLoader };


