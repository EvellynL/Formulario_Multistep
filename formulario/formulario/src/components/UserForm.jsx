import React from 'react'

const UserForm = ({data, updateFielHandle}) => {
  return (
    <div>
        <div className="form-control">
          <label htmlFor="name">Nome:</label>
          <input 
          type="name"
          name="name"
          id="name"
          placeholder="Digite o seu nome"
          required
          value={data.name || ""}
          onChange={(e) => updateFielHandle("name", e.target.value)} />
        </div>
        
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input 
          type="email"
          name="email"
          id="email"
          placeholder="Digite o seu email"
          required
          value={data.email || ""}
          onChange={(e) => updateFielHandle("email", e.target.value)} />
        </div>
    </div>
  )
}

export default UserForm