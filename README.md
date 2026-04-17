# 🚀 Testes de Performance com K6

Este projeto contém testes de performance para os endpoints de **Clientes** e **Produtos** da API EBAC Demo Store.

---

## 📌 Tecnologias utilizadas

* [K6](https://k6.io/)
* JavaScript

---

## 📥 Pré-requisitos

Antes de rodar os testes, você precisa:

### 1. Instalar o K6

https://k6.io/docs/getting-started/installation/

---

### 2. Subir a API localmente

Clone o repositório da API:

```bash
git clone https://github.com/EBAC-QE/ebac-demo-store-server
cd ebac-demo-store-server
npm install
npm start
```

A API será iniciada em:

```
http://localhost:3000
```

---

## ▶️ Como executar os testes

### Teste de Clientes

```bash
k6 run tests/customers.test.js
```

### Teste de Produtos

```bash
k6 run tests/products.test.js
```

---

## ⚙️ Configuração opcional

Você pode alterar a URL da API usando variável de ambiente:

```bash
k6 run -e BASE_URL=http://localhost:3000 tests/products.test.js
```

---

## 📊 Métricas avaliadas

* Tempo de resposta (95% < 500ms)
* Taxa de sucesso dos checks (> 95%)
* Status HTTP 200
* Retorno de lista válida

---

## 📁 Estrutura do projeto

```
tests/
├── customers.test.js
└── products.test.js
```

---

## 📌 Observações

* Os testes simulam múltiplos usuários simultâneos (VUs)
* Cada teste roda por 30 segundos
* Os endpoints testados são:

  * `/api/customers`
  * `/api/products`

```
```
