import nodemailer from 'nodemailer'
import handlebarsMailTemplate from './HandlebarsMailTemplate'

interface IEmailContact {
  name: string
  email: string
}

interface ITemplateVariable {
  [key: string]: string | number
}

interface IParserMailTemplate {
  file: string
  variables: ITemplateVariable
}

interface ISendMail {
  to: IEmailContact
  from?: IEmailContact
  subject: string
  templateData: IParserMailTemplate
}

export default class EtherealMail {
  static async sendMail({ to, from, subject, templateData }: ISendMail): Promise<void> {
    const account = await nodemailer.createTestAccount()
    const mailTemplate = new handlebarsMailTemplate()

    const transporter = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass
      }
    })

    const message = await transporter.sendMail({
      from: {
        name: from?.name || 'Equipe de suporte ao usuário',
        address: from?.email || 'suporte@lovesushis.com'
      },

      to: {
        name: to.name,
        address: to.email
      },

      subject,
      html: await mailTemplate.parser(templateData)
    })

    console.log('Message sent: %s', message.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message))
  }
}
