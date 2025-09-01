
export interface Exercicio {
  title: string;
  downloadUrl: string;
}

export interface Habilidade {
  code: string;
  desc: string;
  atividades: string[];
  exercicios?: Exercicio[];
}

export interface AulaMock {
  serie: string;
  habilidades: Habilidade[];
  expanded?: boolean;
}

export const MOCK_AULAS: AulaMock[] = [
  // 6º Ano
  {
    serie: '6º Ano',
    expanded: false,
    habilidades: [
      { 
        code: 'Grammar 1', 
        desc: 'Present Simple (affirmative, negative, questions).', 
        atividades: ['Complete as frases', 'Forme perguntas corretas'], 
        exercicios: [{ title: 'PDF Present Simple', downloadUrl: 'assets/exercicios/6ano/grammar_present_simple.pdf' }] 
      },
      { 
        code: 'Vocabulary 1', 
        desc: 'School objects (pencil, book, backpack).', 
        atividades: ['Combine palavras com imagens', 'Escreva frases usando o vocabulário'], 
        exercicios: [{ title: 'PDF School Vocabulary', downloadUrl: 'assets/exercicios/6ano/vocab_school.pdf' }] 
      },
      { 
        code: 'Speaking 1', 
        desc: 'Apresentação pessoal e cumprimentos.', 
        atividades: ['Pratique apresentações em duplas', 'Perguntas e respostas simples'], 
        exercicios: [{ title: 'PDF Speaking Basics', downloadUrl: 'assets/exercicios/6ano/speaking_basics.pdf' }] 
      },
      { 
        code: 'Listening 1', 
        desc: 'Identificar informações básicas em áudios.', 
        atividades: ['Ouça diálogos curtos', 'Responda perguntas'], 
        exercicios: [{ title: 'PDF Listening Exercises', downloadUrl: 'assets/exercicios/6ano/listening_basics.pdf' }] 
      }
    ]
  },

  // 7º Ano
  {
    serie: '7º Ano',
    expanded: false,
    habilidades: [
      { 
        code: 'Grammar 2', 
        desc: 'Present Continuous.', 
        atividades: ['Complete as frases', 'Transforme em negativo'], 
        exercicios: [{ title: 'PDF Present Continuous', downloadUrl: 'assets/exercicios/7ano/grammar_present_continuous.pdf' }] 
      },
      { 
        code: 'Vocabulary 2', 
        desc: 'Family and Friends.', 
        atividades: ['Descreva pessoas da sua família', 'Associe fotos com palavras'], 
        exercicios: [{ title: 'PDF Family Vocabulary', downloadUrl: 'assets/exercicios/7ano/vocab_family.pdf' }] 
      },
      { 
        code: 'Phrasal Verbs 1', 
        desc: 'Common phrasal verbs for everyday life.', 
        atividades: ['Use os phrasal verbs em frases', 'Complete diálogos'], 
        exercicios: [{ title: 'PDF Phrasal Verbs 7º', downloadUrl: 'assets/exercicios/7ano/phrasal_verbs.pdf' }] 
      },
      { 
        code: 'Speaking 2', 
        desc: 'Talking about routines.', 
        atividades: ['Descreva sua rotina diária', 'Perguntas e respostas com colega'], 
        exercicios: [{ title: 'PDF Speaking Routine', downloadUrl: 'assets/exercicios/7ano/speaking_routine.pdf' }] 
      }
    ]
  },

  // 8º Ano
  {
    serie: '8º Ano',
    expanded: false,
    habilidades: [
      { 
        code: 'Grammar 3', 
        desc: 'Past Simple (regular and irregular verbs).', 
        atividades: ['Complete as frases', 'Crie suas próprias sentenças'], 
        exercicios: [{ title: 'PDF Past Simple', downloadUrl: 'assets/exercicios/8ano/grammar_past_simple.pdf' }] 
      },
      { 
        code: 'Vocabulary 3', 
        desc: 'Food and Drinks.', 
        atividades: ['Faça listas de compras em inglês', 'Descreva receitas'], 
        exercicios: [{ title: 'PDF Food Vocabulary', downloadUrl: 'assets/exercicios/8ano/vocab_food.pdf' }] 
      },
      { 
        code: 'Phrasal Verbs 1', 
        desc: 'Daily life phrasal verbs.', 
        atividades: ['Complete diálogos', 'Crie histórias curtas'], 
        exercicios: [{ title: 'PDF Phrasal Verbs 8º', downloadUrl: 'assets/exercicios/8ano/phrasal_verbs.pdf' }] 
      },
      { 
        code: 'Speaking 3', 
        desc: 'Discussing hobbies and free time.', 
        atividades: ['Descreva hobbies', 'Pergunte sobre interesses de colegas'], 
        exercicios: [{ title: 'PDF Speaking Hobbies', downloadUrl: 'assets/exercicios/8ano/speaking_hobbies.pdf' }] 
      }
    ]
  },

  // 9º Ano
  {
    serie: '9º Ano',
    expanded: false,
    habilidades: [
      { 
        code: 'Grammar 4', 
        desc: 'Modal Verbs (can, could, may, might, must).', 
        atividades: ['Complete as frases com o modal correto', 'Transforme sentenças em negativo'], 
        exercicios: [{ title: 'PDF Modal Verbs', downloadUrl: 'assets/exercicios/9ano/grammar_modal_verbs.pdf' }] 
      },
      { 
        code: 'Vocabulary 4', 
        desc: 'Linking Words (and, but, however, therefore).', 
        atividades: ['Combine frases usando linking words', 'Identifique o uso correto'], 
        exercicios: [{ title: 'PDF Linking Words', downloadUrl: 'assets/exercicios/9ano/vocab_linking_words.pdf' }] 
      },
      { 
        code: 'Phrasal Verbs 1', 
        desc: 'Common Phrasal Verbs (turn on, turn off, pick up, look after).', 
        atividades: ['Complete as frases com o phrasal verb correto', 'Crie frases próprias'], 
        exercicios: [{ title: 'PDF Phrasal Verbs', downloadUrl: 'assets/exercicios/9ano/phrasal_verbs.pdf' }] 
      },
      { 
        code: 'Speaking 4', 
        desc: 'Conversas sobre tecnologia.', 
        atividades: ['Debata sobre redes sociais', 'Pratique perguntas e respostas'], 
        exercicios: [{ title: 'PDF Conversa Tecnologia', downloadUrl: 'assets/exercicios/9ano/speaking_tecnologia.pdf' }] 
      }
    ]
  },

  // Ensino Médio
  {
    serie: 'Ensino Médio',
    expanded: false,
    habilidades: [
      { 
        code: 'Grammar 5', 
        desc: 'Future Tenses (will, going to).', 
        atividades: ['Crie frases sobre planos futuros', 'Transforme frases em negativo'], 
        exercicios: [{ title: 'PDF Future Tenses', downloadUrl: 'assets/exercicios/em/future_tenses.pdf' }] 
      },
      { 
        code: 'Vocabulary 5', 
        desc: 'Environment and Sustainability.', 
        atividades: ['Escreva textos sobre reciclagem', 'Faça perguntas sobre o tema'], 
        exercicios: [{ title: 'PDF Vocabulary Environment', downloadUrl: 'assets/exercicios/em/vocab_environment.pdf' }] 
      },
      { 
        code: 'Phrasal Verbs 1', 
        desc: 'Advanced phrasal verbs.', 
        atividades: ['Complete frases complexas', 'Escreva pequenos textos'], 
        exercicios: [{ title: 'PDF Advanced Phrasal Verbs', downloadUrl: 'assets/exercicios/em/phrasal_verbs.pdf' }] 
      },
      { 
        code: 'Speaking 5', 
        desc: 'Discussing technology and society.', 
        atividades: ['Debates em grupos', 'Apresente sua opinião sobre temas atuais'], 
        exercicios: [{ title: 'PDF Speaking Technology', downloadUrl: 'assets/exercicios/em/speaking_technology.pdf' }] 
      }
    ]
  }
];
