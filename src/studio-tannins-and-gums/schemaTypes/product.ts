export const product = {
  name: 'product',
  title: 'Productos del Carousel',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nombre del Producto',
      type: 'localeString', // Usa el objeto de 4 idiomas
    },
    {
      name: 'tagline',
      title: 'Tagline (Eslogan corto)',
      type: 'localeString',
    },
    {
      name: 'description',
      title: 'Descripción completa',
      type: 'object', // Para párrafos más largos
      fields: [
        {name: 'es', type: 'text', title: 'Español'},
        {name: 'en', type: 'text', title: 'English'},
        {name: 'de', type: 'text', title: 'Deutsch'},
        {name: 'zh', type: 'text', title: '中文'},
      ],
    },
    {
      name: 'gradient',
      title: 'Clases de Gradiente (Tailwind)',
      type: 'string',
      initialValue: 'from-green-900 via-green-800 to-emerald-950',
    },
    {
      name: 'accent',
      title: 'Color de Acento (RGBA)',
      type: 'string',
      description: 'Ejemplo: rgba(34, 197, 94, 0.4)',
    },
    {
      name: 'productImage',
      title: 'Imagen del Producto',
      type: 'image',
      options: {hotspot: true},
    },
  ],
}
