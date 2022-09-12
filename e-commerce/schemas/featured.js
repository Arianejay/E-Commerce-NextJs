export default {
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'retailPrice',
      title: 'Retail Price',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'colorway',
      title: 'Colorway',
      type: 'string',
    },
    {
      name: 'releaseDate',
      title: 'Release Date',
      type: 'string',
    },
    {
      name: 'styleCode',
      title: 'Style Code',
      type: 'string',
    },
  ],
}