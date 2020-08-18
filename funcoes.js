var form = document.getElementById('Formu');

form.addEventListener('submit', function cepa() {
    cep = this.innerHTML;
    const url = `https://api.postmon.com.br/v1/cep/${cep}`;
    console.log(url);
})

function cepa(){
    var cep = document.getElementById('cep');
    return cep.json();
}