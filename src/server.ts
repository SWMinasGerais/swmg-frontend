import express from 'express'
import payload from 'payload'
import dotenv from 'dotenv'
import payloadConfig from '../payload.config.sqlite'

// Garante que as variáveis de ambiente estão carregadas
dotenv.config()

console.log('======= VARIÁVEIS DE AMBIENTE =======')
console.log('POSTGRES_URL:', process.env.POSTGRES_URL ? 'Configurada' : 'NÃO CONFIGURADA');
console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Configurada' : 'NÃO CONFIGURADA');
console.log('PAYLOAD_SECRET:', process.env.PAYLOAD_SECRET ? 'Configurada' : 'NÃO CONFIGURADA');
console.log('PORT:', process.env.PORT || '3001 (padrão)');
console.log('====================================')

console.log('Configuração do PayloadConfig:', payloadConfig ? 'Carregada' : 'NÃO carregada');

const start = async () => {
  const app = express()

  // @ts-expect-error - A propriedade express não está nas tipagens, mas é necessária
  await payload.init({
    config: payloadConfig,
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  const PORT = Number(process.env.PORT) || 3001
  app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
  })
}

start()
  .catch(error => {
    console.error('Erro ao iniciar servidor:', error)
  }) 