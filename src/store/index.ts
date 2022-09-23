import { createStore, Store } from "vuex";
import { InjectionKey } from "vue";
import IPalestras from "@/interfaces/IPalestra";

interface Estado {
    palestras: IPalestras[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        palestras: [
            {
                id: 1,
                nome: "Internet do Futuro",
                descricao: "Momento de bate-papo livre com o Prof. Antônio Alberti, responsável pelo desenvolvimento da Internet do Futuro no Inatel (Projeto NovaGenesis) e líder das pesquisas de Arquitetura 6G na instituição.",
                link: "https://www.youtube.com/watch?v=mnq0LZNK6YE",
                link2: "",
                link3: "",
                nomePalestrante: "Antônio Alberti",
                areaTrabalho: "Convergent Transformation Enthusiast, Researcher, Professor, C++ Developer, Future Internet Pioneer, 6G Architect",
                twitterName: "Antonio M Alberti",
                twitterURL: "antoniomalberti",
                linkedinName: "Antonio Marcos Alberti",
                linkedinURL: "https://www.linkedin.com/in/antonio-marcos-alberti-31643a1b/?originalSubdomain=br",
                bio: "Antonio Marcos Alberti é engenheiro, professor, chefe do Laboratório de Tecnologias de Informação e Comunicação (TIC) do Instituto Nacional de Telecomunicações (INATEL), Brasil, e programador C/C++. Possui doutorado em Eletrônica e Telecomunicações pela Unicamp, Brasil, e pós-doutorado pelo Electronics and Telecommunications Research Institute (ETRI), Coreia. É autor de mais de 100 artigos científicos. Já proferiu mais de 60 palestras sobre tecnologia e suas disrupções, incluindo palestras no HackTown, Futurecom, QCon, TEDxInatel, Pint of Science, Science in Boteco, etc. É colunista do Olhar Digital, EngenhariaÉ e Futurecom. Arquiteto chefe do futuro projeto de Internet da NovaGenesis (desde 2008). Contribuiu para a Future Internet na Coreia do Sul e nas discussões iniciais do Plano Nacional de M2M/IoT do Brasil. Trend hacker, pioneiro e consultor da Internet do Futuro."
            },
            {
                id: 2,
                nome: "Metaverso e MadMax",
                descricao: "Fruto de pesquisa permanente, esta palestra provoca a plateia o tempo todo, mostrando que estamos na Adolescência do Futuro: não mais com todas as regras do século XX, mas sem ainda estar plenamente no século XXI. A apresentação METAVERSO & MAD MAX começa como A Palestra Muda, técnica que criei e que encantou a plateia do último HackTown presencial. Na segunda parte, a Falada, mostro os paradoxos de nosso tempo, indo desde o incrível avanço do Metaverso até a ameaça de uma vida Mad Max.",
                link: "https://www.youtube.com/watch?v=YJZ56L1zfAk",
                link2: "",
                link3: "",
                nomePalestrante: "Dado Schneider",
                areaTrabalho: "Mestre e Doutor em Comunicação pela PUC/RS, criador da marca CLARO, Evangelista Digital do Magalu em sua Virada Digital, em 2015.",
                twitterName: "dado_schneider",
                twitterURL: "https://twitter.com/dado_schneider",
                linkedinName: "Dado Schneider",
                linkedinURL: "https://www.linkedin.com/in/dado-schneider-7a0a57a/",
                bio: "Graduado em Comunicação e Pós-Graduado em Marketing pela UFRGS, Mestre e Doutor em Comunicação pela PUC/RS. No auge da Propaganda, trabalhou nas Agencias de Publicidade DM9, MPM, Ogilvy, VS/Escala, DCS e outras. Foi executivo - e, depois, consultor - de marketing da CLARO e é o próprio criador desta marca. Em 2015, foi consultor para a Virada Digital do Magazine Luiza, atuando como Evangelista Digital. Nos últimos 12 anos, foi professor convidado da HSM Educação, da Fundação Dom Cabral e tem palestrado sobre os temas MUDANÇA e GERAÇÃO Z por todo o Brasil (e, mais recentemente, no exterior, em inglês e espanhol fluentes)."
            },
            {
                id: 3,
                nome: "Aguentando uma enxurrada de requisições com API Gateway + lambda + Kinesis (case de arquitetura criada para suportar 5000 requisições por segundo)",
                descricao: "Desenvolver uma aplicação resiliente e que suporte picos de demandas não programadas é um dos desafios do desenvolvimento moderno. Além disso, o custo e performance são outros fatores relevantes nesta jornada. Nesta apresentação será abordado o desenvolvimento orientado a serviços incluindo uma demo com teste de performance apresentando as 5000 requisições por segundo acontecendo.",
                link: "https://www.youtube.com/watch?v=-iNkdMK0DPc",
                link2: "",
                link3: "",
                nomePalestrante: "Flavio Pimenta",
                areaTrabalho: "Arquiteto de Soluções na Sensedia",
                twitterName: "Flávio Pimenta",
                twitterURL: "https://twitter.com/pimentaflavio",
                linkedinName: "Flávio Pimenta",
                linkedinURL: "https://www.linkedin.com/in/flaap/?originalSubdomain=br",
                bio: "Arquiteto de Soluções | Evangelista DevOps | Organizador e membro ativo das comunidades de tecnologia de Campinas e do Brasil!"
            },
            {
                id: 4,
                nome: "Comunicação e Marketing na Era dos Dados.",
                descricao: "Um mergulho nos projetos mais premiados do ano no Festival Internacional de Criatividade de Cannes.",
                link: "https://www.youtube.com/watch?v=tsoFKvAhhAQ",
                link2: "",
                link3: "",
                nomePalestrante: "José Saad Neto",
                areaTrabalho: "",
                twitterName: "saadneto_",
                twitterURL: "https://twitter.com/saadneto_",
                linkedinName: "José Saad Neto",
                linkedinURL: "https://www.linkedin.com/in/jsaadneto/",
                bio: "Jornalista, curador de tendências e empreendedor. Fundador e head de insights da GoAd Media, rede de curadoria e conhecimento em comunicação e marketing. Foi repórter, editor e gestor de conteúdo em veículos de imprensa e agências por mais de 20 anos."
            },
            {
                id: 5,
                nome: "Visita Guiada INATEL",
                descricao: "Um visita por toda a INATEL. Deixarei um link para um vídeo falando sobre as instalações da INATEL.",
                link: "https://www.youtube.com/watch?v=mL0gQfq-5Yg",
                link2: "",
                link3: "",
                nomePalestrante: "Instituto Nacional de Telecomunicações.",
                areaTrabalho: "Ensino, Pesquisa, Desenvolvimento e Inovação de tecnologias globais.",
                twitterName: "inateloficial",
                twitterURL: "https://twitter.com/inateloficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
                linkedinName: "Instituto Nacional de Telecomunicações - Inatel",
                linkedinURL: "https://www.linkedin.com/school/inatel/",
                bio: "O Instituto Nacional de Telecomunicações - Inatel é um centro de ensino, pesquisa e desenvolvimento de tecnologias, criado em 1965. Foi a primeira instituição de ensino superior de Engenharia de Telecomunicações do Brasil. Desde a fundação, o Inatel caminha junto às importantes decisões no que diz respeito a telecomunicações, tecnologia da informação, informática e todos os ramos da tecnologia. A instituição está localizada em Santa Rita do Sapucaí, sul de Minas Gerais, região conhecida nacional e internacionalmente como o Vale da Eletrônica, e também possui um escritório em São Paulo, onde são oferecidos cursos de Extensão e Pós-graduação."
            },
            {
                id: 6,
                nome: "Como as métricas podem impulsionar a melhoria contínua dentro da sua Squad?",
                descricao: "O vídeo do link é sobre o assunto mas não é do palestrante. - Descrição da palestra: Um marketing mais humanizado! É nesse caminho que precisamos evoluir. Saber colocar o ser humano no centro, estabelecer conexões genuínas e promover interações empáticas passa a ser papel decisivo das marcas que desejam sobreviver aos novos tempos. Mas como construir esse novo marketing num contexto de incertezas e transformações? A palestra abordará o tema e da narrativa de marcas amadas pelos brasileiros como Lacta, Bis, Club Social, Oreo, Trident, Halls, Tang, entre tantas outras.",
                link: "https://www.youtube.com/watch?v=fW92xqlVLu4",
                link2: "https://www.youtube.com/watch?v=pENwZ7XU2HQ",
                link3: "https://www.youtube.com/watch?v=HsqT7PXOjgU",
                nomePalestrante: "Carina Magalhães dos Santos",
                areaTrabalho: "Engineering Manager @ Loft",
                twitterName: "",
                twitterURL: "",
                linkedinName: "Carina Magalhães dos Santos",
                linkedinURL: "https://www.linkedin.com/in/carina-magalhaes-dos-santos/",
                bio: "Mais de 12 anos de experiência alcançando uma ótima visão sistêmica do negócio, conhecimento em diversas tecnologias e uma grande paixão pela liderança. Como Gerente de Engenharia, busco extrair o melhor de cada colaborador, criando oportunidades para seu crescimento, entendendo suas motivações e gerando resultados otimizados a partir do trabalho de equipes cada vez mais auto-organizadas. Sou mentor de líderes para fortalecê-los, solucionar possíveis conflitos e focar na gestão de pessoas. Construo e unifico processos entre equipes para extrair informações para melhor tomada de decisão, identificando gargalos para alcançar entregas mais previsíveis, desenhando também estratégias de organização das equipes. Trabalho para manter e incentivar um ambiente de compartilhamento, inovando as atividades dentro da engenharia para maior engajamento. Garantir a mentalidade ágil e trazer as práticas Scrum e Management 3.0 para o time, o que pode ajudar em um melhor desempenho dos times e entregas de software."
            },
            {
                id: 7,
                nome: "Engenharia Social - O fator humano como falha de segurança.",
                descricao: "O vídeo do link é sobre o assunto mas não é do palestrante. - Descrição da palestra: Um bate papo sobre as questões humanas que nos levam a cair em golpes de Engenharia Social, que representam mais de 90% dos incidentes de segurança cibernética mundial. Questões comportamentais, filosóficas e psicológicas serão analisadas para mostrar as razões que fazem do ser humano o elo mais fraco da segurança cibernética.",
                link: "https://www.youtube.com/watch?v=3NK356O1LmU",
                link2: "https://www.youtube.com/watch?v=y9lAbV5l66Q",
                link3: "https://www.youtube.com/watch?v=lxEMXt99tQw",
                nomePalestrante: "José Geraldo de Souza",
                areaTrabalho: "Professor",
                twitterName: "",
                twitterURL: "",
                linkedinName: "",
                linkedinURL: "",
                bio: "Doutor em Educação pela Unicamp, presidiu a Fundação Instituto Nacional de Telecomunicações por 10 anos, foi professor do Inatel e atuou em educação nas áreas de formação profissional, planejamento educacional e engenharia."
            },
            {
                id: 8,
                nome: "Soft Skills em tech: quais as mais importantes nos tempos atuais?",
                descricao: "O vídeo do link é sobre o assunto mas não é do palestrante. - Descrição da palestra: Por muito tempo, os processos seletivos na área tech, assim como a linha de estudo e desenvolvimento dos profissionais, focaram nas habilidades técnicas, ou seja, nas hard skills. Já nos últimos anos, a bola da vez são as chamadas soft skills, ou as habilidades comportamentais e socioemocionais, que podem ter peso igual ou até maior do que as técnicas. Esta conversa é sobre quais são as soft skills mais importantes no olhar dos recrutadores, e de quem chegou longe na carreira de tecnologia, além de como desenvolvê-las. Venha conferir.",
                link: "https://www.youtube.com/watch?v=SjY0zj17-8U",
                link2: "https://www.youtube.com/watch?v=CNLLSNXZ_uE",
                link3: "https://www.youtube.com/watch?v=yA3sc5mnctg",
                nomePalestrante: "Marcelo Pivovar, Valéria Celloto, Tamara Machado e Luiz Eduardo Drouet",
                areaTrabalho: "CTO na Oracle Brasil, Head de Pessoas e Cultura da Leucotron, HRBP na WatchGuard Technologies e Managing partner da Share People Hub",
                twitterName: "",
                twitterURL: "",
                linkedinName: "",
                linkedinURL: "",
                bio: ""
            },
            {
                id: 9,
                nome: "Como a agilidade pode transformar a gestão de software",
                descricao: "O vídeo do link é sobre o assunto mas não é do palestrante. - Descrição da palestra: Com essa palestra pretendo explicar como as práticas de agilidade conseguem transformar toda a experiência das pessoas envolvidas em uma equipe de software, auxiliando desde a concepção do produto, o planejamento estratégico, o desenvolvimento e a melhoria contínua, mantendo um equilíbrio entre desempenho e felicidade das pessoas.",
                link: "https://www.youtube.com/watch?v=j5mCirZD-0s&t=95s",
                link2: "https://www.youtube.com/watch?v=vAG1ZVIWfNE",
                link3: "https://www.youtube.com/watch?v=cT_X4_n0NJ4",
                nomePalestrante: "João Henrique Domiciano",
                areaTrabalho: "Agile Lead at Bees Brasil | AmBev Global Tech",
                twitterName: "",
                twitterURL: "",
                linkedinName: "João Henrique Domiciano",
                linkedinURL: "https://www.linkedin.com/in/jo%C3%A3o-henrique-domiciano-64358880/?originalSubdomain=br",
                bio: "Agile Lead at Bees Brasil | AmBev Global Tech"
            },
            {
                id: 10,
                nome: "Open Finance Brasil: só não dá pra comer nem passar no cabelo (ainda!)",
                descricao: "O vídeo do link é sobre o assunto mas não é do palestrante. - Descrição da palestra: Uma luz para quem quer entender o Sistema Financeiro Aberto do Brasil - ou Open Finance - passando pelos motivos da sua instituição, modelo de autorregulação, tecnologias principais, benefícios para instituições financeiras e para clientes, casos de uso, e potenciais modelos de negócio.",
                link: "https://www.youtube.com/watch?v=DOby0MWeE1U",
                link2: "https://www.youtube.com/watch?v=eHvVZfAZH4M",
                link3: "https://www.youtube.com/watch?v=K2Y0-oQ_U2c",
                nomePalestrante: "Luísa Marina Woitexen",
                areaTrabalho: "Open Finance | Redação | Apresentações | CNV",
                twitterName: "",
                twitterURL: "",
                linkedinName: "Luísa Marina Woitexen",
                linkedinURL: "https://www.linkedin.com/in/luisamarina/",
                bio: "Implanto o Open Finance na CAIXA, estudo Negócios Digitais, UX, CS, Agile, Lean, Governança Digital, Data Science e Estatística, pelo menos o suficiente para não ser enrolada. Defensora ferrenha do #AnywhereOffice bem administrado como estratégia para saúde e qualidade de vida. Fã do bom PPT e do seu uso adequado e posso te ajudar a criar ou melhorar os seus. Aprendiz de nerd viciada em séries, em Marvel e em aprender e ensinar."
            },
            {
                id: 11,
                nome: "Web3 e Metaverso: criatividade e tecnologia explorando um novo mundo",
                descricao: "O vídeo do link é sobre o assunto mas não é do palestrante. - Descrição da palestra: Vivemos em tempos onde a web3 está ao nosso redor com todas as inovações tecnológicas: Blockchain, Cryptom NFT, XR e o metaverso é uma parte desse contexto que continua gerando muitas conversas, ceticismo e empolgação. Um mundo que se abre para viver experiências mais imersivas, novas formas de interação entre as pessoas e possibilidades criativas que começam a ser exploradas, mixando o digital e o físico. Vamos discutir o que é a web3 e o que já existe na construção do metaverso.",
                link: "https://www.youtube.com/watch?v=OMUimNWXm0w",
                link2: "https://www.youtube.com/watch?v=h3rLjDIUH3g",
                link3: "https://www.youtube.com/watch?v=Z_WmnmPVx2U",
                nomePalestrante: "Edson Sueyoshi",
                areaTrabalho: "VP de Tecnologia & Produção da R/GA",
                twitterName: "",
                twitterURL: "",
                linkedinName: "Edson Sueyoshi",
                linkedinURL: "https://www.linkedin.com/in/esuey/?originalSubdomain=br",
                bio: "MBA em Gestão de TI, pós graduado em Internet Design de aplicativos, graduado em Publicidade e Ciência da Computação. Mais de 23 anos de experiência em projetos digitais orientados a marketing. Minha expertise técnica em projetos digitais reúne duas das minhas maiores paixões profissionais: Marketing e Tecnologia. Forte capacidade de trabalhar em conjunto com as equipes de Criação, Estratégia, Tecnologia, Atendimento ao Cliente e Gestão de Produtos/Projetos para desenvolver a solução mais adequada para atender aos objetivos de comunicação de nossos clientes."
            },
            {
                id: 12,
                nome: "IOT e inteligência artificial para a indústria",
                descricao: "Estamos ensaiando a peça Roberta, e o final dessa história, que fala de sair de dentro das caixas em que a gente se coloca ao longo da vida, ainda está sendo construído. O que é preciso para que a gente quebre barreiras internas e expresse o que temos dentro de nós? Vamos abrir um ensaio do espetáculo para que a plateia se insira no processo de criação. A gente apresenta o que tem pronto e em seguida o público norteia os próximos passos da história. A ideia é que a gente ter um momento de inteligência compartilhada na prática.",
                link: "https://www.youtube.com/watch?v=gecJQDRydRg",
                link2: "https://www.youtube.com/watch?v=2JUH7Z17NEE",
                link3: "https://www.youtube.com/watch?v=P5iOUpfCkLc",
                nomePalestrante: "João Voltani",
                areaTrabalho: "Head of Engineering at TRACTIAN",
                twitterName: "",
                twitterURL: "",
                linkedinName: "João Voltani",
                linkedinURL: "https://www.linkedin.com/in/volt/?originalSubdomain=br",
                bio: "Head of Engineering at TRACTIAN"
            },
            {
                id: 13,
                nome: "Seja Power com o Microsoft Power BI",
                descricao: "Neste workshop falarei sobre como o Power BI pode ajudar você a ser mais produtivo, ter muito mais autonomia e automatizar tarefas com esta incrível ferramenta. Falarei também sobre como ele pode guinar a sua carreira, te transformando em um excelente analista de dados. Teremos um case ao vivo com os participantes.",
                link: "https://www.youtube.com/c/MaisQuePlanilhas/videos",
                link2: "https://www.youtube.com/watch?v=UFGe25gydxo",
                link3: "https://www.youtube.com/watch?v=merUYMASzWw",
                nomePalestrante: "Luis Gustavo Serra",
                areaTrabalho: "Microsoft MVP Data Plataform",
                twitterName: "",
                twitterURL: "",
                linkedinName: "Luís Gustavo Serra",
                linkedinURL: "https://www.linkedin.com/in/luisgnserra/",
                bio: "CEO Excelência Soluções | Microsoft MVP | MCT | MTAC | PUG Brasil Leader | Power Bi Expert | Writer | Speaker | BI Specialist."
            }
        ]
    }
});