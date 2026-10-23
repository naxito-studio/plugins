import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "NXPlugins",
  description: "Naxito's Studios Official Documentation",
  base: '/plugins/',
  cleanUrls: true,
  lastUpdated: false,

  themeConfig: {
    // Top bar logo (place your logo at .vitepress/public/logo.png)
    logo: '/logo.png',
    siteTitle: 'NXPlugins',

    // Built-in search
    search: {
      provider: 'local'
    },

    // Top navigation bar links
    nav: [
      { text: 'Home', link: '/' },
      { text: 'NXGuard', link: '/NXGuard/README' },
      { text: 'NXMines', link: '/NXMines/README' },
      { text: 'NXRooms', link: '/NXRooms/README' },
      { text: 'NXGens', link: '/NXGens/README' },
      { text: 'Discord', link: 'https://discord.gg/Xex24yPpWn' }
    ],

    // Social links in the top navigation bar
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/Xex24yPpWn' },
      { icon: 'github', link: 'https://github.com/naxito-studio' }
    ],

    // Sidebars per plugin (English at the root, Spanish under /es/)
    sidebar: {
      '/NXGuard/': [
        {
          text: 'NXGuard',
          items: [
            { text: 'Introduction', link: '/NXGuard/README' },
            { text: 'Installation', link: '/NXGuard/instalacion' },
            { text: 'Commands', link: '/NXGuard/comandos' },
            { text: 'Permissions', link: '/NXGuard/permisos' },
            { text: 'GUI Usage', link: '/NXGuard/gui' },
            { text: 'Flag System', link: '/NXGuard/flags' },
            { text: 'FAQ', link: '/NXGuard/faq' }
          ]
        },
        {
          text: 'Configuration',
          items: [
            { text: 'config.yml', link: '/NXGuard/configuracion/config-yml' }
          ]
        }
      ],

      '/NXMines/': [
        {
          text: 'NXMines',
          items: [
            { text: 'Introduction', link: '/NXMines/README' },
            { text: 'Installation', link: '/NXMines/instalacion' },
            { text: 'Commands', link: '/NXMines/comandos' },
            { text: 'Permissions', link: '/NXMines/permisos' },
            { text: 'GUI Usage', link: '/NXMines/gui' },
            { text: 'Drop System', link: '/NXMines/drops' },
            { text: 'PlaceholderAPI', link: '/NXMines/placeholders' },
            { text: 'Importing Mines (Convert)', link: '/NXMines/convert' },
            { text: 'FAQ', link: '/NXMines/faq' }
          ]
        },
        {
          text: 'Configuration',
          items: [
            { text: 'config.yml', link: '/NXMines/configuracion/config-yml' },
            { text: 'menus.yml', link: '/NXMines/configuracion/menus-yml' },
            { text: 'particles.yml', link: '/NXMines/configuracion/particles-yml' },
            { text: 'sounds.yml', link: '/NXMines/configuracion/sounds-yml' }
          ]
        }
      ],

      '/NXRooms/': [
        {
          text: 'NXRooms',
          items: [
            { text: 'Introduction', link: '/NXRooms/README' },
            { text: 'Installation', link: '/NXRooms/instalacion' },
            { text: 'Commands', link: '/NXRooms/comandos' },
            { text: 'Permissions', link: '/NXRooms/permisos' },
            { text: 'The Wand System', link: '/NXRooms/wand' },
            { text: 'GUI Usage', link: '/NXRooms/gui' },
            { text: 'Room Flags & Effects', link: '/NXRooms/flags' },
            { text: 'PlaceholderAPI', link: '/NXRooms/placeholders' },
            { text: 'FAQ', link: '/NXRooms/faq' }
          ]
        },
        {
          text: 'Configuration',
          items: [
            { text: 'config.yml', link: '/NXRooms/configuracion/config-yml' }
          ]
        }
      ],

      '/NXGens/': [
        {
          text: 'NXGens',
          items: [
            { text: 'Introduction', link: '/NXGens/README' },
            { text: 'Installation', link: '/NXGens/instalacion' },
            { text: 'Commands', link: '/NXGens/comandos' },
            { text: 'Permissions', link: '/NXGens/permisos' },
            { text: 'Generator System', link: '/NXGens/generadores' },
            { text: 'GUI Usage', link: '/NXGens/gui' },
            { text: 'Events & Failures', link: '/NXGens/eventos' },
            { text: 'PlaceholderAPI', link: '/NXGens/placeholders' },
            { text: 'FAQ', link: '/NXGens/faq' }
          ]
        },
        {
          text: 'Configuration',
          items: [
            { text: 'config.yml', link: '/NXGens/configuracion/config-yml' }
          ]
        }
      ],

      '/es/NXGuard/': [
        {
          text: 'NXGuard',
          items: [
            { text: 'Introducción', link: '/es/NXGuard/README' },
            { text: 'Instalación', link: '/es/NXGuard/instalacion' },
            { text: 'Comandos', link: '/es/NXGuard/comandos' },
            { text: 'Permisos', link: '/es/NXGuard/permisos' },
            { text: 'Uso del GUI', link: '/es/NXGuard/gui' },
            { text: 'Sistema de Flags', link: '/es/NXGuard/flags' },
            { text: 'Preguntas Frecuentes', link: '/es/NXGuard/faq' }
          ]
        },
        {
          text: 'Configuración',
          items: [
            { text: 'config.yml', link: '/es/NXGuard/configuracion/config-yml' }
          ]
        }
      ],

      '/es/NXMines/': [
        {
          text: 'NXMines',
          items: [
            { text: 'Introducción', link: '/es/NXMines/README' },
            { text: 'Instalación', link: '/es/NXMines/instalacion' },
            { text: 'Comandos', link: '/es/NXMines/comandos' },
            { text: 'Permisos', link: '/es/NXMines/permisos' },
            { text: 'Uso del GUI', link: '/es/NXMines/gui' },
            { text: 'Sistema de Drops', link: '/es/NXMines/drops' },
            { text: 'PlaceholderAPI', link: '/es/NXMines/placeholders' },
            { text: 'Importar Minas (Convert)', link: '/es/NXMines/convert' },
            { text: 'Preguntas Frecuentes', link: '/es/NXMines/faq' }
          ]
        },
        {
          text: 'Configuración',
          items: [
            { text: 'config.yml', link: '/es/NXMines/configuracion/config-yml' },
            { text: 'menus.yml', link: '/es/NXMines/configuracion/menus-yml' },
            { text: 'particles.yml', link: '/es/NXMines/configuracion/particles-yml' },
            { text: 'sounds.yml', link: '/es/NXMines/configuracion/sounds-yml' }
          ]
        }
      ],

      '/es/NXRooms/': [
        {
          text: 'NXRooms',
          items: [
            { text: 'Introducción', link: '/es/NXRooms/README' },
            { text: 'Instalación', link: '/es/NXRooms/instalacion' },
            { text: 'Comandos', link: '/es/NXRooms/comandos' },
            { text: 'Permisos', link: '/es/NXRooms/permisos' },
            { text: 'Sistema de varita', link: '/es/NXRooms/wand' },
            { text: 'Uso del GUI', link: '/es/NXRooms/gui' },
            { text: 'Flags y efectos de sala', link: '/es/NXRooms/flags' },
            { text: 'PlaceholderAPI', link: '/es/NXRooms/placeholders' },
            { text: 'Preguntas Frecuentes', link: '/es/NXRooms/faq' }
          ]
        },
        {
          text: 'Configuración',
          items: [
            { text: 'config.yml', link: '/es/NXRooms/configuracion/config-yml' }
          ]
        }
      ],

      '/es/NXGens/': [
        {
          text: 'NXGens',
          items: [
            { text: 'Introducción', link: '/es/NXGens/README' },
            { text: 'Instalación', link: '/es/NXGens/instalacion' },
            { text: 'Comandos', link: '/es/NXGens/comandos' },
            { text: 'Permisos', link: '/es/NXGens/permisos' },
            { text: 'Sistema de generadores', link: '/es/NXGens/generadores' },
            { text: 'Uso del GUI', link: '/es/NXGens/gui' },
            { text: 'Eventos y fallas', link: '/es/NXGens/eventos' },
            { text: 'PlaceholderAPI', link: '/es/NXGens/placeholders' },
            { text: 'Preguntas Frecuentes', link: '/es/NXGens/faq' }
          ]
        },
        {
          text: 'Configuración',
          items: [
            { text: 'config.yml', link: '/es/NXGens/configuracion/config-yml' }
          ]
        }
      ]
    },

    // Footer
    footer: {
      message: 'Desarrollado con ❤️ por Naxito\'s Studios',
      copyright: 'Copyright © 2026 Naxito\'s Studios'
    }
  }
})
