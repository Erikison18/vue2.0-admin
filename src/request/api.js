import service from "./service"

export function getRequest(url) {
  return new Promise((resolve, reject) => {
    service
      .get(url)
      .then((res) => resolve(res))
      .catch((error) => reject(error))
  })
}

export function postRequest(url, data) {
  return new Promise((resolve, reject) => {
    service
      .post(url, data)
      .then((res) => resolve(res))
      .catch((error) => reject(error))
  })
}
