test("GET to /api/v1/status should return 200", async () => {
  // Fazer a requisição GET para o endpoint de status
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  // Verificar o formato do corpo da resposta
  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  // Verificar se o campo updated_at é uma data válida (padrao ISO 8601)
  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  // Verificar as dependências do sistema (database version e max_connections)
  expect(responseBody.dependencies.database.version).toEqual("16.0");
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  expect(responseBody.dependencies.database.open_connections).toEqual(1);
});
