export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ced62920dc8fb9205819019',
                  title: 'Sanity Studio',
                  name: 'pitch-landing-page-studio',
                  apiId: '83a71bea-a062-48aa-93c6-2cc14816582a'
                },
                {
                  buildHookId: '5ced629241b6828370ee2ca1',
                  title: 'Portfolio Website',
                  name: 'pitch-landing-page',
                  apiId: '3b03dedd-5016-4479-9669-f583ede7bd54'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pitchwebdev/pitch-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://pitch-landing-page.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
