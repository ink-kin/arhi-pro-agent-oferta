import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ru-RU',
  title: "Договор Архи-Про",
  description: "Договор возмездного оказания услуг Редакция № 1",
  head: [
    [ 'link', { rel: 'preconnect', href: 'https://telegram.org/js/telegram-web-app.js?58' } ]
   ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Обложка договора', link: '/' },
      { text: 'Текст договора', link: '/oferta' }
    ],

    sidebar: [
      {
        text: 'Договор',
        collapsed: true,
        items: [
          { text: 'Содержание', link: '/oferta' },
          { text: 'Термины', link: '/trms' },
          { text: 'Общие положения', link: '/general' },
          { text: 'Предмет договора', link: '/agreement' },
          { text: 'Обязанности исполнителя', link: '/obligations' },
          { text: 'Гарантии исполнителя', link: '/garant' },
          { text: 'Обязанности Архи-Про', link: '/obligations-arhi-pro' },
      //    { text: 'Гарантии Сторон', link: '/garant-it' },
          { text: 'Порядок обмена актами-отчетами', link: '/acts' },
          { text: 'Bознаграждение и порядок его выплаты', link: '/rules' },
          { text: 'Условия конфиденциальности', link: '/conf' },
          { text: 'Ответственность сторон', link: '/reply' },
          { text: 'Основания освобождения от ответственности', link: '/no-reply' },
          { text: 'Срок действия договора', link: '/period' },
        ]
      },
      {
        text: 'Приложения',
        items: [
          { text: 'Содержание', link: '/oferta-part' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ink-kin/arhi-pro-agent-oferta.git' }
    ],
    sitemap: { hostname: 'https://docs.arhi-pro.ru'
  }
  }
})
