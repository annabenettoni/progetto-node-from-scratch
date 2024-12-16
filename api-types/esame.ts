export type Esame = {
    "_id": string;
    "studente": string;
    "materie": Materia[];
}

export type Materia = {
    "nome": string;
    "voto": number;
}