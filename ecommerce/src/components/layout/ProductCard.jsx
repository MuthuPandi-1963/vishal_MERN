import React from 'react'

export default function ProductCard({ id, name, c_id, b_id, image }) {
  return (
    <div className="rounded-xl border bg-white shadow-sm p-4 hover:shadow-md">
    <img src={image} alt={name} className="h-40 w-full object-cover mb-3 rounded-md" />
    <div>
      <h4 className="text-sm font-semibold mb-1">{name}</h4>
      <p className="text-xs text-gray-500">Brand: {b_id}</p>
      <p className="text-xs text-gray-400">Category: {c_id}</p>
    </div>
  </div>
  )
}
