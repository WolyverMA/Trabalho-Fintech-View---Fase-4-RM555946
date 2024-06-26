function register() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    console.log('Nome:', name);
    console.log('Idade:', age);
    console.log('E-mail:', email);
    console.log('Telefone:', phone);
    console.log('Endereço:', address);
}