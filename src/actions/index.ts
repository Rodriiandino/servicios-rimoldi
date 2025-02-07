import { ActionError, defineAction } from 'astro:actions'
import { z } from 'astro:schema'
import { Resend } from 'resend'

const resend = new Resend(import.meta.env.RESEND_API_KEY)
const turnstileURL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
const turnstileSecret = import.meta.env.TURNSTILE_SECRET_KEY

export const server = {
  send: defineAction({
    accept: 'form',
    input: z.object({
      name: z
        .string()
        .min(1, {
          message: 'El nombre debe tener al menos 1 caracter'
        })
        .max(100, {
          message: 'El nombre no puede tener más de 100 caracteres'
        }),
      email: z.string().email(),
      message: z
        .string()
        .min(3, {
          message: 'El mensaje debe tener al menos 3 caracter'
        })
        .max(244, {
          message: 'El mensaje no puede tener más de 244 caracteres'
        }),
      token: z.string()
    }),
    handler: async ({ name, email, message, token }) => {
      const formData = new FormData()
      formData.append('secret', turnstileSecret)
      formData.append('response', token)

      const result = await fetch(turnstileURL, {
        body: formData,
        method: 'POST'
      })

      const outcome = await result.json()

      if (!outcome.success) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message:
            'Ocurrió un error al validar el token de seguridad. Por favor, intenta nuevamente.'
        })
      }

      const { data, error } = await resend.emails.send({
        from: 'Formulario de Contacto <contacto@serviciosrimoldi.com>',
        to: ['rimoldi.elio78@gmail.com'],
        replyTo: email,
        subject: 'Mensaje de contacto desde el sitio web - Servicios Rimoldi',
        html: `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message}</p>
        `
      })

      if (error) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: error.message
        })
      }

      return data
    }
  })
}
