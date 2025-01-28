enum EEtatTache {
    TODO = "A faire",
    PENDING = "En cours",
    COMPLETE = "Terminée"
};

interface ITache {
    titre: string;
    description: string;
    etat: EEtatTache
};

class Tache implements ITache {
    constructor(public titre: string, public description: string, public etat: EEtatTache) { }
}

class GestionnaireTaches {
    private taches: ITache[] = []

    listerTaches(): ITache[] {
        return this.taches;
    }

    ajouterTache(tache: ITache): void {
        this.taches.push(tache)
    }

    changerEtatTache(tache: ITache, etat: EEtatTache): void {
        tache.etat = etat;
    }

    supprimerTache(tache: ITache): void {
        const index = this.taches.indexOf(tache);
        if (index === -1)
            console.error("La tâche n'existe pas");
        else
            this.taches.splice(index, 1);
    }
}

const TodoList = new GestionnaireTaches();

const task1 = new Tache("Faire les courses", "Acheter de la farine", EEtatTache.TODO);
const task2 = new Tache("Faire le ménage", "Nettoyer le bureau", EEtatTache.PENDING);
const task3 = new Tache("Apprendre TS", "Faire les exos", EEtatTache.COMPLETE);

TodoList.ajouterTache(task1);
TodoList.ajouterTache(task2);
TodoList.ajouterTache(task3);

console.log('---------- INIT -----------');
console.table(TodoList.listerTaches())



console.log('---------- CHANGE ETAT -----------');
TodoList.changerEtatTache(task2, EEtatTache.COMPLETE);
console.table(TodoList.listerTaches())


console.log('---------- DELETE TASK -----------');
TodoList.supprimerTache(task3);
console.table(TodoList.listerTaches())
