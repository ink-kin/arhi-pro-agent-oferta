import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Договор Архи-Про",
  description: "Договор возмездного оказания услуг Редакция № 1",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Обложка договора', link: '/' },
      { text: 'Текст договора', link: '/oferta' }
    ],

    sidebar: [
      {
        text: 'Договор',
        items: [
          { text: 'Содержание', link: '/oferta' },
          { text: 'Термины', link: '/trms' },
          { text: 'Общие положения', link: '/general' },
          { text: 'Предмет договора', link: '/agreement' }
        ]
      },
      {
        text: 'Обязанности сторон',
        items: [
          { text: 'Обязанности исполнителя', link: '/obligations' },
          { text: 'Гарантии исполнителя', link: '/garant' },
          { text: 'Обязанности Архи-Про', link: '/obligations-arhi-pro' },
          { text: 'Гарантии Сторон', link: '/garant-it' }
        ]
      },
      {
        text: 'Порядок',
        items: [
          { text: 'Порядок обмена актами-отчетами', link: '/acts' },
          { text: 'Bознаграждение и порядок его выплаты', link: '/rules' }
        ]
      },
      {
        text: 'Конфиденциальность',
        items: [
          { text: 'Условия конфиденциальности', link: '/conf' },
        ]
      },
      {
        text: 'Ответственность',
        items: [
          { text: 'Ответственность сторон', link: '/reply' },
          { text: 'Основания освобождения от ответственности', link: '/no-reply' }
        ]
      },
      {
        text: 'Срок',
        items: [
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
    sitemap: {
    hostname: 'https://example.com'
  }
  }
})
