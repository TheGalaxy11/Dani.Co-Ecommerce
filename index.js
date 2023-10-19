function handleSubmit () {
    const name = document.getElementById('name').value;

    localStorage.setItem("Name", name);

    return;
}