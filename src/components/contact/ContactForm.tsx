import { useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { serviceOptions } from '../../data/site'
import { cn } from '../../lib/utils'

type Status = 'idle' | 'sending' | 'sent' | 'error'

interface FormState {
  name: string
  company: string
  email: string
  phone: string
  service: string
  message: string
  consent: boolean
  trap: string
}

const initialState: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  consent: false,
  trap: '',
}

const inputClass =
  'field-line text-sm md:text-base'

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string
  htmlFor: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="label-caps mb-2 block text-muted">
        {label}
        {required ? (
          <span aria-hidden className="ml-1">
            *
          </span>
        ) : null}
      </label>
      {children}
    </div>
  )
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<Status>('idle')

  const set = (key: keyof FormState) => (value: string | boolean) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const mailtoFallback = () => {
    const subject = encodeURIComponent('Projektanfrage über die Website' + (form.service ? ' – ' + form.service : ''))
    const body = [
      'Name: ' + form.name,
      'Unternehmen: ' + form.company,
      'E-Mail: ' + form.email,
      'Telefon: ' + form.phone,
      'Leistung: ' + form.service,
      '',
      form.message,
    ].join('\n')
    window.location.href = 'mailto:office@one4all-klimatechnik.com?subject=' + subject + '&body=' + encodeURIComponent(body)
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (form.trap) return
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      return
    }
    setStatus('sending')
    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT
    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        if (!res.ok) throw new Error(String(res.status))
      } else {
        mailtoFallback()
      }
      setStatus('sent')
      setForm(initialState)
    } catch {
      mailtoFallback()
      setStatus('sent')
    }
  }

  if (status === 'sent') {
    return (
      <div className="border border-line p-10 lg:p-14" role="status">
        <span className="flex size-10 items-center justify-center border border-ink">
          <Check size={18} strokeWidth={1.5} aria-hidden />
        </span>
        <h3 className="mt-8 font-display text-2xl font-light tracking-tight">Danke für Ihre Anfrage.</h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
          Ihre Nachricht wurde vorbereitet. Wir melden uns, sobald wir Ihr Projekt geprüft haben.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="u-link mt-8 inline-block pb-1 text-[12px] font-medium uppercase tracking-caps"
        >
          Weitere Anfrage senden
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate={false} className="space-y-9">
      <div className="grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2">
        <Field label="Name" htmlFor="cf-name" required>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={(e) => set('name')(e.target.value)}
            className={inputClass}
            placeholder="Ihr Name"
          />
        </Field>
        <Field label="Unternehmen" htmlFor="cf-company">
          <input
            id="cf-company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={(e) => set('company')(e.target.value)}
            className={inputClass}
            placeholder="Ihr Unternehmen"
          />
        </Field>
        <Field label="E-Mail" htmlFor="cf-email" required>
          <input
            id="cf-email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(e) => set('email')(e.target.value)}
            className={inputClass}
            placeholder="name@firma.at"
          />
        </Field>
        <Field label="Telefon" htmlFor="cf-phone">
          <input
            id="cf-phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => set('phone')(e.target.value)}
            className={inputClass}
            placeholder="+43 ..."
          />
        </Field>
      </div>

      <Field label="Leistung" htmlFor="cf-service">
        <div className="relative">
          <select
            id="cf-service"
            value={form.service}
            onChange={(e) => set('service')(e.target.value)}
            className={cn(inputClass, 'appearance-none pr-8', !form.service && 'text-muted')}
          >
            <option value="">Bitte wählen …</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ArrowUpRight
            size={14}
            strokeWidth={1.5}
            aria-hidden
            className="pointer-events-none absolute right-1 top-4 rotate-45 text-muted"
          />
        </div>
      </Field>

      <Field label="Ihre Nachricht" htmlFor="cf-message" required>
        <textarea
          id="cf-message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => set('message')(e.target.value)}
          className={cn(inputClass, 'resize-none')}
          placeholder="Beschreiben Sie kurz Ihr Vorhaben oder Anliegen."
        />
      </Field>

      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={form.trap}
        onChange={(e) => set('trap')(e.target.value)}
        className="absolute -left-[9999px] size-0 opacity-0"
      />

      {status === 'error' && (
        <p role="alert" className="text-sm text-red-700">
          Bitte füllen Sie Name, E-Mail und Nachricht aus.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="group inline-flex items-center gap-3 border border-ink px-8 py-4 text-[12px] font-medium uppercase tracking-caps transition-colors duration-300 hover:bg-ink hover:text-paper disabled:cursor-wait disabled:opacity-60"
      >
        {status === 'sending' ? 'Wird gesendet …' : 'Anfrage senden'}
        <ArrowUpRight
          size={14}
          strokeWidth={1.75}
          aria-hidden
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </button>
    </form>
  )
}
