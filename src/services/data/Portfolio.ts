/**
 * Created by St.Nann on 30-Jul-17.
 */
module.exports = {
  menu: {
    categories: [
      { text: 'Coding', value: 'coding' },
      { text: 'Design', value: 'design' },
      { text: 'Photography', value: 'photography' }
    ]
  },
  cover: {
    coding: {
      name: 'portfolio%2Fcoding%2Fcover'
    },
    design: {
      name: 'portfolio%2Fdesign%2Fcover'
    },
    photography: {
      name: 'portfolio%2Fphotography%2Fcover'
    }
  },
  coding: [
    {
      id: 'coding-1',
      type: 'website',
      title: 'Portfolio',
      subtitle: 'ポートフォリオ',
      description:
        'Portfolio Website is website about my profile. In the website includes my experience, skill, works and contact.',
      detail: {
        framework: {
          frontend: {
            icon: 'vuejs',
            text: 'VueJs'
          },
          css: {
            icon: 'vuetify',
            text: 'Vuetify'
          }
        }
      },
      image: {
        icon: {
          name: 'portfolio%2Fcoding%2Fportfolio%2Ficon'
        },
        cover: {
          name: 'portfolio%2Fcoding%2Fportfolio%2Fcover'
        },
        qrcode: {
          name: 'portfolio%2Fcoding%2Fportfolio%2Fqrcode'
        }
      },
      link: 'https://my-portfolio-v3.web.app'
    },
    {
      id: 'coding-2',
      type: 'website',
      title: 'Juné BNK48',
      subtitle: 'ジュネ BNK48',
      description:
        'Juné BNK48 Website is website about Juné BNK48. In the website includes his profile, galleries, performance, schedule event and contact.',
      detail: {
        framework: {
          frontend: {
            icon: 'vuejs',
            text: 'VueJs'
          },
          css: {
            icon: 'vuetify',
            text: 'Vuetify'
          }
        }
      },
      image: {
        icon: {
          name: 'portfolio%2Fcoding%2Fjune%2Ficon'
        },
        cover: {
          name: 'portfolio%2Fcoding%2Fjune%2Fcover'
        },
        qrcode: {
          name: 'portfolio%2Fcoding%2Fjune%2Fqrcode'
        }
      },
      link: 'https://june-bnk48.web.app'
    },
    {
      id: 'coding-3',
      type: 'website',
      title: 'Nipa Cloud Platform (NCP)',
      subtitle: '二パークラウド',
      description:
        'Nipa Cloud Platform Website or you can call NCP is website about cloud computing resource management via Openstack. In the website includes cloud computing resource such as compute, network and storage.',
      detail: {
        framework: {
          frontend: {
            icon: 'vuejs',
            text: 'VueJs'
          },
          css: {
            icon: 'vuetify',
            text: 'Vuetify'
          },
          backend: {
            icon: 'nodejs',
            text: 'Node.js'
          }
        }
      },
      image: {
        icon: {
          name: 'portfolio%2Fcoding%2Fnipacloud%2Ficon'
        },
        cover: {
          name: 'portfolio%2Fcoding%2Fnipacloud%2Fcover'
        },
        qrcode: {
          name: 'portfolio%2Fcoding%2Fnipacloud%2Fqrcode'
        }
      },
      link: 'https://portal.nipa.cloud'
    },
    {
      id: 'coding-4',
      type: 'website',
      title: 'Ch3plus Website',
      subtitle: 'チャンネル三プラス',
      description:
        'Ch3plus website about online streaming content and online shopping',
      detail: {
        framework: {
          frontend: {
            icon: 'nextjs',
            text: 'Next.Js'
          },
          css: {
            icon: 'materialUI',
            text: 'Material UI'
          },
          backend: {
            icon: 'golang',
            text: 'Golang'
          }
        }
      },
      image: {
        icon: {
          name: 'portfolio%2Fcoding%2Fch3plus%2Ficon'
        },
        cover: {
          name: 'portfolio%2Fcoding%2Fch3plus%2Fcover'
        },
        qrcode: {
          name: 'portfolio%2Fcoding%2Fch3plus%2Fqrcode'
        }
      },
      link: 'https://ch3plus.com'
    },
    {
      id: 'coding-5',
      type: 'website',
      title: 'IDC-MED Website',
      subtitle: 'アイディーシー・エムイーディー',
      description:
        'IDC-MED website about the admin of immigration detention center medical program management',
      detail: {
        framework: {
          frontend: {
            icon: 'php',
            text: 'PHP Backpack Laravel'
          },
          css: {
            icon: 'php',
            text: 'PHP Backpack Laravel'
          },
          backend: {
            icon: 'php',
            text: 'PHP Backpack Laravel'
          }
        }
      },
      image: {
        icon: {
          name: 'portfolio%2Fcoding%2Fidc-med%2Ficon'
        },
        cover: {
          name: 'portfolio%2Fcoding%2Fidc-med%2Fcover'
        },
        qrcode: {
          name: 'portfolio%2Fcoding%2Fidc-med%2Fqrcode'
        }
      },
      link: 'http://203.157.15.173/app/dipq/login'
    },
    {
      id: 'coding-6',
      type: 'website',
      title: 'Take a wreath Website',
      subtitle: 'テークアーリース',
      description:
        'Take a wreath website about static website for display wreath content with WordPress',
      detail: {
        framework: {
          frontend: {
            icon: 'WordPress',
            text: 'WordPress'
          },
          css: {
            icon: 'elementor',
            text: 'Elementor Kit (Theme)'
          },
          backend: {
            icon: '',
            text: '-'
          }
        }
      },
      image: {
        icon: {
          name: 'portfolio%2Fcoding%2Ftakeawreath%2Ficon'
        },
        cover: {
          name: 'portfolio%2Fcoding%2Ftakeawreath%2Fcover'
        },
        qrcode: {
          name: 'portfolio%2Fcoding%2Ftakeawreath%2Fqrcode'
        }
      },
      link: 'https://take-awreath.com'
    },
    {
      id: 'coding-7',
      type: 'chatbot',
      title: 'LINE Chatbot - Juné',
      subtitle: 'ラインチャットボット - ジュネ',
      description:
        'LINE chatbot is chanel for follow up Juné BNK48 that includes portfolio, shudule events, contact, performance, activity & shop and groups of Juné BNK48',
      detail: {
        framework: {
          tools: {
            icon: 'LINE',
            text: 'LINE Developer'
          },
          design: {
            icon: 'LINE',
            text: 'LINE Bot Designer'
          },
          api: {
            icon: 'API AI',
            text: 'Dialogflow'
          }
        }
      },
      image: {
        icon: {
          name: 'portfolio%2Fcoding%2Fchatbot%20-%20June%2Ficon'
        },
        cover: {
          name: 'portfolio%2Fcoding%2Fchatbot%20-%20June%2Fcover'
        },
        qrcode: {
          name: 'portfolio%2Fcoding%2Fchatbot%20-%20June%2Fqrcode'
        }
      },
      link: 'https://line.me/R/ti/p/%40128sooyz#~'
    },
    {
      id: 'coding-8',
      type: 'chatbot',
      title: 'LINE Chatbot - Jennis',
      subtitle: 'ラインチャットボット - ジェニス',
      description:
        'LINE chatbot is chanel for follow up Jennis BNK48 that includes portfolio, shudule events, contact, performance, activity & shop and groups of Jennis BNK48',
      detail: {
        framework: {
          tools: {
            icon: 'LINE',
            text: 'LINE Developer'
          },
          design: {
            icon: 'LINE',
            text: 'LINE Bot Designer'
          },
          api: {
            icon: 'API AI',
            text: 'Dialogflow'
          },
          richmenu: {
            icon: 'Rich menu design',
            text: 'Rich Menu Maker'
          },
          testapi: {
            icon: 'Test API',
            text: 'Postman'
          }
        }
      },
      image: {
        icon: {
          name: 'portfolio%2Fcoding%2Fchatbot%20-%20Jennis%2Ficon'
        },
        cover: {
          name: 'portfolio%2Fcoding%2Fchatbot%20-%20Jennis%2Fcover'
        },
        qrcode: {
          name: 'portfolio%2Fcoding%2Fchatbot%20-%20Jennis%2Fqrcode'
        }
      },
      link: 'https://line.me/R/ti/p/%40489bcbvy#~'
    }
  ],
  design: [
    {
      id: 'design-1',
      type: 'Line sticker',
      title: 'Scorpio Diary',
      subtitle: 'スコーピオ ダイアリー',
      description:
        'Scorpio Diary is a sticker character. It made for sale on LINE application.',
      image: {
        icon: {
          name: 'portfolio%2Fdesign%2Fline%20sticker%2Ficon'
        },
        cover: {
          name: 'portfolio%2Fdesign%2Fline%20sticker%2Fcover'
        },
        qrcode: {
          name: 'portfolio%2Fdesign%2Fline%20sticker%2Fqrcode'
        }
      },
      link: 'https://store.line.me/stickershop/product/1500912/th?from=sticker'
    }
  ],
  photography: [
    {
      id: 'photography-1',
      type: 'Webpage',
      title: 'Mukashi1911',
      subtitle: 'むかし1911 (昔)',
      description:
        'Mukashi1911 is collection BNK48\'s members event photography gallery page on Facebook, Instagram (IG) and Twitter',
      image: {
        icon: {
          name: 'portfolio%2Fphotography%2Fmukashi1911%2Ficon'
        },
        cover: {
          name: 'portfolio%2Fphotography%2Fmukashi1911%2Fcover'
        },
        qrcode: {
          name: 'portfolio%2Fphotography%2Fmukashi1911%2Fqrcode'
        }
      },
      link: 'https://www.instagram.com/mukashi1911/?hl=th'
    }
  ]
}
