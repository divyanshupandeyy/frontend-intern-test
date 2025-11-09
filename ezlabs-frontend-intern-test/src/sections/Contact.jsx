import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { contactSchema } from '../utils/validation'
import { api } from '../utils/api'
import toast from 'react-hot-toast'
import { useState } from 'react'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(contactSchema)
  })

  const onSubmit = async (data) => {
    if (loading) return
    setLoading(true)
    try {
      const res = await api.post('/contact-us/', data)
      if (res.status === 200) {
        toast.success('Form Submitted')
        reset()
      } else {
        toast.error('Unexpected response. Try again.')
      }
    } catch (e) {
      toast.error('Submission failed. Check your network and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-white">
      <div className="container py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Contact us</h2>
          <p className="text-gray-600 mt-2">Have a project in mind? We’d love to hear it.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto grid gap-4 card p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label" htmlFor="name">Name</label>
              <input id="name" aria-invalid={!!errors.name} className="input" placeholder="Jane Doe" {...register('name')} />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>
            <div>
              <label className="label" htmlFor="email">Email</label>
              <input id="email" type="email" aria-invalid={!!errors.email} className="input" placeholder="jane@email.com" {...register('email')} />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label className="label" htmlFor="phone">Phone</label>
            <input id="phone" aria-invalid={!!errors.phone} className="input" placeholder="+91 98765 43210" {...register('phone')} />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="label" htmlFor="message">Message</label>
            <textarea id="message" rows="5" aria-invalid={!!errors.message} className="input" placeholder="Tell us about your project" {...register('message')} />
            {errors.message && <p className="error">{errors.message.message}</p>}
          </div>

          <button disabled={loading} className="btn btn-primary disabled:opacity-60">
            {loading ? 'Submitting…' : 'Submit'}
          </button>

          <p className="helper">We never share your details. By submitting, you agree to be contacted regarding your request.</p>
        </form>
      </div>
    </section>
  )
}
