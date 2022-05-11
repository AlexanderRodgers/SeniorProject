export const onSubmit = (e) => {
  console.log('event', e);
  console.log('form Data', e.target);
  const formData: FormData = new FormData(e.target);

  console.log(formData);

  const data = {};

  for (let field of formData) {
    const [key, value] = field;
    data[key] = field;
  }
  console.log(data);
}