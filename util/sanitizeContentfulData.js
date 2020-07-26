export default function sanitizeContentfulData(contentful) {
  return contentful.items.map(({ fields }) => ({
    id: fields.id,
    name: fields.name,
    category: fields.category,
    date: fields.date,
    price: fields.price,
    producer: fields.producer,
    productionArea: {
      lon: fields.productionArea.lon,
      lat: fields.productionArea.lat,
    },
    url: fields.url,
    date: fields.date,
    date: fields.date,
  }));
}
