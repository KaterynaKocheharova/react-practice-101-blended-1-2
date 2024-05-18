import { getPhotos } from 'apiService/photos';
import { Form, Text } from 'components';
import { useState, useEffect } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (!query) return;
    const getImages = async () => {
      setIsLoading(true);
      try {
        const { photos, per_page, total_results } = await getPhotos(
          query,
          page,
        );
        if (!photos.length) {
          setIsEmpty(true);
          return;
        }
        setImages(prevImages => [...prevImages, ...photos]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const handleSubmit = query => {
    setQuery(query);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} />
      <Text textAlign="center">Let`s begin search 🔎</Text>
    </>
  );
};
