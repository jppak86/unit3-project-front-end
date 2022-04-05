import * as tokenService from './tokenService'
const BASE_URL = '/api/messages/'

export const getAllMessages = async () => {
  try {
    const res = await fetch(`${BASE_URL}`)
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const createMessage = async (message) => {
  console.log(message)
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(message)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const updateMessage = async (message, messageId) => {

  try {
    const res = await fetch(`${BASE_URL}${messageId}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(message)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const deleteMessage = async (messageId) => {
  try {
    await fetch(`${BASE_URL}${messageId}`, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
    })
  } catch (error) {
    throw error
  }
}