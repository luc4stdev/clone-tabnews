function status(request, response) {
  response.status(200).json({ chave: "isso é uma string de status" });
}

export default status;
