# Cadastro de Carros

**RF**
Deve ser possível cadastrar um novo carro.
Deve ser possível listar todas as categorias.

**RN**
Não deve ser possível cadastrar um corro com placa já existente.
Não deve ser possível alterar a placa de um carro cadastrado.
Um carro deve ser cadastrado com disponibilidade por padrão.
O usuário responsável pelo cadastro deve ser um administrador.

# Listagem de Carros

**RF**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**
O Usuário não precisa estar logado no sistema.


# Cadastro de Especificação no carro

**RF**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**RN**
Não deve ser possível cadastrar um especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um administrador.

# Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a imagem do carro.

**RNF**
Utilizar o multer para upload das imagens.

**RN**
O Usuário deve poder cadastrar mais de uma imagem para o carro.

# Aluguel de carros

**RF**
Deve ser possível cadastrar um aluguel.

**RN**
O Aluguel deve ter duração mínima de 24h.