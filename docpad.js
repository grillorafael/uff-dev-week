module.exports = {

    prompts: false,

    // These are variables will be accessible via our templates
    templateData: {

        // Conference info
        conf: {
            name: "UFF - DevWeek",
            description: "UFF Dev Week é um evento que ocorre todos os anos na Universidade Federal Fluminense (UFF) sobre novas tecnologias na área de TI.",
            date: "25 a 27 de Novembro",
            // If your event is free, just comment this line
            //   price: "$100",
            venue: "Universidade Federal Fluminense",
            address: "Rua Passo da Pátria 156, Niterói - RJ, Instituto de Computação",
            city: "Niterói",
            state: "Rio de Janeiro"
        },

        // The Call To Action button at the header,
        // If you don't want this, just remove the callToAction property.
        callToAction: {
            text: "Inscrições Encerradas",
            link: "#"
        },

        // "Fork me on GitHub", if you don't want this, just remove the forkButton property
        /*forkButton: {
            repository: "https://github.com/braziljs/conf-boilerplate"
        },*/

        // Site info
        site: {
            theme: "yellow-swan",
            url: "http://dacc.ic.uff.br/devweek/"//,
            //googleanalytics: "UA-33656081-1"
        },

        // Active sections on the website
        // to deactivate comment out with '//'
        // you can also change order here and it will reflect on page
        sections: [
            'about',
            'location',
            'speakers',
            'schedule',
            'sponsors'
            // 'contact'
        ],

        // Labels which you can translate to other languages
        labels: {
            about: "Sobre",
            location: "Local",
            speakers: "Oradores",
            schedule: "Agenda",
            sponsors: "Realização",
            partners: "Apoio",
            contact: "Contato"
        },

        // The entire schedule
        schedule: {
            '2015-11-25': [
                {
                    name: "Marcelo",
                    //photo: "https://scontent-b-gru.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/388713_103631623090321_580321021_n.jpg?oh=e3ce0a1e6f458ccda43f86564a27a65f&oe=54C308EE",
                    //bio: "Leandro A. F. Fernandes é Bacharel em Ciência da Computação pela Fundação Universidade Regional de Blumenau (FURB, 2002), Mestre em Ciência da Computação pela Universidade Federal do Rio Grande do Sul (UFRGS, 2006) e Doutor em Ciência da Computação pela UFRGS (2010). Realizou estágio pós-doutoral na UFRGS entre 2010 e 2011. Atualmente é Professor Adjunto no Departamento de Ciência da Computação da Universidade Federal Fluminense (DCC-UFF). É membro da Sociedade Brasileira de Computação (SBC) desde a graduação e membro da Association for Computing Machinery (ACM). É o atual Representante Institucional da SBC na UFF.",
                    //company: "SBC",
                    // link: {
                    //     href: "http://github.com/billy95",
                    //     text: "@billy95"
                    // },
                    presentation: {
                        title: "Coleta de Grandes Volumes de Dados Não Homogêneos",
                        //description: "A Semana da SBC ocorre junto com as semanas acadêmicas das instituições com representação institucional, incluse a UFF, e tem como objetivo viabilizar um espaço onde todas as regionais desta Sociedade divulguem as ações da SBC em prol da comunidade. Com uma forte divulgação sincronizada em todo o Brasil, busca-se criar uma consciência, principalmente entre os estudantes, da dimensão alcançada pela SBC referente às diversas atividades que esta se propõe dentro do âmbito científico, político, educativo e social para o desenvolvimento do Brasil.",
                        time: "9h"
                    }
                },
            {
                name: "Vitor",
                //photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c0.0.286.286/542641_435709456511800_47571938_n.jpg?oh=7cdbedc30e5870b22673f0d7b2b78dd2&oe=54C91385&__gda__=1418140616_b97c82ea69ac4607fa91909dc952c10e",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                //company: "SEO Master",
                // link: {
                //     href: "http://github.com/billy95",
                //     text: "@billy95"
                // },
                presentation: {
                    //title: "Como desenvolver sistemas otimizados para o Google",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "10h"
                }
            }, 
	    //{
            //    name: "Coffe-break",
            //    time: "10h30"
            //}, 
            {
                name: "Wagner Guimaraes",
                //photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/1538774_746261605441823_6958272133022325098_n.jpg?oh=f3df36bfdb0b8a68455797b216a416eb&oe=5484600B&__gda__=1419319209_1d7a653396c99baee70dcd9153963883",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                //company: "Moca",
                // link: {
                //     href: "http://twitter.com/littlechuck",
                //     text: "@littlechuck"
                // },
                presentation: {
                    title: "Desenvolvimento mobile e ágil ",
                    description: "Vamos abordar como os diferentes papeis em um time ágil e multidisciplinar, mais especificamente UXers e desenvolvedores, interagem para criar um produto mobile. Pretendemos falar sobre as tarefas e responsabilidades de cada papel, destacando a importância da experiência do usuário e de boas práticas de desenvolvimento para aumentar as chances de sucesso.",
                    time: "11h00"
                }
//            }, {
//                name: "Pedro Marins",
//                photo: "https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/1482816_631420226922650_435650234_n.jpg?oh=eaa987b3badd06e0e336487fe8bdd4ae&oe=54865666&__gda__=1418249701_f1652e063d3a8c4d206e18cda9dcd6ab",
//                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
//                //company: "Apple, Inc.",
//                // link: {
//                //     href: "http://github.com/stevie",
//                //     text: "@stevie"
//                // },
//                presentation: {
//                    title: "Ganhando dinheiro de pijama",
//                    description: "Uma breve história de como troquei 3h diárias dentro de ônibus pelo home office e como trabalhar remoto com liberdade. Um passo a passo do que fiz para conquistar a minha independência profissional.",
//                    time: "11h45"
//                }
            }, /*{
                name: "Almoço",
                time: "12h30"
            },*/
            {
                name: "Luiz",
                //photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c170.50.621.621/s320x320/539274_490450604303633_1043605826_n.jpg?oh=06a3bd82c472b352fcbbb68ddec76359&oe=54C631F4&__gda__=1422482519_e0a146c387471252ad817b9f47e249a3",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                //company: "COPPE / UFRJ",
                // link: {
                //     href: "http://twitter.com/zuck",
                //     text: "@zuck"
                // },
                presentation: {
                    //title: "Desenvolvendo em NodeJS",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "12h"
                }
            }, {
                name: "Almoço",
                time: "13h"
            },
            {
                name: "Halyson Lima",
                //photo: "http://dacc.ic.uff.br/fotos/foto_wanderson.jpg",
                //bio: "Wanderson Trindade empreendedor, pesquisador e curioso na área de tecnologia.Representante do Projeto Universitário Acima da Média, no estado do Rio de Janeiro.Graduando em Sistemas de Informação da Universidade Federal Fluminense. Participou de Hackathons pelo Brasil a fora. Veterano convicto do maior evento de tecnologia e inovação do Brasil a Campus Party. Consultor Dell Experts e Google Partners. Participante de projetos de pesquisa na UFF e de startups no Brasil.Cofundador da startup WT parceira do Movimento Arte Expressa.",
                company: "Concrete Solutions",
                // link: {
                //     href: "http://twitter.com/zuck",
                //     text: "@zuck"
                // },
                presentation: {
                    title: "Desmitificando Teste Unitários no Android",
                    description: "Vamos fazer uma introdução sobre os tipos de teste existente e fazer um introdução dos frameworks utilizados para realizar teste unitário na plataforma Android. Pretendemos fazer um live coding, escrevendo teste unitários e como executar.",
                    time: "14h00"
                }
            },
            {
                name: "Bruna Esteves",
                //photo: "http://en.gravatar.com/userimage/685245/2facffb27028a9a47863ce119dbbd1f1.png?size=200 ",
                //bio: "Henrique Bastos é inquieto e eupreendedor. Aplica tecnologia em software para iniciativas em rede que promovem autonomia de pessoas comuns. Além disso atua constantemente nas comunidades de programadores organizando, ministrando palestras, cursos e evangelizando o empoderamento através do desenvolvimento software, no Brasil e no exterior. ",
                company: "Concrete Solutions",
                //link: {
                //     href: "https://twitter.com/henriquebastos",
                //     text: "@henriquebastos"
                //},
                presentation: {
                    //title: "Agilidade e Empreendedorismo: como isso pode revolucionar a sua carreira",
                    //description: "O foco dessa palestra é você, aluno! Muito já se fala de agilidade, empreendedorismo e carreira. Mas o que isso tem haver com você? Como você pode aprender na prática estes assuntos e viver a vida nos seus próprios termos? Venha bater um papo reto e informal, e não esqueça de trazer as suas dúvidas e questões polêmicas.",
                    time: "15h"
                }
            }],
            '2014-11-26': [
            {
                name: "Samanta",
                // photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/1538774_746261605441823_6958272133022325098_n.jpg?oh=f3df36bfdb0b8a68455797b216a416eb&oe=5484600B&__gda__=1419319209_1d7a653396c99baee70dcd9153963883",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "InsideOut",
                // link: {
                //     href: "http://twitter.com/linus",
                //     text: "@linus"
                // },
                presentation: {
                    // title: "m-commerce para o perfil da américa latina",
                    // description: "O mobile commerce é a próxima evolução do e-commerce e já estamos presenciando-a. Como a venda de dispositivos móveis cresceu 6x no ultimo ano, precisamos entender melhor como o nosso público reage ao contexto onde as aplicações deve ser re-planejadas para a condição social latino americana.",
                    time: "9h00"
                }
            },
            {
                name: "Ana",
                // photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/1538774_746261605441823_6958272133022325098_n.jpg?oh=f3df36bfdb0b8a68455797b216a416eb&oe=5484600B&__gda__=1419319209_1d7a653396c99baee70dcd9153963883",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "InsideOut",
                // link: {
                //     href: "http://twitter.com/linus",
                //     text: "@linus"
                // },
                presentation: {
                    // title: "m-commerce para o perfil da américa latina",
                    // description: "O mobile commerce é a próxima evolução do e-commerce e já estamos presenciando-a. Como a venda de dispositivos móveis cresceu 6x no ultimo ano, precisamos entender melhor como o nosso público reage ao contexto onde as aplicações deve ser re-planejadas para a condição social latino americana.",
		            time: "10h"
                }
            },
            {
                name: "Raíssa Bastos",
                // photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.0.320.320/p320x320/10629872_749020281828959_738727163159492986_n.jpg?oh=61a913c03aed1622882006294ff36b3a&oe=54C6D659&__gda__=1418868988_cccb1d5bf7056eeaff4a1498c80f7b26",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                // company: "Secretaria Municipal de Saúde do Rio de Janeiro",
                // link: {
                //     href: "http://twitter.com/littlechuck",
                //     text: "@littlechuck"
                // },
                presentation: {
                    title: "Bate Papo Sobre o Mercado",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "11h00"
                }
            },{
                name: "Afonso",
                //photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.0.320.320/p320x320/10629872_749020281828959_738727163159492986_n.jpg?oh=61a913c03aed1622882006294ff36b3a&oe=54C6D659&__gda__=1418868988_cccb1d5bf7056eeaff4a1498c80f7b26",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                // company: "STI",
                // link: {
                //     href: "http://twitter.com/littlechuck",
                //     text: "@littlechuck"
                // },
                presentation: {
                    title: "Softawre Livre",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "12h"
                }
            }, {
                name: "Almoço",
                time: "13h"
            }, {
                name: "Raphael Amorim",
                // photo: "https://lh3.googleusercontent.com/-jrC5p8Z3Aiw/AAAAAAAAAAI/AAAAAAAAABs/LYJuFPN-jeQ/photo.jpg",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                // company: "Cortex/Synapse",
                // link: {
                //     href: "http://twitter.com/zuck",
                //     text: "@zuck"
                // },
                presentation: {
                    title: "Intro to Clojure",
                    description: "Vamos falar um pouco sobre a história da linguagem e introduzir conceitos de programação funcional. Clojure é uma variante moderna de Lisp e roda na Java Virtual Machine ou CLR. Integra-se perfeitamente com bibliotecas Java e .NET e tem sido usada para resolver problemas complexos.",
                    time: "14h00"
                }
            },
            {
                name: "Willian",
                // photo: "https://lh3.googleusercontent.com/-jrC5p8Z3Aiw/AAAAAAAAAAI/AAAAAAAAABs/LYJuFPN-jeQ/photo.jpg",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                // company: "Cortex/Synapse",
                // link: {
                //     href: "http://twitter.com/zuck",
                //     text: "@zuck"
                // },
                presentation: {
                    title: "Como se Tornar Um Desenvolvedor Front-End",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "15h00"
                }
            },
	       {
                name: "Richard",
                // photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c13.12.155.155/1511003_10202709339471337_1685616813_n.jpg?oh=7513e7f6c3c5683301beca1ff6bed32a&oe=548724FB&__gda__=1417888592_08410c20049248aa9de278fe63c4c428",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                // company: "Globo.com",
                // link: {
                //     href: "http://twitter.com/zuck",
                //     text: "@zuck"
                // },
                presentation: {
                    title: "Visualização de Dados",
                    description: "Conheça um pouco mais sobre a cultura open source e como ela pode te ajudar a ser um programador melhor.",
                    time: "16h30"
                }
            }],
            '2014-11-27': [
	       /*{
                name: "André Garzia",
                photo: "https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/1779194_10153074804907195_1512928922_n.jpg?oh=798464a3f8710e8b4eeff7f231f86789&oe=54C9744F&__gda__=1423000722_8af195e38f02ac93c5240fb87228352f",
                bio: "Andre Garzia é de Niterói e trabalha com desenvolvimento de apps mobile e front-end. Como Representante Mozilla ele faz parte do Firefox OS Launch Team e atua no fomento ao desenvolvimento de open web apps. Recentemente lançou seu segundo livro sobre Firefox OS chamado 'Building Games For Firefox OS'. Quando sobra tempo prefere uma cuba libre e quadrinhos.",
                company: "Mozilla Brasil",
                // link: {
                //     href: "http://twitter.com/linus",
                //     text: "@linus"
                // },
                presentation: {
                    title: "Firefox OS",
                    description: "Vamos conhecer o Firefox OS do ponto de vista de desenvolvimento e mostrar como Open Web Apps são a melhor opção para a criação de software multi plataforma.",
                    time: "9h45"
                }
            },*/{
                name: "Bernardo Santos",
                // photo: "themes/yellow-swan/img/speaker.jpg",
                // bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                // company: "Microsoft",
                // link: {
                //     href: "http://github.com/billy95",
                //     text: "@billy95"
                // },
                presentation: {
                    // title: "Introducing Windows 12",
                    // description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "10h"
                }
            },/* {
                name: "Coffe-break",
                time: "10h30"
            }, */{
                name: "Wanderson Trindade",
                // photo: "http://dacc.ic.uff.br/fotos/cicero_tjwrs.png",
                // bio: "Cícero Nogueira dos Santos é Pesquisador na IBM Research - Brazil, onde atua na aplicação de aprendizado de máquina e mineração de dados para resolver problemas da áreas de processamento de linguagem natural e descoberta e exploração inteligente de recursos naturais . Antes de ingressar na IBM Research, Cícero foi professor-pesquisador da Universidade de Fortaleza (UNIFOR), tendo orientado alunos dos programas de graduação e pós-graduação em ciência da computação. Possui Doutorado em Informática pela Pontifícia Universidade Católica do Rio de Janeiro – PUC-Rio (2009), e Mestrado em Sistemas e Computação pelo Instituto Militar de Engenharia – IME (2005). Recentemente a sua pesquisa está focada no desenvolvimento de métodos de Deep Learning para processamento de linguagem natural.",
                // company: "IBM",
                // link: {
                //      href: "http://researcher.watson.ibm.com/researcher/view.php?person=br-cicerons ",
                //      //text: "@littlechuck"
                // },
                presentation: {
                    title: "Alavancando a sua marca pessoal",
                    description: "Como um estudante da área TI pode desenvolvê-la, superar as barreiras estabelecidas pelo seu meio e participar de projetos com impacto claro na sociedade.",
                    time: "11h00"
                }
            }, {
                name: "Gabriel Bastos",
                // photo: "http://dacc.ic.uff.br/semanacademica/wp-content/themes/shaper_helix_ii/images/leobeto.jpg",
                // bio: "Mais conhecido como Leobetosouza, já abandonou um curso de Ciência da Computação e hoje cursa Sistemas de Informação na UFF. Trabalhou como desenvolvedor front-end por 7 anos e hoje é Desenvolvedor Perl da Estante Virtual. Já palestrou no RioJS, SampaJS e 7Masters. Membro do DojoRio, RioAgile, Rio-PM e um dos administradores da RioJS.",
                // company: "Estante Virtual",
                /*link: {
                    href: "http://github.com/stevie",
                    text: "@stevie"
                },*/
                presentation: {
                    title: "Murb - Interação Entre Cidade e Museu",
                    // description: "Programador é um nerd que não sabe interagir? Fica o tempo todo na frente do computador e nunca saí de casa? É tímido, sem jeito e quase não tem amigos? Muitos são. Mas existem muitos que resolvem viver em comunidade, dividir conhecimento e se divertir com isso. Nessa palestra vou falar um pouco do que aprendi e ganhei com comunidades de desenvolvedores e incentivar os programadores a saírem da caverna e conhecer o mundo das comunidades de desenvolvedores.",
                    time: "12h"
                }
            }, /*{
                name: "Almoço",
                time: "12h30"
            }, */{
                name: "Igor Souza",
                // photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c51.0.320.320/p320x320/1450310_10202142825552740_85057262_n.jpg?oh=9285bb131e44deeaf7e97bdc9002a297&oe=54CA68F2&__gda__=1418170033_1f91368c589b165fc68e582f89e60a59",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                // company: "STI",
                // link: {
                //     href: "http://twitter.com/zuck",
                //     text: "@zuck"
                // },
                presentation: {
                    // title: "Scikit: Machine Learning em Python",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "14h00"
                }
            }/*, {
                name: "Simone Martins",
                photo: "http://www.ic.uff.br/images/departamento/docentes/IC-Docentes-Simone.png",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "GE",
                /*link: {
                    href: "http://twitter.com/woz",
                    text: "@woz"
                },*/
                // presentation: {
                //     title: "Pesquisa Operacional",
                //     //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                //     time: "15h00"
                // }
            /*}, {
                name: "Coffee-break",
                time: "16h00"
            }, {
                name: "Todos",
                photo: "themes/yellow-swan/img/speaker.jpg",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                //company: "Facebook",
                // link: {
                //     href: "http://twitter.com/zuck",
                //     text: "@zuck"
                // },
                presentation: {
                    title: "CompMusic",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "16h30"
                }
            },
                 {
                 name: "Marcelo Jachelli",
                 photo: "http://dacc.ic.uff.br/semanacademica/wp-content/themes/shaper_helix_ii/images/marcelojachelli.jpg",
                 bio: "Analista de sistemas formado pela PUC-Rio com MBA em Gestão de projetos pelo IBMEC. Possui mais de 10 anos de experiência em gerenciamento de projetos de TI com atuação em empresas de diferentes segmentos como: Petrobras, Oi, Citibank, Bradesco Seguros, Aracruz, entre outras. Atualmente é Gerente de projetos do ADDLabs (laboratório de Documentação Ativa e Design Inteligente do Instituto de Computação da Universidade Federal Fluminense – Especializado em IHC e inteligência artificial).",
                 company: "ADDLABS",
                 /*link: {
                 href: "https://twitter.com/henriquebastos    ",
                 text: "@henriquebastos"
                 },
                presentation: {
                    title: "Gerência de Projetos",
                    description: "Serão apresentados os principais conceitos do gerenciamento de projetos, as áreas de conhecimento, estratégias de gerenciamento, características da carreira, habilidades necessárias e desafios do profissional de gerenciamento de projetos.",
                    time: "17h30"
                }
            }*/]]
        },

        // List of Sponsors
        sponsors: [
            {
                name: "DACC",
                logo: "http://dacc.ic.uff.br/semanacademica/wp-content/uploads/2013/10/logodacc.jpg",
                url: "https://www.facebook.com/daccuff"
            },
            {
                name: "Instituto de Computação",
                logo: "http://dacc.ic.uff.br/semanacademica/wp-content/uploads/2013/10/logoic.jpg",
                url: "http://www.ic.uff.br/index.php/pt/"
            },
            {
                name: "Universidade Federal Fluminense",
                logo: "http://dacc.ic.uff.br/semanacademica/wp-content/uploads/2013/10/logouff.jpg",
                url: "http://www.uff.br/"
            }
        ],

        // List of Partners
        partners: [{
            name: "CHOICE",
            logo: "http://dacc.ic.uff.br/semanacademica/wp-content/uploads/2013/10/choice.jpg",
            url: "http://www.choice.org.br/"
        },{
            name: "Welcome To The Django",
            logo: "https://lh5.ggpht.com/23fZS5mCk0KnCsW24ijqO-rAy97EOOjdumeqsqXTWDY6K2V5-HD4kdYJTHa3QXHKsdFBLbmOTzkH0y7PsYMX=s0",
            url: "http://welcometothedjango.com.br/novidades/ "
        },{
            name: "SEO Master",
            logo: "http://www.seomaster.com.br/wp-content/themes/seomaster/images/logo-seomaster.png",
            url: "http://www.seomaster.com.br/"
        },{
            name: "Estante Virtual",
            logo: "http://static2.estantevirtual.com.br/imagens/logo_estante.png",
            url: "http://www.estantevirtual.com.br/"
        },{
            name: "Laboratório MídiaCom",
            logo: "http://www.gta.ufrj.br/novo_gta/images/Logos/midiacom.jpg",
            url: "http://www.midiacom.uff.br/"
        }],

        // Theme path
        getTheme: function() {
            return "themes/" + this.site.theme;
        },

        // Site Path
        getUrl: function() {
            return this.site.url;
        }
    }
};
