import {
    getFilmsSortedByDate, getActivitesSortedByDate, getParticipantsSortedByName,
    getFilmById, getActiviteById, getInviteById, getActivitesByAnimateurId,
    getActivitesByAnimateurNom
} from './backend.mjs';

async function test() {
    console.log(" Test des fonctionnalités de PocketBase...");

    console.log("\n Films triés par date :");
    console.table(await getFilmsSortedByDate());

    console.log("\n Activités triées par date :");
    console.table(await getActivitesSortedByDate());

    console.log("\n Acteurs et réalisateurs triés par nom :");
    console.table(await getParticipantsSortedByName());

    console.log("\n🎥 Récupération d'un film par ID :");
    console.log(await getFilmById("id_du_film"));

    console.log("\n Récupération d'une activité par ID :");
    console.log(await getActiviteById("id_de_l_activite"));

    console.log("\n Récupération d'un invité par ID :");
    console.log(await getInviteById("id_de_l_invite"));

    console.log("\n Activités d'un animateur par ID :");
    console.table(await getActivitesByAnimateurId("id_de_l_animateur"));

    console.log("\n Activités d'un animateur par nom :");
    console.table(await getActivitesByAnimateurNom("Nom Animateur"));
}

test();
