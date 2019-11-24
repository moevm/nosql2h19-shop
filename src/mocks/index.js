export const getUsers = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        "users": [
          {
            "age": 20,
            "sex": "male",
            "spendings": "0",
            "accounts": [],
            "name": "Дмитрий Глазков",
            "id": "L1NuOy93H9bl36Fh9sSy"
          }
        ]
      })
    }, 500)
  })
};


export const getUser = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        "user": {
          "accounts": [],
          "name": "Дмитрий Глазков",
          "age": 20,
          "sex": "male",
          "spendings": "0",
          "id": "L1NuOy93H9bl36Fh9sSy"
        }
      })
    }, 500)
  })
};

export const getUserStatAllTime = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        "categories": [
          [
            "Супермаркеты",
            1
          ],
          [
            "Перевод",
            1
          ],
          [
            "Другое",
            1
          ],
          [
            "Аптека",
            1
          ]
        ]
      })
    }, 500)
  })
};

export const getUserStatAllPeriod = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        "categories": [
          [
            "Супермаркеты",
            1
          ],
          [
            "Перевод",
            1
          ],
          [
            "Другое",
            1
          ]
        ]
      })
    }, 500)
  })
};

export const getUserTransactions = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        "transactions": [
          {
            "category": "Супермаркеты",
            "userId": "L1NuOy93H9bl36Fh9sSy",
            "created": {
              "_seconds": 1573938000,
              "_nanoseconds": 0
            },
            "accountId ": "2532",
            "amount": 200,
            "id": "352678"
          },
          {
            "userId": "L1NuOy93H9bl36Fh9sSy",
            "accountId": "2534",
            "created": {
              "_seconds": 1574370000,
              "_nanoseconds": 0
            },
            "amount": 150,
            "category": "Перевод",
            "id": "395105"
          },
          {
            "category": "Другое",
            "userId": "L1NuOy93H9bl36Fh9sSy",
            "accountId": "2534",
            "created": {
              "_seconds": 1574283600,
              "_nanoseconds": 0
            },
            "amount": 100,
            "id": "395641"
          },
          {
            "userId": "L1NuOy93H9bl36Fh9sSy",
            "accountId": "2532",
            "created": {
              "_seconds": 1572901200,
              "_nanoseconds": 0
            },
            "amount": 240,
            "category": "Аптека",
            "id": "483964"
          }
        ]
      })
    }, 500)
  })
};
