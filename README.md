# 🎓 EnglishTeachHub

Plataforma educacional desenvolvida em **Angular 17**, voltada para professores de inglês que buscam recursos didáticos interativos, como **aulas organizadas por série**, **exercícios**, **flashcards**, **planos de aula**, além de **músicas**, **vídeos integrados** e **dicionário online** para tornar as aulas mais dinâmicas e interativas.
O projeto tem como propósito **inovar na prática docente**, unindo tecnologia e educação.

---

* **Angular 17** (standalone components, signals, RxJS)
* **TypeScript**
* **HTML5 & SCSS** (CSS moderno e responsivo, seguindo metodologia BEM)
* **Git & GitHub** para versionamento
* **Boas práticas de UX/UI**
* **Consumo de API pública de dicionário**: a aplicação busca definições de palavras em inglês em tempo real
* **Jest** para testes unitários e cobertura mínima de 50%, garantindo confiabilidade e manutenção do código

---

## 📌 Funcionalidades

* 📚 **Aulas por série** (do 6º ano ao Ensino Médio)
* 🎴 **Flashcards** para vocabulário
* 📖 **Planos de aula prontos para aplicação**
* 🎥 **Vídeos integrados** com conteúdo específico para cada aula
* 🌐 **Dicionário integrado via API** para buscar significados em tempo real
* 🌍 **Design responsivo** para uso em diferentes dispositivos

---

## 🎨 Por que usamos BEM

No **EnglishTeachHub**, adotamos o padrão **BEM (Block, Element, Modifier)** para organizar nosso CSS e SCSS.
💡 **Importante:** BEM **não é uma tecnologia**, mas uma **metodologia de organização de código**, que torna o front-end mais legível, escalável e sustentável.

### Benefícios reais:

1. **Código legível e intuitivo** – cada bloco e elemento tem uma nomenclatura clara, por exemplo:

   * `.tradutor__mock-traducao` → tradução dentro do bloco tradutor
   * `.flashcards__resource-card` → card de recurso dentro do bloco flashcards

2. **Fácil manutenção e escalabilidade** – novos componentes podem ser adicionados sem quebrar estilos existentes.

3. **Evita conflitos de CSS** – cada classe é única dentro do bloco, mantendo estilos isolados.

4. **Acessibilidade organizada** – facilita foco, navegação por teclado e uso de atributos `aria`.

5. **Boas práticas de desenvolvimento** – outros desenvolvedores entendem rapidamente a estrutura da aplicação.

💡 **Resumo divertido:** “BEM feito é código que funciona bem” 😉

---

## 🧩 Estrutura visual BEM do projeto

| Seção              | Bloco (Block)         | Elementos (Elements)                                                                                                  | Modifiers (Opcional) |
| ------------------ | --------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------- |
| Hero               | `.hero`               | `__img`, `__title`, `__subtitle`, `__quote`                                                                           | –                    |
| Footer             | `.footer`             | `__text`, `__author`                                                                                                  | –                    |
| Aulas              | `.aulas-section`      | `__header`, `__title`, `__subtitle`, `__filter-bar`, `__cards-wrapper`, `__cards-grid`, `__card`, `__habilidade-card` | –                    |
| Curiosidades       | `.curiosidades`       | `__btn-primary`, `__curiosidade-text`                                                                                 | –                    |
| Modal Curiosidades | `.curiosidades-modal` | `__backdrop`, `__content`, `__close-btn`, `__list-item`                                                               | `--fechar`           |
| Flashcards         | `.flashcards-section` | `__resources-grid`, `__resource-card`, `__icon`                                                                       | –                    |
| Mídias             | `.midias-section`     | `__temas-grid`, `__tema-card`, `__videos-grid`, `__video-card`, `__btn-voltar`                                        | –                    |
| Tradutor           | `.tradutor-section`   | `__mock-section`, `__palavras-buttons`, `__traducao-mock`, `__api-section`, `__api-input`, `__traducao-api`           | –                    |

> 💡 Cada bloco é independente, evitando conflitos de CSS. Os elementos seguem a hierarquia do bloco, e modificadores (como `--fechar`) alteram estilos específicos de forma controlada.

---

## 📂 Estrutura de pastas do projeto

```
EnglishTeachHub/
├─ src/
│  ├─ app/
│  │  ├─ layout/
│  │  ├─ pages/
│  │  │  ├─ aula/
│  │  │  ├─ curiosidades/
│  │  │  ├─ flashcards/
│  │  │  ├─ hero/
│  │  │  ├─ midias/
│  │  │  ├─ tradutor/
│  │  ├─ shared/
│  │  ├─ pipe/
│  │  ├─ utils/
│  │  ├─ data-mock/
│  │  ├─ app.component.ts/html/scss/spec.ts
│  └─ assets/
│     └─ imagens/
├─ package.json
├─ jest.config.js
└─ README.md

```

## 🌐 Consumo da API de Tradução

O **EnglishTeachHub** integra uma API pública de dicionário para fornecer definições em inglês em tempo real.  

### Endpoint utilizado

GET https://api.dictionaryapi.dev/api/v2/entries/en/{palavra}


- `{palavra}`: palavra em inglês que o usuário deseja consultar.

### Funcionamento

1. O usuário digita a palavra no campo de input.
2. Ao clicar em **"Traduzir"**, o Angular faz uma requisição HTTP GET para o endpoint da API.
3. A API retorna um JSON com informações da palavra, incluindo significados (definitions) e partes do discurso (partOfSpeech).
4. O componente exibe a primeira definição encontrada no resultado.  
   - Exemplo: ao consultar `love`, a resposta pode ser:

```json
[
  {
    "word": "love",
    "meanings": [
      {
        "partOfSpeech": "noun",
        "definitions": [
          { "definition": "strong affection" }
        ]
      }
    ]
  }
]
```

Caso ocorra algum erro (palavra não encontrada ou problema de rede), o sistema exibe uma mensagem de alerta ao usuário.

💡 Observação: a API retorna significados da palavra em inglês, e não traduções para o português.

---

## 🧪 Testes e Qualidade de Código

O projeto utiliza **Jest** para testes unitários, integrados a cada componente.  

### Scripts disponíveis:

* `npm run test` → executa todos os testes uma vez  
* `npm run test:watch` → executa os testes em modo watch (atualiza conforme alterações no código)  
* `npm run test:cov` → gera relatório de cobertura na pasta `coverage/`  

💡 A meta de cobertura mínima é de **50% do código**, garantindo que funcionalidades principais sejam testadas e funcionando corretamente.  

### Estrutura de testes

Cada componente possui seu próprio arquivo `.spec.ts` na mesma pasta do `.ts`, `.html` e `.scss`:

---

## 🖥️ Como rodar o projeto

```bash
# Clone este repositório
git clone https://github.com/marciaejel/EnglishTeachHub.git

# Acesse a pasta do projeto
cd EnglishTeachHub

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
ng serve
```

Abra [http://localhost:4200](http://localhost:4200) no navegador para visualizar a aplicação.

> ⚠️ Certifique-se de usar **Node.js >= 18** e **npm >= 9** para evitar problemas de compatibilidade.

---

## 📌 Contatos

* GitHub: [https://github.com/marciaejel](https://github.com/marciaejel)
* LinkedIn: [https://www.linkedin.com/in/marcia-macedo-b6ab18205/](https://www.linkedin.com/in/marcia-macedo-b6ab18205/)
