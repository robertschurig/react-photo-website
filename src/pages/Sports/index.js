import { useFetch } from 'hooks/useFetch';

export const Sports = () => {
  const [imageList] = useFetch('data/istaf-2016.json');
  const onClicked = id => {
    alert(`fick: ${id}`);
  };

  return (
    <div className="columns is-multiline">
      {imageList.map(imageData => {
        return (
          <div
            key={imageData.id}
            className="column is-half-desktop is-one-tablet"
          >
            <div
              className="box c-image-grid__item2"
              onClick={() => onClicked(imageData.id)}
            >
              <figure className="image is-3by2">
                <img src={imageData.source} alt="" />
                <div className="overlay">
                  <span className="text">hello</span>
                </div>
              </figure>
            </div>
          </div>
        );
      })}
    </div>
  );
};
