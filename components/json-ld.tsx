interface JsonLdProps {
  data: Record<string, unknown>;
}

const defaultPublisher = {
  '@type': 'Organization',
  name: 'Coinmerce',
};

export function JsonLd({ data }: JsonLdProps) {
  const jsonLdData = {
    '@context': 'https://schema.org',
    publisher: defaultPublisher,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLdData),
      }}
    />
  );
}
