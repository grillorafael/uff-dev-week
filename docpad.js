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
            address: "Rua Passo da Pátria 156, Niterói - RJ",
            city: "Niterói",
            //   state: "Rio de Janeiro"
        },

        // The Call To Action button at the header,
        // If you don't want this, just remove the callToAction property.
        callToAction: {
            text: "Inscreva-se!",
            link: "http://eventick.com.br"
        },

        // "Fork me on GitHub", if you don't want this, just remove the forkButton property
        forkButton: {
            repository: "https://github.com/braziljs/conf-boilerplate"
        },

        // Site info
        site: {
            theme: "yellow-swan",
            url: "http://braziljs.github.io/conf-boilerplate/",
            googleanalytics: "UA-33656081-1"
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
            sponsors: "Patrocinadores",
            partners: "Parcerias",
            contact: "Contato"
        },

        // The entire schedule
        schedule: {
            '2014-10-13': [/*{
                name: "Linus Torvalds",
                photo: "themes/yellow-swan/img/speaker.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Linux Foundation",
                link: {
                    href: "http://twitter.com/linus",
                    text: "@linus"
                },
                presentation: {
                    title: "Digging into a Linux Kernel",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "9h00"
                }
            }, */{
                name: "Gustavo Honorato",
                photo: "themes/yellow-swan/img/speaker.jpg",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "SEO Master",
                link: {
                    href: "http://github.com/billy95",
                    text: "@billy95"
                },
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
                photo: "themes/yellow-swan/img/speaker.jpg",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Dzaine",
                link: {
                    href: "http://twitter.com/littlechuck",
                    text: "@littlechuck"
                },
                presentation: {
                    title: "UX",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "11h00"
                }
            }, {
                name: "Pedro Marins",
                photo: "themes/yellow-swan/img/speaker.jpg",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                //company: "Apple, Inc.",
                link: {
                    href: "http://github.com/stevie",
                    text: "@stevie"
                },
                presentation: {
                    title: "Ganhando dinheiro de pijama",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "11h45"
                }
            }, {
                name: "Almoço",
                time: "12h30"
            }, {
                name: "Wanderson Trindade",
                photo: "themes/yellow-swan/img/speaker.jpg",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "UAM",
                link: {
                    href: "http://twitter.com/zuck",
                    text: "@zuck"
                },
                presentation: {
                    title: "Universidade X Mercado: Dilemas que todo universitário da área de TI passa",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "14h00"
                }
            }/*, {
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
                link: {
                    href: "http://twitter.com/zuck",
                    text: "@zuck"
                },
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
                link: {
                    href: "http://twitter.com/zuck",
                    text: "@zuck"
                },
                presentation: {
                    title: "Revealing Facebook Secrets",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "17h30"
                }
            }*/],
            '2014-10-14': [{
                name: "Lázaro Alvarenga",
                photo: "themes/yellow-swan/img/speaker.jpg",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Dzaine",
                link: {
                    href: "http://twitter.com/linus",
                    text: "@linus"
                },
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
            }, */{
                name: "Coffe-break",
                time: "10h30"
            }, {
                name: "Pedro Polisenso",
                photo: "themes/yellow-swan/img/speaker.jpg",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Secretaria Municipal de Saúde do Rio de Janeiro",
                link: {
                    href: "http://twitter.com/littlechuck",
                    text: "@littlechuck"
                },
                presentation: {
                    title: "Em um relacionamento sério com generators Frontend",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "11h00"
                }
            }, /*{
                name: "Steve Jobs",
                photo: "themes/yellow-swan/img/speaker.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Apple, Inc.",
                link: {
                    href: "http://github.com/stevie",
                    text: "@stevie"
                },
                presentation: {
                    title: "Presenting iPad",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "11h45"
                }
            }, */{
                name: "Almoço",
                time: "12h30"
            }, {
                name: "Christian Aranha",
                photo: "themes/yellow-swan/img/speaker.jpg",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Cortex/Synapse",
                link: {
                    href: "http://twitter.com/zuck",
                    text: "@zuck"
                },
                presentation: {
                    title: "Big data e Web 3.0",
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
            }, */{
                name: "Coffee-break",
                time: "16h00"
            }, {
                name: "Thiago Pontes",
                photo: "themes/yellow-swan/img/speaker.jpg",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Globo.com",
                link: {
                    href: "http://twitter.com/zuck",
                    text: "@zuck"
                },
                presentation: {
                    title: "Open Source",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "16h30"
                }
            }/*,{
                name: "Mark Zuckerberg",
                photo: "themes/yellow-swan/img/speaker.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Facebook",
                link: {
                    href: "http://twitter.com/zuck",
                    text: "@zuck"
                },
                presentation: {
                    title: "Revealing Facebook Secrets",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "17h30"
                }
            }*/],/*'2014-10-15': [{
                name: "Linus Torvalds",
                photo: "themes/yellow-swan/img/speaker.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Linux Foundation",
                link: {
                    href: "http://twitter.com/linus",
                    text: "@linus"
                },
                presentation: {
                    title: "Digging into a Linux Kernel",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "9h00"
                }
            }, {
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
            }, {
                name: "Chuck Norris",
                photo: "themes/yellow-swan/img/speaker.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Delta Command",
                link: {
                    href: "http://twitter.com/littlechuck",
                    text: "@littlechuck"
                },
                presentation: {
                    title: "How to kill a elephant with one finger",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "11h00"
                }
            }, {
                name: "Steve Jobs",
                photo: "themes/yellow-swan/img/speaker.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Apple, Inc.",
                link: {
                    href: "http://github.com/stevie",
                    text: "@stevie"
                },
                presentation: {
                    title: "Presenting iPad",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "11h45"
                }
            }, {
                name: "Almoço",
                time: "12h30"
            }, {
                name: "Mark Zuckerberg",
                photo: "themes/yellow-swan/img/speaker.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Facebook",
                link: {
                    href: "http://twitter.com/zuck",
                    text: "@zuck"
                },
                presentation: {
                    title: "Revealing Facebook Secrets",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "14h00"
                }
            }, {
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
                link: {
                    href: "http://twitter.com/zuck",
                    text: "@zuck"
                },
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
                link: {
                    href: "http://twitter.com/zuck",
                    text: "@zuck"
                },
                presentation: {
                    title: "Revealing Facebook Secrets",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "17h30"
                }
            }],*/'2014-10-16': [/*{
                name: "Linus Torvalds",
                photo: "themes/yellow-swan/img/speaker.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Linux Foundation",
                link: {
                    href: "http://twitter.com/linus",
                    text: "@linus"
                },
                presentation: {
                    title: "Digging into a Linux Kernel",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "9h00"
                }
            }, {
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
            }, {
                name: "Chuck Norris",
                photo: "themes/yellow-swan/img/speaker.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Delta Command",
                link: {
                    href: "http://twitter.com/littlechuck",
                    text: "@littlechuck"
                },
                presentation: {
                    title: "How to kill a elephant with one finger",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "11h00"
                }
            }, {
                name: "Steve Jobs",
                photo: "themes/yellow-swan/img/speaker.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Apple, Inc.",
                link: {
                    href: "http://github.com/stevie",
                    text: "@stevie"
                },
                presentation: {
                    title: "Presenting iPad",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "11h45"
                }
            }, {
                name: "Almoço",
                time: "12h30"
            }, {
                name: "Mark Zuckerberg",
                photo: "themes/yellow-swan/img/speaker.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Facebook",
                link: {
                    href: "http://twitter.com/zuck",
                    text: "@zuck"
                },
                presentation: {
                    title: "Revealing Facebook Secrets",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "14h00"
                }
            }, {
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
            }, */{
                name: "Todos",
                photo: "themes/yellow-swan/img/speaker.jpg",
                //bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                //company: "Facebook",
                link: {
                    href: "http://twitter.com/zuck",
                    text: "@zuck"
                },
                presentation: {
                    title: "CompMusic",
                    //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "16h30"
                }
            }/*,{
                name: "Mark Zuckerberg",
                photo: "themes/yellow-swan/img/speaker.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Facebook",
                link: {
                    href: "http://twitter.com/zuck",
                    text: "@zuck"
                },
                presentation: {
                    title: "Revealing Facebook Secrets",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "17h30"
                }
            }*/],/*'2014-10-17': [{
                name: "Linus Torvalds",
                photo: "themes/yellow-swan/img/speaker.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Linux Foundation",
                link: {
                    href: "http://twitter.com/linus",
                    text: "@linus"
                },
                presentation: {
                    title: "Digging into a Linux Kernel",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "9h00"
                }
            }, {
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
            }, {
                name: "Chuck Norris",
                photo: "themes/yellow-swan/img/speaker.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Delta Command",
                link: {
                    href: "http://twitter.com/littlechuck",
                    text: "@littlechuck"
                },
                presentation: {
                    title: "How to kill a elephant with one finger",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "11h00"
                }
            }, {
                name: "Steve Jobs",
                photo: "themes/yellow-swan/img/speaker.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Apple, Inc.",
                link: {
                    href: "http://github.com/stevie",
                    text: "@stevie"
                },
                presentation: {
                    title: "Presenting iPad",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "11h45"
                }
            }, {
                name: "Almoço",
                time: "12h30"
            }, {
                name: "Mark Zuckerberg",
                photo: "themes/yellow-swan/img/speaker.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Facebook",
                link: {
                    href: "http://twitter.com/zuck",
                    text: "@zuck"
                },
                presentation: {
                    title: "Revealing Facebook Secrets",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "14h00"
                }
            }, {
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
                link: {
                    href: "http://twitter.com/zuck",
                    text: "@zuck"
                },
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
                link: {
                    href: "http://twitter.com/zuck",
                    text: "@zuck"
                },
                presentation: {
                    title: "Revealing Facebook Secrets",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "17h30"
                }
            }]*/
        },

        // List of Sponsors
        sponsors: [{
            name: "DACC",
            logo: "themes/yellow-swan/img/sponsor.png",
            url: "http://eventick.com.br"
        }],

        // List of Partners
        partners: [{
            name: "IC",
            logo: "themes/yellow-swan/img/partner.png",
            url: "http://braziljs.org"
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
