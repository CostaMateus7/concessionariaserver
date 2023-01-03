**Conteúdos abordados**

- NodeJs,
- Postgres,
- Docker,
- Multer,
- Eslint,
- EditorConfig,
- Insomnia,
- Yarn,
- Cors,
- Middlewares
- Autenticação JWT.
- Criptografia Bcrypt.

**Explicando o Projeto**

Esse projeto é a construção de uma página Home com a exposição de carros contendo no front-end: Nome, Marca, Modelo, Preço e no banco de dados contém o ID de cada carro. Na mesma página há um botão que leva o usuário até a página administrativa em que ele pode cadastrar os carros. Caso ele não seja cadastrado, ele clica em cadastrar, podendo assim ter acesso também a essa página. A o acesso a essa página de registros dos carros possui autenticação JWT. Assim que o administrador realiza o login, a api emite um token JWT, que será enviado para o front-end e persistido no local storage. O tempo que o token vale foi pré determinado. Para o controle, nas rotas da Api existe um Middleware de autenticação. No front as rotas privadas são controladas por meio do ContextAPI. Além disso, quando o usuário cadastra, uma criptografia da senha é realizada, para maior proteção dos dados. Utilizei o banco de dados Postgres, por meio do Conteiner Engine, Docker.

**Atenção**

Algumas funcionalidades não foram realizadas, por exigirem mais tempo de estudos da minha parte, no entanto continuarei seguindo no projeto, para adicionar tais funcionalidades e evoluir minhas habilidades. Tive dificulades para cadastrar as fotos junto com os dados. No banco de dados criei uma tabela para imagem e uma para as informações. Acrescentei uma linha na tabela de category_id, para depois fazer um JOIN, mas ainda não consegui. No entanto, estudei e utilizei o multer para adicionar imagens no backend. Mas na aplicação front desabilitei essa funcionalidade para não atrapalhar o restante da aplicação. Colocar o editar e deletar os cadastros no Front também não foram implementadas.

