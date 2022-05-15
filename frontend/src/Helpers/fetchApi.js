
export async function createUserApi(usuario, email, senha) {
  return await fetch('http://localhost:3001/user', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000/login',
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ usuario, email, senha })
  });
};

export async function loginApi(usuario, senha) {
  return await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000/login',
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ usuario, senha })
    
  });
}

export async function createProductApi(token, nome, preco, imagem, pontos) {
  return await fetch('http://localhost:3001/product', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000/home',
      "Content-Type": "application/json",
      "Authorization": token,
    },
    body: JSON.stringify({ nome, preco, imagem, pontos})
  });
};

export async function getProducts(token) {
  const result = await fetch(`http://localhost:3001/product`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000/home',
      "Content-Type": "application/json",
      "Authorization": `${token}`
    },
  });
  const data = await result.json();
  return data;
}

export async function getUserByUsername(token, usuario) {
  const result = await fetch(`http://localhost:3001/user/${usuario}`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000/home',
      "Content-Type": "application/json",
      "Authorization": `${token}`
    },
  });
  const data = await result.json();
  return data;
}

export async function updateUserCoinsPts(usuario, pontos, moedas) {
  const result = await fetch(`http://localhost:3001/user/${usuario}`, {
    method: 'PUT',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000/home',
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ pontos, moedas })
  });
  return result;
}

export async function userBuyingCoins(usuario, moedas) {
  const result = await fetch(`http://localhost:3001/user/${usuario}/moedas`,{
    method: 'PUT',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000/home',
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ moedas })
  }) 
  return result;
}