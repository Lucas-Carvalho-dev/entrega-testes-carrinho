const Carrinho = require('./carrinho');

describe('Carrinho de Compras', () => {
  let carrinho;

  beforeEach(() => {
    carrinho = new Carrinho();
  });

  test('deve adicionar um item ao carrinho', () => {
    carrinho.adicionarItem('Produto A', 2, 10.00);
    expect(carrinho.itens.length).toBe(1);
    expect(carrinho.itens[0].nome).toBe('Produto A');
    expect(carrinho.itens[0].quantidade).toBe(2);
    expect(carrinho.itens[0].precoUnitario).toBe(10.00);
  });

  test('deve adicionar mais quantidade de um item já existente', () => {
    carrinho.adicionarItem('Produto B', 1, 25.00);
    carrinho.adicionarItem('Produto B', 2, 25.00);
    expect(carrinho.itens.length).toBe(1);
    expect(carrinho.itens[0].quantidade).toBe(3);
  });

  test('deve remover um item do carrinho', () => {
    carrinho.adicionarItem('Produto C', 1, 5.00);
    carrinho.removerItem('Produto C');
    expect(carrinho.itens.length).toBe(0);
  });

  test('não deve alterar o carrinho se tentar remover um item inexistente', () => {
    carrinho.adicionarItem('Produto D', 3, 12.50);
    carrinho.removerItem('Produto E');
    expect(carrinho.itens.length).toBe(1);
  });

  test('deve calcular o valor total do carrinho', () => {
    carrinho.adicionarItem('Produto F', 2, 7.50);
    carrinho.adicionarItem('Produto G', 1, 15.00);
    expect(carrinho.calcularTotal()).toBe(30.00);
  });

  test('deve aplicar um desconto percentual ao valor total', () => {
    carrinho.adicionarItem('Produto H', 1, 50.00);
    expect(carrinho.aplicarDesconto(10)).toBe(45.00);
  });

  test('deve retornar o item correto ao buscar por nome', () => {
    carrinho.adicionarItem('Produto I', 5, 2.00);
    const itemEncontrado = carrinho.buscarItem('Produto I');
    expect(itemEncontrado).toBeDefined();
    expect(itemEncontrado.quantidade).toBe(5);
  });

  test('deve retornar undefined ao buscar por um item inexistente', () => {
    expect(carrinho.buscarItem('Produto J')).toBeUndefined();
  });
});