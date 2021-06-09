const string = {
  acknowledgements: `## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)

 - [Awesome README](https://github.com/matiassingers/awesome-readme)

 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

`,
  apireference: `## API Reference
  
#### Get all items

\`\`\`http
  GET /api/items
\`\`\`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`api_key\` | \`string\` | **Required**. Your API key |

#### Get item

\`\`\`http
  GET /api/profile/all
\`\`\`

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| \`id\`      | \`string\` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

  `,
  appendix: `## Appendix

Any additional information goes here`,

  badges: `## Badges

Get custom/regularly used shields(badges) for your repository from: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

  `,

  contact: `## Contact
If you want to contact me you can reach me at <name@example.com>.`,

  contributing: `## Contributing

To contribute to <project_name>, follow these steps:

1. Fork this repository.
2. Create a branch: git checkout -b <branch_name>.
3. Make your changes and commit them: \`\`\`git commit -m <commit_message>\`\`\`
4. Push to the original branch: \`\`\`git push origin <project_name>/<location>\`\`\`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).`,

  contributors: `## Contributors

Thanks to the following people who have contributed to this project:

* [@vaishalinarula](https://github.com/vaishalinarula) 📖`,

  documentation: `## Documentation
[Documentation](https://linktodocumentation)
  `,

  features: `## Features

- Live previews
- Add section
- Remove Section
- Update Section
- Download Readme`,
  installation: `
## Installation

\`\`\`
npx create-react-app my-app
cd my-app
npm start
\`\`\`
`,

  license: `## License

[MIT](https://choosealicense.com/licenses/mit/)`,
  logos: `![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)`,

  screenshots: `# Screenshots
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)`,
  title: `# Project Title

A brief description of what this project does and who it's for`,
};

export default string;
