const anosBtns = document.querySelectorAll(".ano-btn");
const bimestresSection = document.getElementById("bimestres");
const bimestreBtns = document.querySelectorAll(".bimestre-btn");
const detalhesSection = document.getElementById("detalhes");
const conteudoDiv = document.getElementById("conteudo");

const gradeFilosofia = {
  "1": {
    "1": {
      unidade: "As origens da Filosofia e a atitude filosófica. / O conceito de civilização. / O pensamento científico e os valores tradicionais. / A reflexão ética.",
      habilidades: "(EM13CHS101) Identificar, analisar e comparar diferentes fontes e narrativas expressas em diversas linguagens, com vistas à compreensão de ideias filosóficas e de processos e eventos históricos, geográficos, políticos, econômicos, sociais, ambientais e culturais. / (EM13CHS102) Identificar, analisar e discutir as circunstâncias históricas, geográficas, políticas, econômicas, sociais, ambientais e culturais de matrizes conceituais (etnocentrismo, racismo, evolução, modernidade, cooperativismo/desenvolvimento etc.), avaliando criticamente seu significado histórico e comparando-as a narrativas que contemplem outros agentes e discursos. / (EM13CHS105) Identificar, contextualizar e criticar tipologias evolutivas (populações nômades e sedentárias, entre outras) e oposições dicotômicas (cidade/campo, cultura/ natureza, civilizados/bárbaros, razão/emoção, material/virtual etc.), explicitando suas ambiguidades. / (EM13CHS106) Utilizar as linguagens cartográfica, gráfica e iconográfica, diferentes gêneros textuais e tecnologias digitais de informação e comunicação de forma crítica, significativa, reflexiva e ética nas diversas práticas sociais, incluindo as escolares, para se comunicar, acessar e difundir informações, produzir conhecimentos, resolver problemas e exercer protagonismo e autoria na vida pessoal e coletiva.",
      objetivo: "As origens da Filosofia e a atitude filosófica. Os períodos e os campos de investigação da atividade filosófica. / O conceito de civilização, o projeto de modernidade, a “pós-modernidade” e suas contribuições para a compreensão das noções de civilização e barbárie. / O pensamento científico e os valores tradicionais. A afirmação do discurso científico e filosófico em oposição ao senso comum em diferentes contextos históricos. / A reflexão ética: as diferenças conceituais, as visões de mundo entre filósofos de diferentes contextos e tempos históricos."
    },
    "2": {
      unidade: "A civilização científica e tecnológica. /  A arte como forma de pensamento. /  Os conceitos de civilização. / O eu e o outro.",
      habilidades: "(EM13CHS103) Elaborar hipóteses, selecionar evidências e compor argumentos relativos a processos políticos, econômicos, sociais, ambientais, culturais e epistemológicos, com base na sistematização de dados e informações de diversas naturezas (expressões artísticas, textos filosóficos e sociológicos, documentos históricos e geográficos, gráficos, mapas, tabelas, tradições orais, entre outros). / (EM13CHS104) Analisar objetos e vestígios da cultura material e imaterial de modo a identificar conhecimentos, valores, crenças e práticas que caracterizam a identidade e a diversidade cultural de diferentes sociedades inseridas no tempo e no espaço. / (EM13CHS203) Comparar os significados de território, fronteiras e vazio (espacial, temporal e cultural) em diferentes sociedades, contextualizando e relativizando visões dualistas (civilização/barbárie, nomadismo/sedentarismo, esclarecimento/obscurantismo, cidade/campo, entre outras). / (EM13CHS204) Comparar e avaliar os processos de ocupação do espaço e a formação de territórios, territorialidades e fronteiras, identificando o papel de diferentes agentes (como grupos sociais e culturais, impérios, Estados Nacionais e organismos internacionais) e considerando os conflitos populacionais (internos e externos), a diversidade étnico-cultural e as características socioeconômicas, políticas e tecnológicas.",
      objetivo: "A civilização científica e tecnológica em diferentes contextos: na ética e na liberdade, na cultura e na religião. / A arte como forma de pensamento. / A produção de significados e a reflexão estética. / Os conceitos de civilização/ barbárie, esclarecimento/ obscurantismo como subsídios para a compreensão das relações de poder  - A democracia antiga e a democracia moderna. / A cidadania da antiguidade aos dias de hoje. / O eu e o outro: a tensão permanente na afirmação da subjetividade em face da objetividade do mundo contemporâneo em seus diferentes aspectos  - O indivíduo e a coletividade: desconstrução dos pré-juízos sobre o humano e a sociabilidade."
    },
    "3": {
      unidade: " As concepções de infância... / A autonomia do indivíduo frente ao poder do Estado. / A reflexão ética. / As exigências morais. / Os desafios da bioética.",
      habilidades: "(EM13CHS205) Analisar a produção de diferentes territorialidades em suas dimensões culturais, econômicas, ambientais, políticas e sociais, no Brasil e no mundo contemporâneo, com destaque para as culturas juvenis. / (EM13CHS206) Analisar a ocupação humana e a produção do espaço em diferentes tempos, aplicando os princípios de localização, distribuição, ordem, extensão, conexão, arranjos, casualidade, entre outros que contribuem para o raciocínio geográfico. / (EM13CHS201) Analisar e caracterizar as dinâmicas das populações, das mercadorias e do capital nos diversos continentes, com destaque para a mobilidade e a fixação de pessoas, grupos humanos e povos, em função de eventos naturais, políticos, econômicos, sociais, religiosos e culturais, de modo a compreender e posicionar-se criticamente em relação a esses processos e às possíveis relações entre eles. / (EM13CHS202) Analisar e avaliar os impactos das tecnologias na estruturação e nas dinâmicas de grupos, povos e sociedades contemporâneos (fluxos populacionais, financeiros, de mercadorias, de informações, de valores éticos e culturais etc.), bem como suas interferências nas decisões políticas, sociais, ambientais, econômicas e culturais.",
      objetivo: " As concepções de infância, juventude e velhice na tradição filosófica e as suas problemáticas no Brasil contemporâneo. / A renovação cultural, ética, valores e cultura juvenil. / A autonomia do indivíduo frente ao poder do Estado: as contribuições dos pensadores contratualistas. / A reflexão sobre a influência do pensamento científico na organização dos espaços contemporâneos, considerando a garantia dos Direitos Humanos e sociais. / A reflexão ética: as exigências morais do homem moderno. / As exigências morais da contemporaneidade e as implicações para os direitos humanos. / Os regimes políticos e a “produção” da moral. / Os desafios da bioética frente ao desenvolvimento tecnológico e a globalização na dinâmica produtiva. / A ética da responsabilidade frente aos desafios ambientais contemporâneos."
    },
    "4": {
      unidade: "Comportamentos opressores e modos de violência. / A Identidade na produção filosófica. / As políticas públicas. / Os fundamentos da ética.",
      habilidades: "(EM13CHS503) Identificar diversas formas de violência (física, simbólica, psicológica etc.), suas principais vítimas, suas causas sociais, psicológicas e afetivas, seus significados e usos políticos, sociais e culturais, discutindo e avaliando mecanismos para combatê-las, com base em argumentos éticos. / (EM13CHS601) Identificar e analisar as demandas e os protagonismos políticos, sociais e culturais dos povos indígenas e das populações afrodescendentes (incluindo as quilombolas) no Brasil contemporâneo considerando a história das Américas e o contexto de exclusão e inclusão precária desses grupos na ordem social e econômica atual, promovendo ações para a redução das desigualdades étnico-raciais no país. / (EM13CHS304) Analisar os impactos socioambientais decorrentes de práticas de instituições governamentais, de empresas e de indivíduos, discutindo as origens dessas práticas, selecionando, incorporando e promovendo aquelas que favoreçam a consciência e a ética socioambiental e o consumo responsável. / (EM13CHS501) Analisar os fundamentos da ética em diferentes culturas, tempos e espaços, identificando processos que contribuem para a formação de sujeitos éticos que valorizem a liberdade, a cooperação, a autonomia, o empreendedorismo, a convivência democrática e a solidariedade.",
      objetivo: "- Comportamentos opressores e modos de violência: pressupostos e implicações da opressão, da violência e indiferença em relação aos fenômenos sociais. / O totalitarismo e o terrorismo como ameaça a democracia e aos Direitos Humanos. / A Identidade na produção filosófica: a Filosofia nos países africanos e latino americanos. /  A desigualdade, a exclusão e os direitos: os distintos aspectos da sociabilidade e da cidadania. /  As políticas públicas para o meio ambiente e os impactos de anúncios e publicidade de estímulo ao consumo. /  A bioética e sua função descritiva, normativa e protetora. / Os discursos éticos e políticos na identificação de posições não enunciadas. / Os fundamentos da ética para a constituição dos valores democráticos e solidários (igualdade e o respeito à diversidade, assim como a institucionalização dos Direitos Humanos). / A ética global e moral local: o debate sobre o universalismo e o pluralismo. / Narrativas e teses filosóficas sobre justiça social, solidariedade, igualdade e equidade em diferentes períodos histórico."
    }
  },
  "2": {
    "1": {
      unidade: "Introdução à ética. / Introdução à ética. / Introdução à ética. / Introdução à ética. / Filosofia política.",
      habilidades: "Questionar a realidade social e planejar ações de intervenção solidária. / Relacionar ética e moral . / Identificar diferentes conceitos de liberdade com base em algumas teorias filosóficas . / Relacionar liberdade à solidariedade . / (Retomada) Expressar escrita e oralmente a relevância dos direitos humanos.",
      objetivo: "Introdução à ética: o eu racional; autonomia e liberdade. / Introdução à ética: o eu racional; autonomia e liberdade. / Introdução à ética: o eu racional; autonomia e liberdade. / Introdução à ética: o eu racional; autonomia e liberdade. / Filosofia política: os direitos humanos."
    },
    "2": {
      unidade: "Introdução à teoria do indivíduo. / Tornar-se indivíduo. / Condutas massificadas. / Condutas massificadas. / A filosofia e outras formas de conhecimento.",
      habilidades: "Identificar diferentes concepções de indivíduo. / Identificar as subjetividades como resultado de construção social. / Identificar processos sociais merecedores de crítica. / Refletir sobre as perspectivas de pertencimento e de responsabilidade por si mesmo e pelas demais pessoas e seres da natureza. / (Retomada) Relacionar práticas de cidadania e respeito às diferenças.",
      objetivo: "Introdução à teoria do indivíduo: John Locke, Jeremy Bentham e Stuart Mill. / Condutas massificadas. / Condutas massificadas. / A filosofia e outras formas de conhecimento: mito, cultura, religião, arte e ciência."
    },
    "3": {
      unidade: "Filosofia, política e ética. / Filosofia, política e ética. / Filosofia, política e ética. / As áreas da Filosofia.",
      habilidades: "Identificar e criticar práticas de humilhação social. / Construir argumentação crítica sobre as práticas sociais de discriminação e de preconceitos. / Analisar a condição de seres humanos a partir da reflexãoa partir da reflexão filosófica sobre diferenças e igualdades entre homens e mulheres. / Expressar por escrito e oralemente a relevância da educação para a superação de preconceitos e desigualdades sociais. / (Retomada) Relacionar questões atuais a questões da História da Filosofia.",
      objetivo: "Filosofia, política e ética:humilhação, velhice e racismo. / Filosofia, política e ética:humilhação, velhice e racism. / Filosofia, política e ética: Homens e mulheres. / Filosofia, política e ética: Homens e mulheres. / As áreas da Filosofia."
    },
    "4": {
      unidade: "Desafios éticos contemporaneos. / Desafios éticos contemporaneos. / Introdução a bioética. / Desafios éticos contemporaneos. / Por que estudar Filosofia?.",
      habilidades: "Reconhecer a relevância da reflexão filosófica para a análise dos temas que emergem dos problemas das sociedades contemporâneas. / Expressar por escrito e oralmente questionamentos sobre o avanço tecnológico, o pensamento tecnicista e as consequências para a vida no planeta. / Discutir questões do campo da Bioética, distinguindo o papel da reflexão filosófica para o seu enfrentamento. / Identificar e problematizar valores sociais e culturais da sociedade contemporânea. / (Retomada) Identificar movimentos associados ao processo de conhecimento, compreendendo etapas da reflexão filosófica para desenvolver o pensamento autônomo e questionador.",
      objetivo: "Desafios éticos contemporaneos: a ciência e a condição humana. / Desafios éticos contemporaneos: a ciência e a condição humana. / Introdução a bioética. / Desafios éticos contemporaneos: a ciência e a condição humana. / Por que estudar Filosofia?."
    }
  },
  "3": {
    "1": {
      unidade: "O que é Filosofia?. / O que é Filosofia?. / O homem como ser de natureza e de linguagem. / O homem como ser de natureza e de linguagem. / Desafios éticos contemporaneos: a ciência e a condição humana.",
      habilidades: "Identificar a presença da filosofia no cotidiano. / Estabelecer distinção entre o filosofar espontâneo, próprio do senso comum e o filosofar propriamente dito, típico dos filósofos especialistas. / Relacionar pensamento, linguagem e língua. / Identificar a importância da língua para a produção e preservação de saberes coletivos, bem como para representar o real e imaginar diferentes realidades. / (Retomada) Identificar e problematizar valores sociais e culturais da sociedade contemporânea.",
      objetivo: "O que é Filosofia?. / O que é Filosofia?. / O homem como ser de natureza e de linguagem. / O homem como ser de natureza e de linguagem. / Desafios éticos contemporaneos: a ciência e a condição humana."
    },
    "2": {
      unidade: "Característica do discurso filosófico. / O homem como ser político. / A desigualdade entre os homens. / A desigualdade entre os homens. / Introdução à ética.",
      habilidades: "Identificar marcas dos discursos filosóficos, mitológico e religioso. / Questionar o papel social do Estado e das leis. / Reconhecer o caráter insatisfatório, ingênuo e mesmo ideológico de certas explicações normalmente aceitaspelo senso comum para o problema da desigualdade. / Distinguir a argumentação de Rousseau acerca da origem da desigualdade e de como superá-la por meio do contrato social. / (Retomada) Questionar a realidade social e planejar ações de intervenção solidária.",
      objetivo: "Característica do discurso filosófico: comparação com o discurso religioso. / O homem como ser político. / A desigualdade entre os homens como desafio da política. / A desigualdade entre os homens como desafio da política. / Introdução à ética (o eu racional/autonomia e liberdade)."
    },
    "3": {
      unidade: "Três concepções de liberdade. / Três concepções de liberdade. / Três concepções de liberdade. / Três concepções de liberdade. / Tornar-se indivíduo: Paul Ricoeur e Michel Foucault.",
      habilidades: "Distinguir diferentes concepções sobre a ideia de liberdade. / Relacionar liberdade à política por meio da mediação do conceito de democracia. / Discutir o conceito de liberdade, destacando questões associadas e diferentes entendimentos sobre o ser livre. / Relacionar liberdade à solidariedade na perpectiva de uma sociedade democrática. / (Retomada) Identificar as subjetividades como resultado de construção social.",
      objetivo: "Três concepções de liberdade:  libertarismo, determinismo e  dialética. / Três concepções de liberdade:  libertarismo, determinismo e  dialética. / Três concepções de liberdade:  libertarismo, determinismo e  dialética. / Três concepções de liberdade:  libertarismo, determinismo e  dialética. / Tornar-se indivíduo: Paul Ricoeur e Michel Foucault."
    },
    "4": {
      unidade: "Características do discurso filosófico. / Características do discurso filosófico. / Valores contemporâneos que cercam o tema da felicidade. / Valores contemporâneos que cercam o tema da felicidade. / Condutas massificadas.",
      habilidades: "Ler, compreender e interpretar textos filosóficos. / Elaborar hipóteses e questões a partir de leituras e debates realizados. / Identificar diferentes conceitos de felicidade, destacando questões associadas a diferentes entendimentos contemporâneos sobre “ser feliz”. / Relacionar a ideia de felicidade a uma ética solidária. / Refletir sobre as perspectivas de pertencimento e de responsabilidade por si mesmo e pelas demais pessoas e seres da natureza.",
      objetivo: "Características do discurso filosófico: comparação com o discurso da literatura. / Características do discurso filosófico: comparação com o discurso da literatura. / Valores contemporâneos que cercam o tema da felicidade e das dimensões pessoais e sociais da felicidade. / Condutas massificadas."
    }
  }
};

anosBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const ano = btn.getAttribute("data-ano");
    bimestresSection.classList.remove("hidden");
    bimestresSection.setAttribute("data-ano", ano);
    detalhesSection.classList.add("hidden");
  });
});

bimestreBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const bimestre = btn.getAttribute("data-bimestre");
    const ano = bimestresSection.getAttribute("data-ano");
    const dados = gradeFilosofia[ano]?.[bimestre];

    if (dados) {
      conteudoDiv.innerHTML = `
        <p><strong>Unidade Temática:</strong> ${dados.unidade}</p>
        <p><strong>Habilidades:</strong> ${dados.habilidades}</p>
        <p><strong>Objetivo:</strong> ${dados.objetivo}</p>
      `;
    } else {
      conteudoDiv.innerHTML = "<p>Informações não disponíveis para este bimestre.</p>";
    }
    detalhesSection.classList.remove("hidden");
  });
});
