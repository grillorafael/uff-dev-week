module.exports = {

    prompts: false,

    // These are variables will be accessible via our templates
    templateData: {

        // Conference info
        conf: {
            name: "UFF - DevWeek",
            description: "UFF Dev Week é um evento que ocorre todos os anos na Universidade Federal Fluminense (UFF) sobre novas tecnologias na área de TI.",
            date: "13 a 17 de Outubro",
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
            text: "Inscreva-se!",
            link: "https://docs.google.com/forms/d/1KbGWL_tyZ1Akf00WZnPHLBB6kQz_Wg3YDifoNHf-9ks/viewform"
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
            'sponsors',
            'partners'
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
            '2014-10-13': [
                {
                    name: "Leandro A. F. Fernandes",
                    photo: "https://scontent-b-gru.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/388713_103631623090321_580321021_n.jpg?oh=e3ce0a1e6f458ccda43f86564a27a65f&oe=54C308EE",
                    bio: "Leandro A. F. Fernandes é Bacharel em Ciência da Computação pela Fundação Universidade Regional de Blumenau (FURB, 2002), Mestre em Ciência da Computação pela Universidade Federal do Rio Grande do Sul (UFRGS, 2006) e Doutor em Ciência da Computação pela UFRGS (2010). Realizou estágio pós-doutoral na UFRGS entre 2010 e 2011. Atualmente é Professor Adjunto no Departamento de Ciência da Computação da Universidade Federal Fluminense (DCC-UFF). É membro da Sociedade Brasileira de Computação (SBC) desde a graduação e membro da Association for Computing Machinery (ACM). É o atual Representante Institucional da SBC na UFF.",
                    company: "SBC",
                    // link: {
                    //     href: "http://github.com/billy95",
                    //     text: "@billy95"
                    // },
                    presentation: {
                        title: "SBC para estudantes",
                        description: "A Semana da SBC ocorre junto com as semanas acadêmicas das instituições com representação institucional, incluse a UFF, e tem como objetivo viabilizar um espaço onde todas as regionais desta Sociedade divulguem as ações da SBC em prol da comunidade. Com uma forte divulgação sincronizada em todo o Brasil, busca-se criar uma consciência, principalmente entre os estudantes, da dimensão alcançada pela SBC referente às diversas atividades que esta se propõe dentro do âmbito científico, político, educativo e social para o desenvolvimento do Brasil.",
                        time: "9h45"
                    }
                },
            {
                name: "Gustavo Honorato",
                photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c0.0.286.286/542641_435709456511800_47571938_n.jpg?oh=7cdbedc30e5870b22673f0d7b2b78dd2&oe=54C91385&__gda__=1418140616_b97c82ea69ac4607fa91909dc952c10e",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "SEO Master",
                // link: {
                //     href: "http://github.com/billy95",
                //     text: "@billy95"
                // },
                presentation: {
                    title: "Como desenvolver sistemas otimizados para o Google",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "9h45"
                }
            }, 
	    //{
            //    name: "Coffe-break",
            //    time: "10h30"
            //}, 
            {
                name: "Lázaro Alvarenga",
                photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/1538774_746261605441823_6958272133022325098_n.jpg?oh=f3df36bfdb0b8a68455797b216a416eb&oe=5484600B&__gda__=1419319209_1d7a653396c99baee70dcd9153963883",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Dzaine",
                // link: {
                //     href: "http://twitter.com/littlechuck",
                //     text: "@littlechuck"
                // },
                presentation: {
                    title: "UX",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
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
            }, {
                name: "Almoço",
                time: "12h30"
            },
            {
                name: "Raul Sena",
                photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c170.50.621.621/s320x320/539274_490450604303633_1043605826_n.jpg?oh=06a3bd82c472b352fcbbb68ddec76359&oe=54C631F4&__gda__=1422482519_e0a146c387471252ad817b9f47e249a3",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "COPPE / UFRJ",
                // link: {
                //     href: "http://twitter.com/zuck",
                //     text: "@zuck"
                // },
                presentation: {
                    title: "Desenvolvendo em NodeJS",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "14h00"
                }
            },
            {
                name: "Wanderson Trindade",
                photo: "http://dacc.ic.uff.br/fotos/foto_wanderson.jpg",
                bio: "Wanderson Trindade empreendedor, pesquisador e curioso na área de tecnologia.Representante do Projeto Universitário Acima da Média, no estado do Rio de Janeiro.Graduando em Sistemas de Informação da Universidade Federal Fluminense. Participou de Hackathons pelo Brasil a fora. Veterano convicto do maior evento de tecnologia e inovação do Brasil a Campus Party. Consultor Dell Experts e Google Partners. Participante de projetos de pesquisa na UFF e de startups no Brasil.Cofundador da startup WT parceira do Movimento Arte Expressa.",
                company: "UAM",
                // link: {
                //     href: "http://twitter.com/zuck",
                //     text: "@zuck"
                // },
                presentation: {
                    title: "Universidade X Mercado: Dilemas que todo universitário da área de TI passa. Como vencê-los e levar uma vida legal?",
                    description: "Como eterno estudante, na área de tecnologia. Passei este dilema, desde o primeiro dia que começaram as minha aulas na universidade. Por meio, de participações em n eventos e workshops tanto no âmbito acadêmico e de mercado. Desenvolvi técnicas e conheci iniciativas que me ajudaram a superá-lo.Nesta palestra serão apresentadas. E você verá que não é um bicho de sete cabeça.",
                    time: "15h00"
                }
            },
            //{
            //    name: "Coffe-break",
            //    time: "10h30"
            //},
            {
                name: "Henrique Bastos",
                photo: "http://en.gravatar.com/userimage/685245/2facffb27028a9a47863ce119dbbd1f1.png?size=200 ",
                bio: "Henrique Bastos é inquieto e eupreendedor. Aplica tecnologia em software para iniciativas em rede que promovem autonomia de pessoas comuns. Além disso atua constantemente nas comunidades de programadores organizando, ministrando palestras, cursos e evangelizando o empoderamento através do desenvolvimento software, no Brasil e no exterior. ",
                company: "Welcome To The Django",
                link: {
                     href: "https://twitter.com/henriquebastos",
                     text: "@henriquebastos"
                },
                presentation: {
                    title: "Agilidade e Empreendedorismo: como isso pode revolucionar a sua carreira",
                    description: "O foco dessa palestra é você, aluno! Muito já se fala de agilidade, empreendedorismo e carreira. Mas o que isso tem haver com você? Como você pode aprender na prática estes assuntos e viver a vida nos seus próprios termos? Venha bater um papo reto e informal, e não esqueça de trazer as suas dúvidas e questões polêmicas.",
                    time: "16h30"
                }
            },
                {
                    name: "Pedro Marins",
                    photo: "https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/1482816_631420226922650_435650234_n.jpg?oh=eaa987b3badd06e0e336487fe8bdd4ae&oe=54865666&__gda__=1418249701_f1652e063d3a8c4d206e18cda9dcd6ab",
                    //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    //company: "Apple, Inc.",
                    // link: {
                    //     href: "http://github.com/stevie",
                    //     text: "@stevie"
                    // },
                    presentation: {
                        title: "Ganhando dinheiro de pijama",
                        description: "Uma breve história de como troquei 3h diárias dentro de ônibus pelo home office e como trabalhar remoto com liberdade. Um passo a passo do que fiz para conquistar a minha independência profissional.",
                        time: "17h30"
                    }
                },
            /*, {
                name: "Steve Wozniak",
                photo: "themes/yellow-swan/img/speaker.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Apple, Inc.",
                link: {
                    href: "http://twitter.com/woz",
                    text: "@woz"
                },
                presentation: {
                    title: "Why do I prefer Android over iPhone",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "15h00"
                }
            }, {
                name: "Coffee-break",
                time: "16h00"
            }, {
                name: "Mark Zuckerberg",
                photo: "themes/yellow-swan/img/speaker.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Facebook",
                // link: {
                //     href: "http://twitter.com/zuck",
                //     text: "@zuck"
                // },
                presentation: {
                    title: "Revealing Facebook Secrets",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "16h30"
                }
            },{
                name: "Mark Zuckerberg",
                photo: "themes/yellow-swan/img/speaker.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Facebook",
                // link: {
                //     href: "http://twitter.com/zuck",
                //     text: "@zuck"
                // },
                presentation: {
                    title: "Revealing Facebook Secrets",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "17h30"
                }
            }*/],
            '2014-10-14': [
            {
                name: "Lázaro Alvarenga",
                photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/1538774_746261605441823_6958272133022325098_n.jpg?oh=f3df36bfdb0b8a68455797b216a416eb&oe=5484600B&__gda__=1419319209_1d7a653396c99baee70dcd9153963883",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Dzaine",
                // link: {
                //     href: "http://twitter.com/linus",
                //     text: "@linus"
                // },
                presentation: {
                    title: "M-Commerce",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "9h00"
                }
            }, /*{
                name: "Bill Gates",
                photo: "themes/yellow-swan/img/speaker.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Microsoft",
                link: {
                    href: "http://github.com/billy95",
                    text: "@billy95"
                },
                presentation: {
                    title: "Introducing Windows 12",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "9h45"
                }
            }, */
            {
                name: "Lázaro Alvarenga",
                photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/1538774_746261605441823_6958272133022325098_n.jpg?oh=f3df36bfdb0b8a68455797b216a416eb&oe=5484600B&__gda__=1419319209_1d7a653396c99baee70dcd9153963883",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Dzaine",
                // link: {
                //     href: "http://twitter.com/linus",
                //     text: "@linus"
                // },
                presentation: {
                    title: "M-Commerce",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "9h45"
                }
            },
            //{
            //    name: "Coffe-break",
            //    time: "10h30"
            //}, 
            {
                name: "Pedro Polisenso",
                photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.0.320.320/p320x320/10629872_749020281828959_738727163159492986_n.jpg?oh=61a913c03aed1622882006294ff36b3a&oe=54C6D659&__gda__=1418868988_cccb1d5bf7056eeaff4a1498c80f7b26",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Secretaria Municipal de Saúde do Rio de Janeiro",
                // link: {
                //     href: "http://twitter.com/littlechuck",
                //     text: "@littlechuck"
                // },
                presentation: {
                    title: "Em um relacionamento sério com generators Frontend",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "11h00"
                }
            },{
                name: "Marcos Cortês",
                //photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.0.320.320/p320x320/10629872_749020281828959_738727163159492986_n.jpg?oh=61a913c03aed1622882006294ff36b3a&oe=54C6D659&__gda__=1418868988_cccb1d5bf7056eeaff4a1498c80f7b26",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "STI",
                // link: {
                //     href: "http://twitter.com/littlechuck",
                //     text: "@littlechuck"
                // },
                presentation: {
                    title: "Angular.JS e Arquitetura Rest",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "11h45"
                }
            }, {
                name: "Almoço",
                time: "12h30"
            }, {
                name: "Christian Aranha",
                photo: "https://lh3.googleusercontent.com/-jrC5p8Z3Aiw/AAAAAAAAAAI/AAAAAAAAABs/LYJuFPN-jeQ/photo.jpg",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Cortex/Synapse",
                // link: {
                //     href: "http://twitter.com/zuck",
                //     text: "@zuck"
                // },
                presentation: {
                    title: "Big data e Web 3.0",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "14h00"
                }
            },
            {
                name: "Christian Aranha",
                photo: "https://lh3.googleusercontent.com/-jrC5p8Z3Aiw/AAAAAAAAAAI/AAAAAAAAABs/LYJuFPN-jeQ/photo.jpg",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Cortex/Synapse",
                // link: {
                //     href: "http://twitter.com/zuck",
                //     text: "@zuck"
                // },
                presentation: {
                    title: "Big data e Web 3.0",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "15h00"
                }
            },
            //{
            //    name: "Coffee-break",
            //    time: "16h00"
            //}, 
	    {
                name: "Thiago Pontes",
                photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c13.12.155.155/1511003_10202709339471337_1685616813_n.jpg?oh=7513e7f6c3c5683301beca1ff6bed32a&oe=548724FB&__gda__=1417888592_08410c20049248aa9de278fe63c4c428",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Globo.com",
                // link: {
                //     href: "http://twitter.com/zuck",
                //     text: "@zuck"
                // },
                presentation: {
                    title: "Open Source",
                    description: "Conheça um pouco mais sobre a cultura open source e como ela pode te ajudar a ser um programador melhor.",
                    time: "16h30"
                }
            },{
                name: "Esteban Clua",
                bio: "Esteban Clua é professor da Universidade Federal Fluminense e coordenador geral do UFF Medialab, bolsista de produtividade DT 2 pelo CNPq e vice-diretor do Instituto de Computação da UFF. Possui graduação em Computação pela Universidade de São Paulo, mestrado em Informática pela PUC-Rio e doutorado em Informática pela PUC-Rio. Sua área de atuação está especialmente focada na área de Computação Gráfica tempo real, Video Games, Realidade Virtual, GPUs, visualização e simulação. É um dos fundadores do SBGames, pela SBC, Diretor de Academia da IGDA Rio e professor honrorário da NVIDIA. Desde 2010 é presidente da comissão especial de Jogos e entretenimento digital da SBC. Em 2007 recebeu o prêmio da ABRAGAMES como o maior contribuidor da academia para a indústria de jogos digitais no Brasil. É professor colaborador da Florida International University (EUA) desde 2008, pesquisador colaborador do grupo Camera Cultura, do Medialab MIT e pesquisador colaborador da Universidade Católica do Peru. Esteban é membro do comitê de programa das mais importanes conferencias na área de entretenimento digital. Em 2013 recebeu a nomeação de jovem cientista do nosso estado (Rio de Janeiro). Atualmente é coordenador do Centro de Excelência da NVIDIA no Brasil, que funciona no departamento de computação da Universidade Federal Fluminense e que ainda é o único centro com esta chancela na America Latina. Esteban é o diretor da Casa da Ciência Virtual, instalado na Universidade Federal Fluminense, com projetos para difusão da ciência para escolas mediante jogos e realidade virtual e é do conselho da Agencia de Inovação da mesma universidade",
                photo: "http://dacc.ic.uff.br/fotos/foto_3.jpg",
                company: "UFF - MediaLab",
                link:{
                    href: "www.ic.uff.br/~esteban",
                    text: "Esteban Clua"
                },
                presentation: {
                    title: "Nvidia",
                    description: "",
                    time: "17h30"
                }
            }],
            '2014-10-16': [
	    //{
            //    name: "Raphael Menezes",
            //    photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.0.320.320/p320x320/10534518_10152144893827511_8821135898542613309_n.jpg?oh=add28034c6aeaec726ac647106452b81&oe=54B6C0C2&__gda__=1422388992_ba524d889c3296e6113b75f4fcbec0e0",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
            //    company: "Petrobrás",
                // link: {
                //     href: "http://twitter.com/linus",
                //     text: "@linus"
                // },
            //    presentation: {
            //        title: "Gestão de perfomance de aplicações java em ambiente de produção e experiência do usuário",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
            //        time: "9h00"
            //   }
            //},
	    {
                name: "André Garzia",
                photo: "https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/1779194_10153074804907195_1512928922_n.jpg?oh=798464a3f8710e8b4eeff7f231f86789&oe=54C9744F&__gda__=1423000722_8af195e38f02ac93c5240fb87228352f",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Mozilla Brasil",
                // link: {
                //     href: "http://twitter.com/linus",
                //     text: "@linus"
                // },
                presentation: {
                    title: "Firefox OS",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "9h45"
                }
            }, /*{
                name: "Bill Gates",
                photo: "themes/yellow-swan/img/speaker.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Microsoft",
                link: {
                    href: "http://github.com/billy95",
                    text: "@billy95"
                },
                presentation: {
                    title: "Introducing Windows 12",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "9h45"
                }
            }, {
                name: "Coffe-break",
                time: "10h30"
            }, */{
                name: "Cícero Santos",
                //photo: "themes/yellow-swan/img/speaker.jpg",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "IBM",
                // link: {
                //     href: "http://twitter.com/littlechuck",
                //     text: "@littlechuck"
                // },
                presentation: {
                    title: "Processamento de Linguagem Natural com Deep Learning",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "11h00"
                }
            }, {
                name: "Leonardo Alberto Souza",
                photo: "http://dacc.ic.uff.br/semanacademica/wp-content/themes/shaper_helix_ii/images/leobeto.jpg",
                bio: "Mais conhecido como Leobetosouza, já abandonou um curso de Ciência da Computação e hoje cursa Sistemas de Informação na UFF. Trabalhou como desenvolvedor front-end por 7 anos e hoje é Desenvolvedor Perl da Estante Virtual. Já palestrou no RioJS, SampaJS e 7Masters. Membro do DojoRio, RioAgile, Rio-PM e um dos administradores da RioJS.",
                company: "Estante Virtual",
                /*link: {
                    href: "http://github.com/stevie",
                    text: "@stevie"
                },*/
                presentation: {
                    title: "Vivendo em Comunidade",
                    description: "Programador é um nerd que não sabe interagir? Fica o tempo todo na frente do computador e nunca saí de casa? É tímido, sem jeito e quase não tem amigos? Muitos são. Mas existem muitos que resolvem viver em comunidade, dividir conhecimento e se divertir com isso. Nessa palestra vou falar um pouco do que aprendi e ganhei com comunidades de desenvolvedores e incentivar os programadores a saírem da caverna e conhecer o mundo das comunidades de desenvolvedores.",
                    time: "11h45"
                }
            }, {
                name: "Almoço",
                time: "12h30"
            }, {
                name: "Heraldo Borges",
                photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c51.0.320.320/p320x320/1450310_10202142825552740_85057262_n.jpg?oh=9285bb131e44deeaf7e97bdc9002a297&oe=54CA68F2&__gda__=1418170033_1f91368c589b165fc68e582f89e60a59",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "STI",
                // link: {
                //     href: "http://twitter.com/zuck",
                //     text: "@zuck"
                // },
                presentation: {
                    title: "Scikit: Machine Learning em Python",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "14h00"
                }
            }, {
                name: "Simone Martins",
                photo: "http://www.ic.uff.br/images/departamento/docentes/IC-Docentes-Simone.png",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "GE",
                /*link: {
                    href: "http://twitter.com/woz",
                    text: "@woz"
                },*/
                presentation: {
                    title: "Pesquisa Operacional",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "15h00"
                }
            }, /*{
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
            },*/
                 {
                 name: "Marcelo Jachelli",
                 photo: "http://dacc.ic.uff.br/semanacademica/wp-content/themes/shaper_helix_ii/images/marcelojachelli.jpg",
                 bio: "Analista de sistemas formado pela PUC-Rio com MBA em Gestão de projetos pelo IBMEC. Possui mais de 10 anos de experiência em gerenciamento de projetos de TI com atuação em empresas de diferentes segmentos como: Petrobras, Oi, Citibank, Bradesco Seguros, Aracruz, entre outras. Atualmente é Gerente de projetos do ADDLabs (laboratório de Documentação Ativa e Design Inteligente do Instituto de Computação da Universidade Federal Fluminense – Especializado em IHC e inteligência artificial).",
                 company: "ADDLABS",
                 /*link: {
                 href: "https://twitter.com/henriquebastos    ",
                 text: "@henriquebastos"
                 },*/
                presentation: {
                    title: "Gerência de Projetos",
                    description: "Serão apresentados os principais conceitos do gerenciamento de projetos, as áreas de conhecimento, estratégias de gerenciamento, características da carreira, habilidades necessárias e desafios do profissional de gerenciamento de projetos.",
                    time: "17h30"
                }
            }],
            '2014-10-17': [{
                name: "Jonas Dias",
                //photo: "themes/yellow-swan/img/speaker.jpg",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "EMC",
                // link: {
                //     href: "http://twitter.com/linus",
                //     text: "@linus"
                // },
                presentation: {
                    title: "Big Data",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "9h00"
                }
            }, {
                name: "Daniel Oliveira",
                photo: "http://dacc.ic.uff.br/semanacademica/wp-content/themes/shaper_helix_ii/images/daniel.gif",
                bio: "Daniel de Oliveira é professor do Instituto de Computação da Universidade Federal Fluminense (UFF) desde 2013. Recebeu o grau de Doutor em Ciências pela UFRJ em 2012. Seus interesses de pesquisa incluem bancos de dados, computação em nuvem, gerência de workflows científicos, paralelismo de dados, bioinformática e mineração de dados. Publicou mais de 50 artigos em periódicos indexados e em congressos nacionais e internacionais. É membro da ACM, IEEE e SBC. Vem publicando com frequência em eventos de prestígio internacional de computação em nuvem como o IEEE Cloud e o IEEE e-Science, além de ter recebido o prêmio de melhor artigo do 2nd International Workshop on Cloud Computing and Scientific Applications (CCSA) realizado em conjunto com o IEEE/ACM International Symposium on Cluster, Cloud and Grid Computing (CCGrid 2012).",
                company: "IC - UFF",
                link: {
                    href: "http://github.com/billy95",
                    text: "@billy95"
                },
                presentation: {
                    title: "Computação em Nuvem para Ciência: o papel fundamental da área de banco de dados",
                    description: "Nessa palestra, abordamos como fundamentos de bancos de dados podem ser usados no processamento de dados científicos em sintonia com os Sistemas de Gerência de Workflows Científicos (SGWfC) em nuvens de computadores. Consideramos que essa combinação está no caminho crítico do apoio ao desenvolvimento de ciência em larga escala em nuvens computacionais. Mostraremos um panorama do estado da arte no uso da computação em nuvem para apoiar o desenvolvimento da ciência computacional. Apresentaremos as soluções principais nesse apoio em nuvens, a saber, Pegasus, Swift, Tavaxy e SciCumulus, destacando suas contribuições tanto em inovação de algoritmos e estratégias como de infraestrutura. Discutiremos as oportunidades de pesquisas em bancos de dados no contexto de nuvens computacionais quanto à gerência de dados e processos científicos, aos aspectos de distribuição de dados e atividades dos workflows, ao acompanhamento da execução de longa duração por parte do cientista e à gerência de dados de proveniência.",
                    time: "9h45"
                }
            }, 
	    //{
            //    name: "Coffe-break",
            //    time: "10h30"
            //}, 
            {
                name: "Débora Muchaluat",
                photo: "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4723625Z1",
                bio: "Possui graduação em Engenharia de Computação pela Pontifícia Universidade Católica do Rio de Janeiro (1992), mestrado em Informática pela Pontifícia Universidade Católica do Rio de Janeiro (1996) e doutorado em Informática pela Pontifícia Universidade Católica do Rio de Janeiro (2003). Desde 2002, é professora da Universidade Federal Fluminense. Integrou o corpo docente do Departamento de Engenharia de Telecomunicações até maio de 2009 e desde então faz parte do corpo docente do Instituto de Computação. Tem experiência nas áreas de Ciência da Computação e Engenharia de Telecomunicações, com ênfase em Teleinformática, atuando principalmente nos seguintes temas: redes de computadores, redes em malha sem fio, sistemas multimídia e hipermídia distribuídos, linguagens de autoria hipermídia, televisão digital interativa e telemedicina. Participou do desenvolvimento da linguagem NCL - Nested Context Language - padronizada no middleware GINGA do Sistema Brasileiro de TV Digital e aprovada como recomendação internacional do ITU-T H.761 para IPTV.",
                company: "Laboratório   MidiaCom",
//                link: {
//                     href: "http://twitter.com/littlechuck",
//                     text: "@littlechuck"
//                },
                presentation: {
                    title: "Autoria de Documentos Multimídia para TV Digital",
                    description: "Documentos multimídia estão cada vez mais presentes em nosso cotidiano. Informações em vídeo, áudio, imagens e animações permitem transmitir determinado conteúdo de forma dinâmica e atrair a atenção do usuário alvo. Com os sistemas de TV digital, além do conteúdo principal de vídeo e áudio, uma emissora pode transmitir aplicações interativas, oferecendo serviços diversos ao telespectador. Essas aplicações são compostas de objetos multimídia sincronizados temporal e espacialmente e podem ser representadas como documentos multimídia através de uma linguagem de autoria declarativa. No caso do Sistema Brasileiro de TV Digital (SBTVD), a linguagem padrão para especificação de aplicações declarativas é a linguagem NCL (Nested Context Language), baseada em XML. NCL utiliza um modelo de sincronização baseado em eventos e oferece bastante expressividade para autoria multimídia. Por outro lado, seu uso por quem não conhece tanto a linguagem não é trivial. Com o objetivo de facilitar a autoria de documentos multimídia em NCL, diversos esforços vêm sendo realizados pela comunidade acadêmica com o objetivo de oferecer novas facilidades para a linguagem, ferramentas de autoria gráfica e de validação de documentos. Um exemplo é a proposta de templates de composição, que especificam de maneira genérica a estrutura de sincronização espaço-temporal de um documento sem determinar qual o conteúdo multimídia a ser utilizado. Um mesmo template pode ser reusado em diferentes documentos com conteúdo distinto. O autor que usa um template não precisa conhecer como as relações de sincronização multimídia foram especificadas, o que facilita bastante a autoria. Outra facilidade para autoria multimídia é a oferta de editores gráficos, que abstraem os detalhes específicos de uma linguagem de autoria através de sua interface gráfica. Nesse caso, dependendo das funcionalidades e nível de abstração oferecidos pelo editor, o autor pode não precisar de nenhum conhecimento sobre a linguagem de autoria declarativa em XML. Seja considerando a autoria gráfica ou a autoria textual, uma ferramenta de validação é fundamental para verificar se a especificação de um documento multimídia segue realmente o desejo do autor. Tais ferramentas podem ser baseadas em modelos formais, que representam o documento multimídia e testam propriedades gerais ou específicas para verificar sua corretude. Esta palestra dará uma visão geral sobre autoria multimídia para o SBTVD e apresentará pesquisas que vêm sendo desenvolvidas na área no Laboratório MídiaCom da Universidade Federal Fluminense (UFF).",
                    time: "11h00"
                }
            }, {
                name: "Luis Enrique",
                //photo: "themes/yellow-swan/img/speaker.jpg",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                //company: "InfoMarka",
                //link: {
                    //href: "http://github.com/stevie",
                    //text: "@stevie"
                //},
                presentation: {
                    title: "Synfig - Novos Recursos para animação 2D",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "11h45"
                }
            }, {
                name: "Almoço",
                time: "12h30"
            }, {
                name: "Hugo Arraes Henley",
                photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c18.18.230.230/249549_3747423573320_2041088151_n.jpg?oh=086ccb8793181fbbf83589f15ac1adc4&oe=54D0A7A8&__gda__=1422023714_f7b862595df77e97eebee5c6f3d91acc",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "STI",
                // link: {
                //     href: "http://twitter.com/zuck",
                //     text: "@zuck"
                // },
                presentation: {
                    title: "À Confirmar",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "14h00"
                }
            }, {
                name: "Fábio Pimentel",
                photo: "http://dacc.ic.uff.br/semanacademica/wp-content/themes/shaper_helix_ii/images/fabio-pimentel.jpg",
                bio: "Bacharelando em Ciências da Computação pela Universidade Federal do Rio de Janeiro, trabalha como instrutor e desenvolvedor pela Caelum. Desenvolve principalmente sistemas web com Java e Ruby. Atualmente foca seus estudos no desenvolvimento mobile.",
                company: "Caelum",
                /*link: {
                    href: "http://twitter.com/woz",
                    text: "@woz"
                },*/
                presentation: {
                    title: "Swift",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "15h00"
                }
            }, /*{
                name: "Coffee-break",
                time: "16h00"
            }, {
                name: "Mark Zuckerberg",
                photo: "themes/yellow-swan/img/speaker.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Facebook",
                // link: {
                //     href: "http://twitter.com/zuck",
                //     text: "@zuck"
                // },
                presentation: {
                    title: "Revealing Facebook Secrets",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "16h30"
                }
            },{
                name: "Mark Zuckerberg",
                photo: "themes/yellow-swan/img/speaker.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Facebook",
                // link: {
                //     href: "http://twitter.com/zuck",
                //     text: "@zuck"
                // },
                presentation: {
                    title: "Revealing Facebook Secrets",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "17h30"
                }
            }*/]
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
