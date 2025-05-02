class Carrinho {
    constructor() {
      this.itens = [];
    }
  
    adicionarItem(nome, quantidade, precoUnitario) {
      const itemExistente = this.itens.find(item => item.nome === nome);
      if (itemExistente) {
        itemExistente.quantidade += quantidade;
      } else {
        this.itens.push({ nome, quantidade, precoUnitario });
      }
    }
  
    removerItem(nome) {
      this.itens = this.itens.filter(item => item.nome !== nome);
    }
  
    calcularTotal() {
      return this.itens.reduce((total, item) => total + item.quantidade * item.precoUnitario, 0);
    }
  
    aplicarDesconto(percentual) {
      const desconto = this.calcularTotal() * (percentual / 100);
      return this.calcularTotal() - desconto;
    }
  
    buscarItem(nome) {
      return this.itens.find(item => item.nome === nome);
    }
  }
  
  module.exports = Carrinho;