module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'chore', 'docs', 'style', 'test'],
    ],
    'subject-case': [2, 'always', 'sentence-case'],
  },
}
