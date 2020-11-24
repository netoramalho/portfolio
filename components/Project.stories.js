export default {
  title: 'Project'
}

export const Default = args => '<Project name="Project name" description="A great description of this project" front="Language, Framework, E2E" back="Language, Framework, Database" :images="[\'conecta/desktop-distribution.png\']"/>'

export const Reversed = args => '<Project :reverse="true" name="Project name" description="A great description of this project" front="Language, Framework, E2E" back="Language, Framework, Database" :images="[\'conecta/desktop-distribution.png\']"/>'
