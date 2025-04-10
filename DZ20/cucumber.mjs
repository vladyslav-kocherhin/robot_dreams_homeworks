export default {
  paths: ['features/**/*.feature'],
  require: [
    'features/support/hooks.ts',        
    'features/step-definitions/**/*.ts'
  ],
  requireModule: ['ts-node/register'],
  format: ['@cucumber/pretty-formatter'],
  parallel: 1
};
