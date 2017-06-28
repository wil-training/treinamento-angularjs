const queries = {
  get: 'SELECT * from Alunos',
  getPorCodigo: 'SELECT TOP 1 * from Alunos WHERE Codigo = @Codigo',
  post: '',
  put: '',
  delete: ''
};

module.exports = queries;
