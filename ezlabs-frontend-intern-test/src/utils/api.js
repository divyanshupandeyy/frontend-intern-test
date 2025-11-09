import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://vernanbackend.ezlab.in/api',
  headers: { 'Content-Type': 'application/json' }
})
