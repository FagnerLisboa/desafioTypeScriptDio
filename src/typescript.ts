//Desafio 1: 
const employee: { code: number; name: string } = {
    code: 10,
    name: "John",
  };
  
  //Desafio 2: 
  
  enum Trabalho {
    Atriz,
    Padeiro,
  }
  
  type pessoa = {
    nome: string;
    idade: number;
    profissao: Trabalho;
  };
  
  const pessoa1: pessoa = {
    nome: 'Maria',
    idade: 29,
    profissao: Trabalho.Atriz,
  };
  
  const pessoa2: pessoa = {
    nome: 'Roberto',
    idade: 19,
    profissao: Trabalho.Padeiro,
  };
  
  const pessoa3: pessoa = {
    nome: 'laura',
    idade: 32,
    profissao: Trabalho.Atriz,
  };
  
  const pessoa4: pessoa = {
    nome: 'carlos',
    idade: 19,
    profissao: Trabalho.Padeiro,
  };
  
  //Desafio 3:
  
  let botaoAtualizar = document.getElementById("atualizar-saldo");
  let botaoLimpar = document.getElementById("limpar-saldo")!;
  let soma = document.getElementById("soma")! as HTMLInputElement;
  let campoSaldo = document.getElementById("campo-saldo");
  let saldoTotal = 0;
  
  limparSaldo();
  
  function somarAoSaldo(soma: number) {
    if (campoSaldo) {
      saldoTotal += soma;
      campoSaldo.innerHTML = saldoTotal.toString();
      limparCampoSoma();
    }
  }
  
  function limparCampoSoma() {
    soma.value = "";
  }
  
  function limparSaldo() {
    if (campoSaldo) {
      saldoTotal = 0;
      campoSaldo.innerHTML = saldoTotal.toString();
    }
  }
  
  if (botaoAtualizar) {
    botaoAtualizar.addEventListener("click", () => {
      somarAoSaldo(Number(soma.value));
    });
  }
  botaoLimpar.addEventListener("click", () => {
    limparSaldo();
  });