**Back end Site Concessionária**

*Apresentação do projeto em vídeo*

https://drive.google.com/file/d/1WUpbcrDFcOGS5AJDujob0qLvYIYSXWp
3/view?usp=sharing

*Apresentação do projeto*

Uma loja virtual de venda de carros seminovos.

A duração deste projeto foi de aproximadamente 15 dias.

Principais Tecnologias: React, Styled Components, YUP, Hooks, Context API,
Axios, Node, Express, Multer, JWT, Brcrypt, PostgreSQL, Git.

Funcionalidades: Esse site possui uma página home, onde estão inseridos carros à
venda por ordem de preço, com a imagem do carro, as descrições e os valores. Na
aplicação, há também um cadastro administrativo e um login com autenticação JWT e senha criptografada. Ao administrador é liberada uma página privada que
possibilita registrar os carros. Além dessa página de registros, tem também na
página home a permissão do administrador fazer o logout e deletar os anúncios.
Explorando melhor a parte da autenticação JWT, podemos dizer que ela é mais uma
segurança que protege aplicação como um todo. Essa técnica permite com que as
rotas privadas fiquem protegidas e só sejam acessadas por usuários autorizados.
Em primeiro lugar, baixamos essa lib como dependência da aplicação, após isso, no
controller do Login, nós criamos um Token toda vez que o usuário faz o login, nessa
criação nós definimos a duração que esse token irá valer. Esse token é enviado
para o front-end e armazenado no Local Storage para ser enviado no header da
requisição toda vez que o usuário quiser acessar uma rota privada. No back end,
criamos um arquivo na pasta de middleware, que valida o token que é enviado para
o header pelo front. Esse middleware irá validar esse token e também identificar se
ele expirou. Caso tudo esteja certo o middleware autoriza a continuação, entretanto
se o token for invalido ou já tiver expirado o backend envia uma bad request, status
400 e direciona o usuário até a página de login.

Desafios: Os maiores desafios que enfrentei neste projeto foi na sessão de registro
de carros. A minha maior dificuldade era implementar todo o formulário do front e
mandar as informações do veículo junto com a imagem do mesmo para a api e
posteriormente para o banco de dados. Além disso, o tipo de formulário
multipart/form-data envia de uma forma diferente dos formulários mais usuais. Além
disso, a documentação do multer deu um bom direcionamento quanto a
configuração dessa lib que funciona como um middleware na API. Depois de
manipular essas informações no back, cadastrar no banco de dados não foi uma
grande dificuldade, uma vez que utilizei apenas uma tabela para as informações dos
veículos e a outra era para o cadastro administrativo.

Importância do projeto: Empresas utilizam cada vez mais o ambiente virtual para
maior captação de clientes, sendo que o primeiro contato via internet pode aumentar
o número de vendas consideravelmente. Plataformas para venda própria e também
para anúncios de imóveis, produtos e automóveis de terceiros estão cada vez mais
em alta, como a OLX por exemplo.



