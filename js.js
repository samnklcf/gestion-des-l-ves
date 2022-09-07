let les_eleves = JSON.parse(localStorage.getItem("info_eleve")) ?? [];
let compteur = les_eleves.length;


let info_eleve = localStorage.getItem('info_eleve') ? JSON.parse(localStorage.getItem('info_eleve')) : [];

let dt = [JSON.parse(localStorage.getItem('info_eleve'))]
console.log(compteur)


if (localStorage.getItem != null) {
    info_eleve.forEach(element => {
        corps.innerHTML += `
        <tr>
            <th scope="row ">${element.cle}</th>
            <td>${element.nom}</td>
            <td>${element.prenom}</td>
            <td>${element.genre}</td>
            <td>${element.nais}</td>
            <td>${element.lieu}</td>
            <td>${element.classe}</td>
            <td>${element.nom_parent}</td>
            <td>${element.prenom_parent}</td>
            <td>${element.profession}</td>
            <td>${element.telephone}</td>
            <td>${element.email_tuteur}</td>

        </tr>
        `
    });
}
console.table(info_eleve)

step2.addEventListener('click', (e) => {
    e.preventDefault()
    compteur++
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let genre = document.getElementById('sel').value;
    let nais = document.getElementById('nais').value;
    let lieu = document.getElementById('lieu').value;
    let classe = document.getElementById('classe').value;
    let nom_parent = document.getElementById('nom_parent').value;
    let prenom_parent = document.getElementById('prenom_parent').value;
    let profession = document.getElementById('profession').value;
    let telephone = document.getElementById('telephone').value;
    let email_tuteur = document.getElementById('email_tuteur').value;



    info_eleve.push({
        cle: compteur,
        nom: nom,
        prenom: prenom,
        genre: genre,
        nais: nais,
        lieu: lieu,
        classe: classe,
        nom_parent: nom_parent,
        prenom_parent: prenom_parent,
        profession: profession,
        telephone: telephone,
        email_tuteur: email_tuteur
    });

    localStorage.setItem("info_eleve", JSON.stringify(info_eleve))
    console.table(info_eleve)
    corps.innerHTML += `
    <tr>
        <th scope="row ">${compteur}</th>
        <td>${nom}</td>
        <td>${prenom}</td>
        <td>${genre}</td>
        <td>${nais}</td>
        <td>${lieu}</td>
        <td>${classe}</td>
        <td>${nom_parent}</td>
        <td>${prenom_parent}</td>
        <td>${profession}</td>
        <td>${telephone}</td>
        <td>${email_tuteur}</td>

    </tr>
    `

})