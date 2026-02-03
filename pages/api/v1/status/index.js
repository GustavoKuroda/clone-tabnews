function status(request, response) {
  response.status(200).json({ chave: "Parabéns! API está funcionando." });
}

export default status;
