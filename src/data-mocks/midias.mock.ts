export interface MidiaMock {
  tema: string;
  titulo: string;
  url: string;
  descricao: string;
}

export const MIDIAS: MidiaMock[] = [
  // Verb To Be

  {
    tema: 'Verb To Be',
    titulo: 'Verb To Be - Exercícios',
    url: 'https://www.youtube.com/embed/Qyjw5RzH_h4',
    descricao: 'Música para praticar o verbo to be.'
  },

  // Simple Present
  
  {
    tema: 'Simple Present',
    titulo: 'Simple Present - Conversação',
    url: 'https://www.youtube.com/embed/MCIO1ohb174',
    descricao: 'Música para praticar com os alunos.'
  },

  // Simple Past
   
  {
    tema: 'Simple Past',
    titulo: 'Simple Past - Aula',
    url: 'https://www.youtube.com/embed/DbVz0jP722g',
    descricao: 'Para ouvir e praticar.'
  },
 

  // Future Tenses
  
  {
    tema: 'Future Tenses',
    titulo: 'Future Tenses - Aula',
    url: 'https://www.youtube.com/embed/NZGHXy1IAHM',
    descricao: 'Música para praticar.'
  }
];
