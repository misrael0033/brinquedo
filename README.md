# Meu Site de Vendas

Este projeto é um site de vendas auto-hospedado, projetado para gerenciar e vender produtos de forma personalizada. O site possui um dashboard que permite a adição e gerenciamento de produtos, além de um sistema de checkout integrado.

## Estrutura do Projeto

O projeto é organizado da seguinte forma:

- **src/**: Contém todo o código-fonte do site.
  - **dashboard/**: Página principal do dashboard para gerenciar produtos.
    - `index.html`: Página principal do dashboard.
    - `produtos.html`: Lista de produtos disponíveis.
    - **assets/**: Contém arquivos de estilo e scripts para o dashboard.
      - **css/**: Estilos específicos do dashboard.
      - **js/**: Lógica JavaScript para o dashboard.
  - **produtos/**: Contém templates e dados dos produtos.
    - **template/**: Modelo para as páginas de produtos.
      - `index.html`: Template para páginas de produtos.
      - **assets/**: Estilos e scripts específicos para produtos.
    - **catalogo/**: Contém o catálogo de produtos em formato JSON.
  - **components/**: Componentes reutilizáveis do site, como cabeçalho e rodapé.
  - **shared/**: Estilos e scripts globais aplicados em todo o site.
- **data/**: Contém arquivos JSON com dados de produtos e configurações do site.
- **api/**: Lógica para manipulação de produtos e slugs.

## Funcionalidades

- **Gerenciamento de Produtos**: Adicione, edite e remova produtos através do dashboard.
- **Visualização de Produtos**: Cada produto possui uma página dedicada com informações detalhadas, incluindo imagens, vídeos, depoimentos e opções de pagamento.
- **Carrinho de Compras**: Os usuários podem adicionar produtos ao carrinho e visualizar suas seleções antes de finalizar a compra.
- **Recomendações de Produtos**: Produtos relacionados são exibidos nas páginas de produtos para incentivar compras adicionais.
- **Checkout Integrado**: O site utiliza a plataforma Vegas Checkout para processar pagamentos de forma segura.

## Como Usar

1. Clone o repositório em sua máquina local.
2. Navegue até a pasta do projeto.
3. Abra o arquivo `src/dashboard/index.html` em um navegador para acessar o dashboard.
4. Utilize o dashboard para adicionar produtos e gerenciar seu catálogo.
5. Acesse as páginas de produtos para visualizar e comprar.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorias e correções.

## Licença

Este projeto é de uso pessoal e não deve ser utilizado para fins comerciais sem autorização.