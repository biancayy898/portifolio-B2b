# 🚀 Portfólio B2B

Página inicial de uma agência fictícia de desenvolvimento web B2B, desenvolvida como projeto da disciplina de **Laboratório Web**.

O projeto apresenta uma interface moderna, responsiva e organizada, com foco na apresentação de serviços, empresas, ferramentas, clientes, depoimentos e eventos.

🔗 **Acesse o projeto:**
https://biancayy898.github.io/portifolio-B2b/

🔗 **Repositório:**
https://github.com/biancayy898/portifolio-B2b

---

## 📋 Sobre o projeto

O objetivo deste projeto é desenvolver uma **landing page para uma agência fictícia de desenvolvimento web voltada para o mercado B2B**.

A página foi construída utilizando tecnologias fundamentais do desenvolvimento web:

* **HTML5** para a estrutura e organização do conteúdo;
* **CSS3** para estilização, responsividade e layout;
* **JavaScript** para interatividade e funcionalidades dinâmicas;
* **API pública** para carregamento de dados na seção de depoimentos;
* **Git e GitHub** para versionamento e publicação do projeto.

O projeto também utiliza uma abordagem **Mobile First**, permitindo que a interface se adapte a diferentes tamanhos de tela.

---

## 🎯 Objetivos

* Desenvolver uma página web moderna e responsiva;
* Aplicar boas práticas de HTML semântico;
* Utilizar CSS Grid e Flexbox para construção dos layouts;
* Implementar responsividade para diferentes dispositivos;
* Adicionar interatividade utilizando JavaScript;
* Consumir dados de uma API pública;
* Organizar o código em arquivos e módulos;
* Praticar versionamento com Git e GitHub;
* Publicar o projeto utilizando GitHub Pages.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia   | Utilização                       |
| ------------ | -------------------------------- |
| HTML5        | Estrutura semântica da página    |
| CSS3         | Estilização e responsividade     |
| JavaScript   | Interatividade e funcionalidades |
| API pública  | Dados dinâmicos dos depoimentos  |
| Git          | Controle de versão               |
| GitHub       | Hospedagem do código             |
| GitHub Pages | Publicação do site               |

---

## 📁 Estrutura do projeto

```text
portifolio-B2b/
│
├── index.html
├── script.js
├── README.md
│
└── src/
    ├── css/
    │   ├── base.css
    │   ├── header.css
    │   ├── nav.css
    │   ├── hero.css
    │   ├── companies.css
    │   ├── discover.css
    │   ├── tools.css
    │   ├── customers.css
    │   ├── speed.css
    │   ├── testimonials.css
    │   ├── events.css
    │   └── footer.css
    │
    └── js/
        ├── nav.js
        └── testimonials.js
```

A separação dos arquivos CSS permite organizar cada seção da página individualmente, enquanto os arquivos JavaScript concentram funcionalidades específicas.

---

## 🖥️ Seções da página

O projeto é dividido em diferentes seções para apresentar a agência e seus serviços:

### 🧭 Navegação

Menu principal da página com navegação entre as diferentes partes do site.

Em telas menores, o menu possui comportamento responsivo, permitindo sua abertura e fechamento através de JavaScript.

### 🦸 Hero

Seção inicial responsável por apresentar a proposta da agência e chamar a atenção do visitante.

### 🏢 Empresas

Apresentação de empresas e marcas relacionadas ao contexto da agência.

### 🔎 Descubra

Seção destinada à apresentação de informações e diferenciais da empresa.

### 🛠️ Ferramentas

Apresentação das ferramentas e tecnologias utilizadas no desenvolvimento.

### 👥 Clientes

Seção dedicada à apresentação dos clientes e resultados proporcionados pela agência.

### ⚡ Velocidade

Área destinada a destacar desempenho e eficiência das soluções desenvolvidas.

### 💬 Depoimentos

Seção dinâmica com depoimentos de clientes.

Os dados são carregados utilizando JavaScript e uma API pública, com apresentação em formato de cards/carrossel.

### 📅 Eventos

Seção dedicada à divulgação de eventos e informações relacionadas à área de tecnologia.

### 📌 Rodapé

Contém informações complementares e elementos de navegação do projeto.

---

## 📱 Responsividade

O projeto utiliza uma abordagem **Mobile First**, onde os estilos são inicialmente pensados para telas menores e posteriormente adaptados para telas maiores.

Foram considerados diferentes tamanhos de tela para garantir uma boa experiência em:

* 📱 Smartphones;
* 📱 Tablets;
* 💻 Notebooks;
* 🖥️ Desktops.

A responsividade é construída principalmente utilizando:

* CSS Grid;
* Flexbox;
* Media Queries;
* Unidades relativas;
* Layouts adaptáveis.

---

## ⚙️ Funcionalidades JavaScript

O arquivo principal `script.js` funciona como ponto de entrada das funcionalidades JavaScript.

Entre as funcionalidades implementadas estão:

### Menu responsivo

O módulo `nav.js` controla a abertura e o fechamento do menu de navegação em dispositivos menores.

### Depoimentos dinâmicos

O módulo `testimonials.js` realiza o carregamento dos depoimentos através de uma API pública e organiza os dados na interface.

Também são utilizados controles para navegação entre os cards de depoimentos.

---

## 🌐 API

O projeto possui integração com uma **API pública** para obter dados utilizados na seção de depoimentos.

Essa integração permite que parte do conteúdo seja carregada dinamicamente através de JavaScript, evitando que todas as informações precisem estar inseridas diretamente no HTML.

---

## 🎨 Design

O projeto utiliza um sistema de cores baseado principalmente em tons de:

* Roxo;
* Azul-acinzentado;
* Branco;
* Rosa;
* Laranja.

Também foram utilizadas **variáveis CSS** para facilitar a manutenção das cores, espaçamentos e demais valores utilizados no projeto.

A identidade visual busca transmitir uma aparência moderna e tecnológica, adequada ao contexto de uma agência de desenvolvimento web.

---

## ▶️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/biancayy898/portifolio-B2b.git
```

### 2. Entre na pasta

```bash
cd portifolio-B2b
```

### 3. Abra o projeto no VS Code

```bash
code .
```

### 4. Execute o projeto

Como o projeto utiliza HTML, CSS e JavaScript, ele pode ser executado utilizando uma extensão como **Live Server** no Visual Studio Code.

Abra o arquivo:

```text
index.html
```

e execute utilizando o Live Server.

---

## 🔍 Validação

Durante o desenvolvimento, a estrutura HTML pode ser verificada utilizando o **W3C Markup Validation Service**, garantindo que o código siga os padrões do HTML5.

Também é importante testar o projeto utilizando as ferramentas de desenvolvedor do navegador:

```text
F12 → DevTools → modo responsivo
```

Assim é possível verificar o comportamento da página em diferentes resoluções.

---

## 📚 Aprendizados

O desenvolvimento deste projeto possibilitou praticar conhecimentos relacionados a:

* Estrutura semântica com HTML5;
* CSS Mobile First;
* CSS Grid;
* Flexbox;
* Media Queries;
* Variáveis CSS;
* JavaScript;
* Módulos JavaScript;
* Manipulação do DOM;
* Eventos;
* Consumo de API;
* Git;
* GitHub;
* GitHub Pages;
* Organização de projetos web.

---

## 👩‍💻 Autora

**Bianca Martins**

Projeto desenvolvido para a disciplina de **Laboratório Web**.

---

## 📄 Licença

Este projeto foi desenvolvido para fins **educacionais e acadêmicos**.
