import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');


export async function getFilmsSortedByDate() {
    try {
        return await pb.collection('films').getFullList({ sort: 'date_projection' });
    } catch (error) {
        console.error(" Erreur lors de la récupération des films :", error);
        return [];
    }
}





export async function getParticipantsSortedByName() {
    try {
        return await pb.collection('invites').getFullList({
            filter: "role = 'acteur' || role = 'réalisateur'",
            sort: 'nom'
        });
    } catch (error) {
        console.error(" Erreur lors de la récupération des participants :", error);
        return [];
    }
}



export async function getFilmById(id) {
    try {
        console.log(` Récupération du film avec ID: ${id}`);

        // On récupère le film avec l'invité associé
        const film = await pb.collection('films').getOne(id, { expand: 'invite' });

        console.log(` Film trouvé :`, film);
        return film;
    } catch (error) {
        console.error(` Erreur lors de la récupération du film avec ID ${id} :`, error);
        return null;
    }
}



export async function getActivitesSortedByDate() {
    try {
        return await pb.collection('activites').getFullList({
            sort: 'date',
            expand: 'invite' // IMPORTANT : Ajoute "expand" pour inclure l'invité
        });
    } catch (error) {
        console.error(" Erreur lors de la récupération des activités :", error);
        return [];
    }
}







/*
export async function getActiviteById(activiteId) {
    try {
        return await pb.collection('activites').getOne(activiteId);
    } catch (error) {
        console.error(` Erreur lors de la récupération de l'activité (ID: ${activiteId}) :`, error);
        return null;
    }
}


export async function getInviteById(inviteId) {
    try {
        return await pb.collection('invites').getOne(inviteId);
    } catch (error) {
        console.error(` Erreur lors de la récupération de l'invité (ID: ${inviteId}) :`, error);
        return null;
    }
}


export async function getActivitesByAnimateurId(animateurId) {
    try {
        return await pb.collection('activites').getFullList({
            filter: `invite = '${animateurId}'`,
            sort: 'date'
        });
    } catch (error) {
        console.error(` Erreur lors de la récupération des activités pour l'animateur (ID: ${animateurId}) :`, error);
        return [];
    }
}


export async function getActivitesByAnimateurNom(nomAnimateur) {
    try {
        const animateur = await pb.collection('invites').getFirstListItem(`nom = '${nomAnimateur}' AND role = 'animateur'`);
        if (!animateur) {
            console.error(` Aucun animateur trouvé avec le nom : ${nomAnimateur}`);
            return [];
        }
        return await pb.collection('activites').getFullList({
            filter: `invite = '${animateur.id}'`,
            sort: 'date'
        });
    } catch (error) {
        console.error(`Erreur lors de la récupération des activités pour l'animateur (Nom: ${nomAnimateur}) :`, error);
        return [];
    }
} */