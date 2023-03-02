import inquirer, { QuestionCollection } from 'inquirer';
import { red, bold, green } from 'colorette';
import { downloadTemplate } from 'giget';

const questions: QuestionCollection = [
  {
    type: 'input',
    name: 'project',
    message: 'Qual o nome projeto a ser iniciado?',
    default: 'novo-projeto',
  },
  {
    type: 'input',
    name: 'template',
    message: 'Qual o template a ser usado?',
  },
];

inquirer.prompt(questions).then(async (answers) => {
  const { project, template } = answers;
  if (!template) {
    return console.log(bold(red('Nenhum template fornecido')));
  }

  await downloadTemplate(`github:spalla-dev/starter/templates/${template}`, {
    dir: project,
  }).catch(e => {
    console.log(bold(red(e)));
  });

  console.log(bold(green('Projeto criado')));
});

