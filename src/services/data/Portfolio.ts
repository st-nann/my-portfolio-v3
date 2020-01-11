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
      name: 'portfolio%2Fcoding%2Fcover',
      token: 'bd3c8241-ffc2-4161-9371-ef37306f25c2'
    },
    design: {
      name: 'portfolio%2Fdesign%2Fcover',
      token: 'f556b751-d5da-42b9-a469-c6708106d1f9'
    },
    photography: {
      name: 'portfolio%2Fphotography%2Fcover',
      token: 'f0b37ba8-7df8-499b-9608-2f183d9cea50'
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
          name: 'portfolio%2Fcoding%2Fportfolio%2Ficon',
          token: '4d053265-857d-4d92-ba43-ed1a77e53ad8'
        },
        cover: {
          name: 'portfolio%2Fcoding%2Fportfolio%2Fcover',
          token: '37b6cf7f-d46c-492b-861b-c1a85fa2cc46'
        },
        qrcode: {
          name: 'portfolio%2Fcoding%2Fportfolio%2Fqrcode',
          token: '6724b7db-3733-42cc-8eec-b5a5731f854b'
        }
      },
      link: 'https://my-portfolio-v2.web.app'
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
          name: 'portfolio%2Fcoding%2Fjune%2Ficon',
          token: 'df49630f-3f8b-4408-8ed2-0efc45cc0081'
        },
        cover: {
          name: 'portfolio%2Fcoding%2Fjune%2Fcover',
          token: '26f8847e-1db7-4958-9c40-13a16bd3e704'
        },
        qrcode: {
          name: 'portfolio%2Fcoding%2Fjune%2Fqrcode',
          token: '5bdcfe48-899e-4e04-9596-e7b042d2547b'
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
          name: 'portfolio%2Fcoding%2Fnipacloud%2Ficon',
          token: 'b25acea8-3ec7-4e59-8a6b-dcf800626d3a'
        },
        cover: {
          name: 'portfolio%2Fcoding%2Fnipacloud%2Fcover',
          token: '64291176-1613-4a08-a5b7-32a39996f1b1'
        },
        qrcode: {
          name: 'portfolio%2Fcoding%2Fnipacloud%2Fqrcode',
          token: '2ab0584b-c1e6-400c-86b9-a8b61b44c323'
        }
      },
      link: 'https://portal.nipa.cloud'
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
          name: 'portfolio%2Fdesign%2Fline%20sticker%2Ficon',
          token: 'ea8d9b2a-0733-4bf0-84a4-e4438760b8c9'
        },
        cover: {
          name: 'portfolio%2Fdesign%2Fline%20sticker%2Fcover',
          token: 'a75fd59d-8686-40f8-a967-8f6b02f8781e'
        },
        qrcode: {
          name: 'portfolio%2Fdesign%2Fline%20sticker%2Fqrcode',
          token: '9b5b11c5-83c5-4fe9-a740-1d197971b009'
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
        "Mukashi1911 is collection BNK48's members event photography gallery page on Facebook, Instagram (IG) and Twitter",
      image: {
        icon: {
          name: 'portfolio%2Fphotography%2Fmukashi1911%2Ficon',
          token: 'c7649968-7e7d-4416-96d4-64c86cff49db'
        },
        cover: {
          name: 'portfolio%2Fphotography%2Fmukashi1911%2Fcover',
          token: '0d85e8b3-2dd0-4c79-b6cb-af6a3b9534ee'
        },
        qrcode: {
          name: 'portfolio%2Fphotography%2Fmukashi1911%2Fqrcode',
          token: '3335b51e-c684-4bbb-a604-7cc002281c1a'
        }
      },
      link: 'https://www.instagram.com/mukashi1911/?hl=th'
    }
  ]
}
