export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb1267c110bd457c8bb5696',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-cgmn1dg1',
                  apiId: '124d6e34-d80a-4f8a-a4ac-e6ef211db25a'
                },
                {
                  buildHookId: '5eb1267c4e4ed1380f927d84',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-sav3fyf5',
                  apiId: '2ecbeb6f-437f-4fbc-82bc-710318359ba1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ChelseyDewolf/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-sav3fyf5.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
