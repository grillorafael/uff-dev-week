module.exports = {

    prompts: false,

    // These are variables will be accessible via our templates
    templateData: {

        // Conference info
        conf: {
            name: "UFF - DevWeek",
            description: "",
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
            link: "http://eventick.com.br"
        },

        // "Fork me on GitHub", if you don't want this, just remove the forkButton property
        /*forkButton: {
            repository: "https://github.com/braziljs/conf-boilerplate"
        },*/

        // Site info
        site: {
            theme: "yellow-swan",
            url: "http://braziljs.github.io/conf-boilerplate/"//,
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
                name: "À confirmar",
                time: "9h00"
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
            }, {
                name: "Coffe-break",
                time: "10h30"
            }, {
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
            }, {
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
                    time: "11h45"
                }
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
                photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.11.320.320/p320x320/10660281_954411077907533_4972646307695368811_n.jpg?oh=94d0aae0be5758706ee3b572cb998b43&oe=54D04DD0&__gda__=1422810007_469b6eb33d08a04a784ba112efac2b88",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "UAM",
                // link: {
                //     href: "http://twitter.com/zuck",
                //     text: "@zuck"
                // },
                presentation: {
                    title: "Universidade X Mercado: Dilemas que todo universitário da área de TI passa",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "15h00"
                }
            },
            {
                name: "Coffe-break",
                time: "10h30"
            },
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
            {
                name: "Coffe-break",
                time: "10h30"
            }, {
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
            {
                name: "Coffee-break",
                time: "16h00"
            }, {
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
                photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/v/t1.0-1/c0.26.320.320/p320x320/946250_545617322168823_423737512_n.jpg?oh=4927016b4b2a83f6c7e58117fb62d6d9&oe=54D13540&__gda__=1418761642_e77ae4544528b524459ea4add7a5f9d8",
                company: "UFF",
                presentation: {
                    title: "Nvidia",
                    description: "",
                    time: "17h30"
                }
            }],
            '2014-10-16': [{
                name: "Raphael Menezes",
                photo: "https://scontent-a-lga.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/10534518_10152144893827511_8821135898542613309_n.jpg",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Petrobrás",
                // link: {
                //     href: "http://twitter.com/linus",
                //     text: "@linus"
                // },
                presentation: {
                    title: "Gestão de perfomance de aplicações java em ambiente de produção e experiência do usuário",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "9h00"
                }
            },{
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
            }, */{
                name: "Coffe-break",
                time: "10h30"
            }, {
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
                    title: "PEARL",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "11h45"
                }
            }, {
                name: "Almoço",
                time: "12h30"
            }, {
                name: "Heraldo Borges",
                photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c32.0.200.200/p200x200/1450310_10202142825552740_85057262_n.jpg",
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
            }, */{
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
            },{
                name: "Todos",
                photo: "themes/yellow-swan/img/speaker.jpg",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                //company: "Facebook",
                // link: {
                //     href: "http://twitter.com/zuck",
                //     text: "@zuck"
                // },
                presentation: {
                    title: "CompMusc",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "17h30"
                }
            }],
            '2014-10-17': [/*{
                name: "Linus Torvalds",
                photo: "themes/yellow-swan/img/speaker.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Linux Foundation",
                // link: {
                //     href: "http://twitter.com/linus",
                //     text: "@linus"
                // },
                presentation: {
                    title: "Digging into a Linux Kernel",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "9h00"
                }
            },*/ {
                name: "Daniel Oliveira",
                photo: "http://dacc.ic.uff.br/semanacademica/wp-content/themes/shaper_helix_ii/images/daniel.gif",
                bio: "Daniel de Oliveira é professor do Instituto de Computação da Universidade Federal Fluminense (UFF) desde 2013. Recebeu o grau de Doutor em Ciências pela UFRJ em 2012. Seus interesses de pesquisa incluem bancos de dados, computação em nuvem, gerência de workflows científicos, paralelismo de dados, bioinformática e mineração de dados. Publicou mais de 50 artigos em periódicos indexados e em congressos nacionais e internacionais. É membro da ACM, IEEE e SBC. Vem publicando com frequência em eventos de prestígio internacional de computação em nuvem como o IEEE Cloud e o IEEE e-Science, além de ter recebido o prêmio de melhor artigo do 2nd International Workshop on Cloud Computing and Scientific Applications (CCSA) realizado em conjunto com o IEEE/ACM International Symposium on Cluster, Cloud and Grid Computing (CCGrid 2012).",
                company: "IC - UFF",
                link: {
                    href: "http://github.com/billy95",
                    text: "@billy95"
                },
                presentation: {
                    title: "À Confirmar",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "9h45"
                }
            }, {
                name: "Coffe-break",
                time: "10h30"
            }, {
                name: "Débora Muchaluat",
                //photo: "themes/yellow-swan/img/speaker.jpg",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "MidiaCom",
                // link: {
                //     href: "http://twitter.com/littlechuck",
                //     text: "@littlechuck"
                // },
                presentation: {
                    title: "TV Digital",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
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
                photo: "https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-9/249549_3747423573320_2041088151_n.jpg",
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
            }, /*{
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
            name: "DZaine",
            logo: "http://www.dzaine.net/img/logo-dzaine.png",
            url: "http://www.dzaine.net/"
        },{
            name: "Cortex Intelligence",
            logo: "http://www.cortex-intelligence.com/images/logo.png",
            url: "http://www.cortex-intelligence.com/"
        },{
            name: "NVidia",
            logo: "http://www.nvidia.com.br/content/includes/redesign2010/images/redesign10/nvidia_logo.png",
            url: "http://www.nvidia.com.br/page/home.html"
        },{
            name: "Mozilla Brasil",
            logo: "http://www.mozillabrasil.org.br/img/logo-mozilla-lt.png",
            url: "http://www.mozillabrasil.org.br/"
        },{
            name: "IBM Brasil",
            logo: "http://1.www.s81c.com/i/v17/t/ibm-logo.png",
            url: "http://www.ibm.com/br/pt/"
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
