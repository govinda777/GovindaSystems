import React, { useState } from 'react'
import { useWeb3 } from '@3rdweb/hooks'

const style = {
  container: 'bg-gray-800 p-6 rounded-lg shadow-lg mb-12',
  title: 'text-2xl font-bold mb-6',
  formGroup: 'mb-4',
  label: 'block text-gray-300 mb-2',
  input: 'w-full bg-gray-700 p-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none',
  textarea: 'w-full bg-gray-700 p-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none min-h-[120px]',
  select: 'w-full bg-gray-700 p-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none',
  button: 'bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 mt-4',
  errorText: 'text-red-500 mt-2',
  walletPrompt: 'text-center py-8',
  connectButton: 'bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300',
}

const ProposalSubmission = () => {
  const { address, connectWallet } = useWeb3()
  const [formData, setFormData] = useState({
    title: '',
    category: 'desenvolvimento',
    description: '',
    budget: '',
    duration: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.title.trim()) {
      newErrors.title = 'Título é obrigatório'
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Descrição é obrigatória'
    } else if (formData.description.trim().length < 50) {
      newErrors.description = 'Descrição deve ter pelo menos 50 caracteres'
    }
    
    if (formData.budget.trim() && isNaN(Number(formData.budget))) {
      newErrors.budget = 'Orçamento deve ser um número'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Simulação de envio para API ou blockchain
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      
      // Reset form
      setFormData({
        title: '',
        category: 'desenvolvimento',
        description: '',
        budget: '',
        duration: '',
      })
      
      // Reset success message after delay
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error) {
      console.error('Erro ao enviar proposta:', error)
      setErrors(prev => ({
        ...prev,
        submit: 'Erro ao enviar proposta. Tente novamente.'
      }))
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!address) {
    return (
      <div className={style.container}>
        <h2 className={style.title}>Enviar Nova Proposta</h2>
        <div className={style.walletPrompt}>
          <p className="mb-4">Conecte sua carteira MetaMask para enviar uma proposta.</p>
          <button 
            className={style.connectButton}
            onClick={() => connectWallet('injected')}
          >
            Conectar Carteira
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={style.container}>
      <h2 className={style.title}>Enviar Nova Proposta</h2>
      
      {submitSuccess && (
        <div className="bg-green-900 text-green-100 p-4 rounded-lg mb-6">
          Sua proposta foi enviada com sucesso e será analisada pela comunidade!
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="title">Título da Proposta</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={style.input}
            placeholder="Exemplo: Desenvolvimento de DApp para Pagamentos"
          />
          {errors.title && <p className={style.errorText}>{errors.title}</p>}
        </div>
        
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="category">Categoria</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={style.select}
          >
            <option value="desenvolvimento">Desenvolvimento</option>
            <option value="marketing">Marketing</option>
            <option value="governanca">Governança</option>
            <option value="design">Design</option>
            <option value="educacao">Educação</option>
            <option value="outros">Outros</option>
          </select>
        </div>
        
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="description">Descrição Detalhada</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={style.textarea}
            placeholder="Descreva sua proposta, seus objetivos, benefícios para a comunidade e como será implementada..."
          />
          {errors.description && <p className={style.errorText}>{errors.description}</p>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={style.formGroup}>
            <label className={style.label} htmlFor="budget">Orçamento Estimado (Opcional, em GOV)</label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={style.input}
              placeholder="Exemplo: 5000"
            />
            {errors.budget && <p className={style.errorText}>{errors.budget}</p>}
          </div>
          
          <div className={style.formGroup}>
            <label className={style.label} htmlFor="duration">Duração Estimada (Opcional)</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className={style.input}
              placeholder="Exemplo: 4 semanas"
            />
          </div>
        </div>
        
        {errors.submit && <p className={style.errorText}>{errors.submit}</p>}
        
        <button 
          type="submit" 
          className={style.button}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Proposta'}
        </button>
      </form>
    </div>
  )
}

export default ProposalSubmission 