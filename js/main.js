const button = document.querySelector("#button");
const lista = document.querySelector("#lista");
const parrafo = document.querySelector("#parrafo");
const fragment = document.createDocumentFragment();


button.addEventListener("click", (ev) => {
    getApi();
});

const api = () => {
    const isOk = true;
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isOk) {
                resolve({
                    nombre: "Pepe",
                    email: "pepe@gmail.com"
                });
            } else {
                reject("Error");
            }
        }, 2000);
    });
    return promesa;
}


const getApi = async () => {
    try {
        const apiResponse = await api()
        funcionPintar(apiResponse);


    } catch (error) {
        parrafo.textContent = error;

    }
}

const funcionPintar = (usuario) => {
    lista.innerHTML = "";
    const li00 = document.createElement("LI");
    const li01 = document.createElement("LI");

    li00.textContent = usuario.nombre;
    li01.textContent = usuario.email;

    fragment.append(li00);
    fragment.append(li01);

    lista.append(fragment);
}